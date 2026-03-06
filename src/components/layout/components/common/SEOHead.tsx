import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'product' | 'article';
  jsonLd?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage, 
  ogType = 'website',
  jsonLd 
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 3. Update Open Graph Tags
    const updateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property='${property}']`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:type', ogType);
    if (ogImage) updateMeta('og:image', ogImage);
    if (canonicalUrl) updateMeta('og:url', canonicalUrl);

    // 4. Update Canonical Link
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (canonicalUrl) {
        if (!linkCanonical) {
            linkCanonical = document.createElement("link");
            linkCanonical.setAttribute("rel", "canonical");
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute("href", canonicalUrl);
    }

    // 5. Inject JSON-LD
    if (jsonLd) {
        let script = document.getElementById('json-ld-schema');
        if (!script) {
            script = document.createElement('script');
            script.id = 'json-ld-schema';
            script.setAttribute('type', 'application/ld+json');
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(jsonLd);
    }

  }, [title, description, canonicalUrl, ogImage, ogType, jsonLd]);

  return null;
};