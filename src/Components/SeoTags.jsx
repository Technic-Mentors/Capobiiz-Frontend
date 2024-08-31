import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

export default function SeoTags() {
    const { pathname } = useLocation()
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (pathname === "/") {
            setName("Home")
            setTitle("Best Retail Software - Capobiz")
            setUrl("https://capobiz.com/")
            setImg("https://capobiz.com/static/media/header-circle-img.ac1aa3694992374a387e.avif")
            setDescription("CapoBiz POS offers top retail software to streamline sales, inventory, and customer management. Optimize your retail business with our advanced POS solutions.")
        } else if (pathname === "/about") {
            setName("About")
            setTitle("About CapoBiz POS - Retail Software Innovators")
            setUrl("https://capobiz.com/about")
            setImg("https://capobiz.com/static/media/why-choose-pos-software.cbb97a2e2b859e05a5c6.avif")
            setDescription("Learn about CapoBiz POS, a leader in retail software innovation. Our mission is to empower businesses with cutting-edge POS systems")
        } else if (pathname === "/pos-features") {
            setName("Features")
            setTitle("Features Of Advanced Retail Software - CapoBiz")
            setUrl("https://capobiz.com/pos-features")
            setImg("https://capobiz.com/static/media/pos-custom-features.9c3cfd4f8a3dca08e401.avif")
            setDescription("Explore CapoBiz POS features, designed to enhance retail management. Discover powerful tools for inventory, sales, and customer management.")
        } else if (pathname === "/system-hardware") {
            setName("System Hardware")
            setTitle("Compatible POS Hardware - CapoBiz")
            setUrl("https://capobiz.com/system-hardware")
            setImg("https://capobiz.com/static/media/cash-drawers-img.e2b46572c1e09fe3ee92.avif")
            setDescription("Discover the range of hardware devices compatible with CapoBiz POS. From barcode scanners to receipt printers, optimize your retail setup with the best tools.")
        } else if (pathname === "/pos-industries") {
            setName("Pos Industries")
            setTitle("Tailored Retail Software Solutions For All - Capobiz")
            setUrl("https://capobiz.com/pos-industries")
            setImg("https://capobiz.com/static/media/retail-shop-pos.50269f381a00f52295a8.avif")
            setDescription("Explore the industries supported by CapoBiz POS. Our versatile retail software is designed for various sectors, from restaurants to retail stores and beyond.")
        } else if (pathname === "/help") {
            setName("Help")
            setTitle("Support And Resources For Our Retail Software - CapoBiz")
            setUrl("https://capobiz.com/help")
            setImg("https://capobiz.com/static/media/help-img.e98695db018ac2bee340.avif")
            setDescription("Get assistance with CapoBiz POS. Access our Help Center for FAQs, guides, and expert support to make the most of your retail software.")
        } else if (pathname === "/blog") {
            setName("Blog")
            setTitle("CapoBiz POS Blog - Retail Software Insights")
            setUrl("https://capobiz.com/blog")
            setDescription("Explore the CapoBiz POS Blog for the latest tips, trends, and insights on retail software and effective business management.")
        } else if (pathname === "/faqs") {
            setName("FAQ'S")
            setTitle("FAQ's - CapoBiz")
            setUrl("https://capobiz.com/faqs")
            setDescription("Find answers to common questions about CapoBiz POS. Explore our FAQs for detailed information on our retail software, features, and support.")
        } else if (pathname === "/contact") {
            setName("Contact")
            setTitle("Get In Touch With Us - CapoBiz")
            setUrl("https://capobiz.com/contact")
            setDescription("Reach out to CapoBiz POS for support, inquiries, or more information. Our team is ready to assist you with your retail software needs.")
        }
    }, [pathname])
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='title' content={title} />
                <meta name="description" content={description} />
                {/* open grapgh tag */}
                <meta property="og:title" content={name} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={img} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />

                {/* twitter card  */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@TechnicMentors" />
                <meta name="twitter:title" content={name} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={img} />

                {/* Schema.org structured data */}
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": url,
            "name": "Technic Mentors",
            "description": description ,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://technicmentors.com/search?q={search_term_string}",
                "actionPlatform": [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/IOSPlatform",
                  "https://schema.org/AndroidPlatform"
                ]
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
                <link rel="canonical" href={url} />
            </Helmet>
        </>
    )
}



// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const SeoTags = () => {
//     const { pathname } = useLocation();
//     const [seoData, setSeoData] = useState({
//         name: "CapoBiz",
//         title: "Best Retail Software - Capobiz",
//         url: "https://capobiz.com/",
//         img: "https://capobiz.com/static/media/header-circle-img.ac1aa3694992374a387e.avif",
//         description: "CapoBiz POS offers top retail software to streamline sales, inventory, and customer management. Optimize your retail business with our advanced POS solutions."
//     });

//     useEffect(() => {
//         const seoTags = {
//             "/": {
//                 name: "Home",
//                 title: "Best Retail Software - Capobiz",
//                 url: "https://capobiz.com/",
//                 img: "https://capobiz.com/static/media/header-circle-img.ac1aa3694992374a387e.avif",
//                 description: "CapoBiz POS offers top retail software to streamline sales, inventory, and customer management. Optimize your retail business with our advanced POS solutions."
//             },
//             "/about": {
//                 name: "About",
//                 title: "About CapoBiz POS - Retail Software Innovators",
//                 url: "https://capobiz.com/about",
//                 img: "https://capobiz.com/static/media/why-choose-pos-software.cbb97a2e2b859e05a5c6.avif",
//                 description: "Learn about CapoBiz POS, a leader in retail software innovation. Our mission is to empower businesses with cutting-edge POS systems."
//             },
//             "/pos-features": {
//                 name: "Features",
//                 title: "Features Of Advanced Retail Software - CapoBiz",
//                 url: "https://capobiz.com/pos-features",
//                 img: "https://capobiz.com/static/media/pos-custom-features.9c3cfd4f8a3dca08e401.avif",
//                 description: "Explore CapoBiz POS features, designed to enhance retail management. Discover powerful tools for inventory, sales, and customer management."
//             },
//             "/system-hardware": {
//                 name: "System Hardware",
//                 title: "Compatible POS Hardware - CapoBiz",
//                 url: "https://capobiz.com/system-hardware",
//                 img: "https://capobiz.com/static/media/cash-drawers-img.e2b46572c1e09fe3ee92.avif",
//                 description: "Discover the range of hardware devices compatible with CapoBiz POS. From barcode scanners to receipt printers, optimize your retail setup with the best tools."
//             },
//             "/pos-industries": {
//                 name: "Pos Industries",
//                 title: "Tailored Retail Software Solutions For All - Capobiz",
//                 url: "https://capobiz.com/pos-industries",
//                 img: "https://capobiz.com/static/media/retail-shop-pos.50269f381a00f52295a8.avif",
//                 description: "Explore the industries supported by CapoBiz POS. Our versatile retail software is designed for various sectors, from restaurants to retail stores and beyond."
//             },
//             "/help": {
//                 name: "Help",
//                 title: "Support And Resources For Our Retail Software - CapoBiz",
//                 url: "https://capobiz.com/help",
//                 img: "https://capobiz.com/static/media/help-img.e98695db018ac2bee340.avif",
//                 description: "Get assistance with CapoBiz POS. Access our Help Center for FAQs, guides, and expert support to make the most of your retail software."
//             },
//             "/blog": {
//                 name: "Blog",
//                 title: "CapoBiz POS Blog - Retail Software Insights",
//                 url: "https://capobiz.com/blog",
//                 img: "https://capobiz.com/static/media/blog-img.avif",
//                 description: "Explore the CapoBiz POS Blog for the latest tips, trends, and insights on retail software and effective business management."
//             },
//             "/faqs": {
//                 name: "FAQ'S",
//                 title: "FAQ's - CapoBiz",
//                 url: "https://capobiz.com/faqs",
//                 img: "https://capobiz.com/static/media/faqs-img.avif",
//                 description: "Find answers to common questions about CapoBiz POS. Explore our FAQs for detailed information on our retail software, features, and support."
//             },
//             "/contact": {
//                 name: "Contact",
//                 title: "Get In Touch With Us - CapoBiz",
//                 url: "https://capobiz.com/contact",
//                 img: "https://capobiz.com/static/media/contact-img.avif",
//                 description: "Reach out to CapoBiz POS for support, inquiries, or more information. Our team is ready to assist you with your retail software needs."
//             },
//         };

