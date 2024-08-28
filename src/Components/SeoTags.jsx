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
                <meta name="description" content={description} />
            </Helmet>
        </>
    )
}