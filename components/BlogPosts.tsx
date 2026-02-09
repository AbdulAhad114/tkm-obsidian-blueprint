import React from 'react';

const posts = [
    {
        title: "Smart Bathroom Revolution: How TKM's Technology Enhances Comfort and Efficiency",
        date: "March 13, 2025",
        excerpt: "In today's connected world, the bathroom is evolving into a smart home bathroom hub, blending wellness with cutting-edge innovation. TKM's advanced solutions...",
        image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=500&q=80"
    },
    {
        title: "Elevate Your Space: Explore TKM's Surface Finishes for Timeless Bathrooms & Kitchens",
        date: "March 13, 2025",
        excerpt: "Explore TKM's surface finishes—chrome, matt black, gold & more. Elevate kitchens and bathrooms with durable, stylish designs.",
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=500&q=80"
    },
    {
        title: "Black in the Bathroom 2025: Timeless Luxury Meets Modern Design with TKM",
        date: "March 14, 2025",
        excerpt: "Ready to embrace black's timeless allure? Explore TKM's matt black collection and transform your bathroom into a sophisticated sanctuary.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=500&q=80"
    }
];

export const BlogPosts: React.FC = () => {
  return (
    <section className="mb-16 container mx-auto px-2 md:px-4">
      <h2 className="text-center text-xl md:text-2xl font-light mb-8">Feature Blog Posts</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
            <div key={idx} className="flex flex-col bg-gray-50 h-full">
                <div className="aspect-video w-full overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-sm leading-tight mb-2 h-10 line-clamp-2">{post.title}</h3>
                    <p className="text-[10px] text-gray-500 italic mb-4">Posted: {post.date}</p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-grow">{post.excerpt}</p>
                    <a href="#" className="text-tkm-teal text-xs font-bold hover:underline mt-auto">Read more»</a>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};