//         setSeoData(seoTags[pathname] || seoTags["/"]);
//     }, [pathname]);

//     useEffect(() => {
//         document.title = seoData.title;

//         const metaDescription = document.querySelector('meta[name="description"]');
//         if (metaDescription) {
//             metaDescription.setAttribute('content', seoData.description);
//         } else {
//             const newMetaDescription = document.createElement('meta');
//             newMetaDescription.name = 'description';
//             newMetaDescription.content = seoData.description;
//             document.head.appendChild(newMetaDescription);
//         }

//         const metaOgTitle = document.querySelector('meta[property="og:title"]');
//         if (metaOgTitle) {
//             metaOgTitle.setAttribute('content', seoData.name);
//         } else {
//             const newMetaOgTitle = document.createElement('meta');
//             newMetaOgTitle.property = 'og:title';
//             newMetaOgTitle.content = seoData.name;
//             document.head.appendChild(newMetaOgTitle);
//         }

//         const metaOgDescription = document.querySelector('meta[property="og:description"]');
//         if (metaOgDescription) {
//             metaOgDescription.setAttribute('content', seoData.description);
//         } else {
//             const newMetaOgDescription = document.createElement('meta');
//             newMetaOgDescription.property = 'og:description';
//             newMetaOgDescription.content = seoData.description;
//             document.head.appendChild(newMetaOgDescription);
//         }

//         const metaOgImage = document.querySelector('meta[property="og:image"]');
//         if (metaOgImage) {
//             metaOgImage.setAttribute('content', seoData.img);
//         } else {
//             const newMetaOgImage = document.createElement('meta');
//             newMetaOgImage.property = 'og:image';
//             newMetaOgImage.content = seoData.img;
//             document.head.appendChild(newMetaOgImage);
//         }

//         const metaOgUrl = document.querySelector('meta[property="og:url"]');
//         if (metaOgUrl) {
//             metaOgUrl.setAttribute('content', seoData.url);
//         } else {
//             const newMetaOgUrl = document.createElement('meta');
//             newMetaOgUrl.property = 'og:url';
//             newMetaOgUrl.content = seoData.url;
//             document.head.appendChild(newMetaOgUrl);
//         }

//         const metaTwitterTitle = document.querySelector('meta[name="twitter:title"]');
//         if (metaTwitterTitle) {
//             metaTwitterTitle.setAttribute('content', seoData.name);
//         } else {
//             const newMetaTwitterTitle = document.createElement('meta');
//             newMetaTwitterTitle.name = 'twitter:title';
//             newMetaTwitterTitle.content = seoData.name;
//             document.head.appendChild(newMetaTwitterTitle);
//         }

//         const metaTwitterDescription = document.querySelector('meta[name="twitter:description"]');
//         if (metaTwitterDescription) {
//             metaTwitterDescription.setAttribute('content', seoData.description);
//         } else {
//             const newMetaTwitterDescription = document.createElement('meta');
//             newMetaTwitterDescription.name = 'twitter:description';
//             newMetaTwitterDescription.content = seoData.description;
//             document.head.appendChild(newMetaTwitterDescription);
//         }

//         const metaTwitterImage = document.querySelector('meta[name="twitter:image"]');
//         if (metaTwitterImage) {
//             metaTwitterImage.setAttribute('content', seoData.img);
//         } else {
//             const newMetaTwitterImage = document.createElement('meta');
//             newMetaTwitterImage.name = 'twitter:image';
//             newMetaTwitterImage.content = seoData.img;
//             document.head.appendChild(newMetaTwitterImage);
//         }

//     }, [seoData]);

//     return null;
// };

// export default SeoTags;
