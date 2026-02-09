import Client from 'shopify-buy';
import { Product } from '../types';

// Helper to safely access environment variables
const getEnv = () => {
  try {
    return (import.meta as any).env || {};
  } catch {
    return {};
  }
};

const env = getEnv();

// Initialize the client
// You must set these in your Lovable/Vercel Environment Variables
const client = Client.buildClient({
  domain: env.VITE_SHOPIFY_DOMAIN || 'mock-shop.myshopify.com',
  storefrontAccessToken: env.VITE_SHOPIFY_STOREFRONT_TOKEN || 'mock-token'
});

export const fetchShopifyProducts = async (): Promise<Product[]> => {
  try {
    // Fetch all products (default limit is 20, you can increase this)
    const products = await client.product.fetchAll();

    // Map Shopify Data to your App's Product Interface
    return products.map((p: any) => {
      const variant = p.variants[0];
      
      // Attempt to parse rich description from Metafields if they exist, 
      // otherwise use default description
      let richDesc = [];
      try {
        // This is a placeholder. in real app you might fetch metafields specifically
        // For now, we use the HTML description
      } catch (e) {}

      return {
        id: p.id,
        name: p.title,
        description: p.description, // Plain text description
        // Format price
        price: `${variant.price.currencyCode} ${parseFloat(variant.price.amount).toLocaleString()}`,
        oldPrice: variant.compareAtPrice ? `${variant.price.currencyCode} ${parseFloat(variant.compareAtPrice.amount).toLocaleString()}` : undefined,
        
        image: p.images[0]?.src || '',
        
        // Map Shopify Product Type to your Category
        category: p.productType || 'General',
        
        sku: variant.sku,
        
        // Map all images to gallery
        gallery: p.images.map((img: any) => img.src),
        
        // Map Options (Color/Size)
        colors: p.options.find((o: any) => o.name.toLowerCase().includes('color'))?.values.map((v: any) => ({
             name: v.value,
             // You would need a helper to map color names to Hex codes, or use a metafield
             hex: '#000000' 
        })),

        // Default badge logic based on tags
        badge: p.tags.find((t: string) => t.includes('Best Seller') || t.includes('New') || t.includes('Sale'))?.value,
        
        // Use Shopify ID for checkout
        shopifyId: variant.id
      } as any;
    });
  } catch (error) {
    console.error("Error fetching from Shopify:", error);
    return [];
  }
};

export const createCheckout = async (lineItems: {variantId: string, quantity: number}[]) => {
  const checkout = await client.checkout.create();
  // Add items to checkout
  if (lineItems.length > 0) {
      await client.checkout.addLineItems(checkout.id, lineItems);
  }
  // Return the web url to redirect the user
  return checkout.webUrl;
};