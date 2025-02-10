"use client";

import Head from "next/head";

import Hero from "@/components/hero";
import ScrollToTop from "@/components/scrollToTop";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import About from "@/components/about";
import Projects from "@/components/projects";
import Sustainability from "@/components/sustainability";
import Assets from "@/components/assets";
import Contact from "@/components/contact";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Raveras Mines | Sustainable Rare Earth Minerals & Lithium Mining in
          West Africa
        </title>
        <meta
          name='description'
          content='Raveras Mines is a leading sustainable mining company specializing in rare earth elements and lithium production in West Africa. Discover our innovative projects, including the Shaki Spodumene Venture and Iseyin Lithium Deposits, and our commitment to Environmental, Social, and Governance (ESG) practices.'
        />
        <meta
          name='keywords'
          content='Rare Earth Minerals, Sustainable Mining, Lithium Mining in Nigeria, Spodumene Ore Production, West Africa Mining Hub, Responsible Mining Practices, Environmental and Social Governance, Shaki Project Nigeria, Iseyin Lithium Deposits, Mineral Processing Facilities, Low-Cost Rare Earth Production, African Mining Sector Growth, Sustainable Resource Extraction, Rare Earth Elements Supply, Mining Infrastructure Development, ibadan, udegi, jos, Shaki Spodumene, Iseyin Lithium, raveras mines, raveras, raverasmines'
        />
        <meta
          property='og:title'
          content='Raveras Mines | Sustainable Rare Earth Minerals & Lithium Mining in West Africa'
        />
        <meta
          property='og:description'
          content='Raveras Mines is a leading sustainable mining company specializing in rare earth elements and lithium production in West Africa. Discover our innovative projects, including the Shaki Spodumene Venture and Iseyin Lithium Deposits, and our commitment to Environmental, Social, and Governance (ESG) practices.'
        />
        <meta property='og:image' content='/trucks.png' />
      </Head>
      <Navbar />
      <main className='overflow-hidden'>
        <Hero />
        <About />
        <Projects />
        <Sustainability />
        <Assets />
        <Contact />
        <ScrollToTop />
        <Footer />
      </main>
    </>
  );
}
