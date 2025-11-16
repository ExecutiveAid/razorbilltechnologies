export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Razorbill Technologies",
    "url": "https://razorbilltechnologies.com",
    "logo": "https://razorbilltechnologies.com/images/razorbill-logo.png",
    "description": "Empowering businesses with intelligent digital systems, automation, and seamless CRM solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+233256108055",
      "contactType": "customer service",
      "email": "info@razorbill.tech"
    },
    "sameAs": [
      "https://www.instagram.com/razorbilltech/",
      "https://www.linkedin.com/company/razorbill-technologies/",
      "https://twitter.com/razorbilltech"
    ],
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Jeffery Crentsil",
        "jobTitle": "Chief Technology Officer"
      }
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Jeffery Crentsil",
        "jobTitle": "Chief Technology Officer"
      }
    ],
    "serviceArea": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Enterprise Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CRM Systems",
            "description": "Custom CRM solutions for business management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web and app development solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Automation",
            "description": "Automation tools to streamline business processes"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
