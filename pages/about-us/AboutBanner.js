import React from "react";
import Container from "../../components/Container";
import Image from "next/image";

const content = {
  title_one: "Maximizing results",
  title_two: "with minimum effort!",
  paragraph:
    "We help businesses get their Off-Page SEO done cost-efficiently and achieve exceptional results in the shortest time frames possible. Our ninja link builders will help get the job done without going black hatty. ",
};

const AboutBanner = () => {
  return (
    <>
      <section className="mt-16 md:mt-30">
        <Container className="px-4 md:px-12 lg:px-30">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="pt-10 w-full md:w-82.5 lg:w-132.5 xl:w-36 xl:flex-shrink-0 xl:pt-20 order-2 md:order-1">
              <h2 className="font-bold text-2xl lg:text-4xl xl:text-5xl leading-tight">
                {content.title_one}
                <br />
                {content.title_two}
              </h2>
              <div className="pt-2" />
              <p className="leading-6">{content.paragraph}</p>
              <div className="pt-6" />
            </div>
            <div className="hidden xl:block xl:w-30 xl:order-2" />
            <div className="w-full flex justify-center md:w-82.5 mx-auto xl:w-450px xl:relative order-1 md:order-3">
              <Image
                src="/images/about_us/aboutus_updated.svg"
                width={445}
                height={340}
                alt="ABOUTUS_UPDATED"
                className="w-full md:w-96"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutBanner;
