import React from 'react';
import { collections } from '../data/collections';
import { ProductCard } from './ProductCard';
import { InnovationSection } from './common/InnovationSection';
import { ChevronRight, Play } from 'lucide-react';

interface CollectionPageProps {
  collectionId: string;
  onNavigate?: (view: any, id?: string) => void;
  onAddToCart?: (product: any) => void;
  onQuickView?: (product: any) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({ collectionId, onNavigate, onAddToCart, onQuickView }) => {
  const collection = collections[collectionId];

  if (!collection) {
    return (
        <div className="container mx-auto px-4 py-24 text-center">
            <h2 className="text-2xl font-bold mb-4">Collection Not Found</h2>
            <p className="text-gray-600">The collection you are looking for does not exist.</p>
        </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-16">
      
      {/* Hero Section - Clean & Full Width */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-gray-100">
          <img 
            src={collection.image} 
            alt={collection.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-center px-6 md:px-24">
             <div className="max-w-2xl text-white">
                <div className="flex items-center text-xs md:text-sm font-medium mb-4 opacity-80">
                    <span className="cursor-pointer hover:underline" onClick={() => onNavigate && onNavigate('home')}>Home</span>
                    <ChevronRight size={14} className="mx-2" />
                    <span>{collection.title}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">{collection.title}</h1>
                <p className="text-lg md:text-xl font-light leading-relaxed drop-shadow-sm max-w-xl">
                    {collection.description}
                </p>
             </div>
          </div>
      </div>

      {/* Shop Latest Section */}
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 py-16">
          <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
               <h2 className="text-2xl md:text-3xl font-light text-gray-900">Shop Our Latest {collection.title}</h2>
               <button className="text-sm font-bold underline hover:text-tkm-teal uppercase tracking-wider">View all</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {collection.products.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={onAddToCart}
                    onQuickView={onQuickView}
                    onNavigate={onNavigate}
                  />
              ))}
          </div>
      </div>

      {/* Innovations / Features */}
      {collection.innovations && (
          <div className="w-full mb-16">
              {collection.innovations.map((inn, idx) => (
                  <InnovationSection 
                    key={idx}
                    title={inn.title}
                    subtitle={inn.subtitle}
                    description={inn.description}
                    image={inn.image}
                    align={inn.align}
                  />
              ))}
          </div>
      )}

      {/* Highlights (3 Column) */}
      {collection.highlights && (
          <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {collection.highlights.map((high, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center">
                          <div className="w-full h-[250px] overflow-hidden mb-4 rounded-sm">
                              <img src={high.image} alt={high.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                          </div>
                          <h3 className="text-sm font-bold uppercase tracking-widest">{high.title}</h3>
                      </div>
                  ))}
              </div>
          </div>
      )}

      {/* Video Banner */}
      {collection.videoBanner && (
          <div className="w-full mb-20 relative h-[500px] overflow-hidden bg-gray-900 group">
              <img src={collection.videoBanner.image} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" alt="Video Cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  {collection.videoBanner.subtitle && (
                      <span className="text-tkm-teal font-bold uppercase tracking-[0.2em] text-xs mb-4">{collection.videoBanner.subtitle}</span>
                  )}
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">{collection.videoBanner.title}</h2>
                  <p className="text-gray-300 text-lg max-w-2xl mb-10 font-light">{collection.videoBanner.description}</p>
                  
                  <button className="flex items-center gap-3 bg-white text-black px-8 py-3 uppercase text-sm font-bold tracking-widest hover:bg-tkm-teal hover:text-white transition-colors">
                      <Play size={16} fill="currentColor" /> Watch Video
                  </button>
              </div>
          </div>
      )}

      {/* Sub Categories Grid */}
      {collection.subCategories && (
          <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 mb-20">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-light mb-2">View by {collection.title.split(' ').slice(-1)} Type</h2>
                  <div className="w-16 h-1 bg-gray-200 mx-auto mt-4"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {collection.subCategories.map((sub, idx) => (
                      <div key={idx} className="relative h-[300px] group cursor-pointer overflow-hidden rounded-sm">
                          <img src={sub.image} alt={sub.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90" />
                          <div className="absolute inset-0 flex items-center justify-center">
                              <h3 className="text-white text-2xl font-bold drop-shadow-md border-b-2 border-transparent group-hover:border-white transition-all pb-1">{sub.title}</h3>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      )}

      {/* Inspiration / Blog */}
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-light mb-2">Get Inspired</h2>
                <p className="text-gray-500">How to Choose the Perfect {collection.title}</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50">
                 <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Blog" />
                 </div>
                 <div className="w-full md:w-1/2 p-8 md:p-16">
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Buying Guide</span>
                     <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">How to Choose the Perfect {collection.title} Finish?</h3>
                     <p className="text-gray-600 leading-relaxed mb-8">
                         Selecting the right finish is crucial for your bathroom or kitchen aesthetics. 
                         From classic Chrome to modern Matt Black or luxurious Gold, discover which style suits your home best.
                     </p>
                     <button className="bg-black text-white px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-tkm-teal transition-colors">
                         Read Article
                     </button>
                 </div>
            </div>
      </div>

    </div>
  );
};