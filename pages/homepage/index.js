import { Fragment } from "react";
import Head from "next/head";
import HeroSection from "./HeroSection";
import WorkWith from "./WorkWith";
import HowWeWork from "./HowWeWork";
import Partners from "./Partners";
import CustomersFeedBack from "./CustomersFeedBack";
import ThingsToKnow from "./ThingsToKnow";
import ContactUs from "./ContactUs";
import CaseStudies from "./CaseStudies";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Saynine</title>
        <meta name="description" content="Saynine is a dynamic SEO agency that helps clients boost rankings through backlinks." />
      </Head>
      <div className="overflow-hidden">
        <div className="pt-16" />
        <HeroSection />
        <div className="pt-30" />
        <WorkWith />
        <div className="pt-32" />
        <HowWeWork />
        <div className="pt-14 md:pt-20" />
        <CaseStudies />
        <div className="pt-30" />
        <ThingsToKnow />
        <div className="pt-10" />
        <CustomersFeedBack />
        <div className="pt-30" />
        <Partners />
        <div className="pt-4" />
        <ContactUs />
      </div>
    </Fragment>
  );
}

export default HomePage;
