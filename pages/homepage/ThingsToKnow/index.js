import React, { Fragment } from "react";
import Container from "../../../components/Container";
import Image from "next/image";

const content = {
  header: "What you need to know",
};

const classes = {
  container: "px-4 md:px-10 lg:px-14 xl:px-30",
  root: "mx-auto max-w-full z-10 relative",
  header: "font-bold text-2xl lg:text-3xl xl:text-4xl leading-tight",
  // container: 'flex flex-row h-306',
  // firstBlock: 'w-135 bg-primary-light',
  secondBlock: "pt md:w-8",
  thirdBlock: "flex flex-col h-64 justify-center md:h-auto md:w-135",
  blockHeader: "font-medium text-2xl leading-tight text-left",
  blockParagraph: "font-light text-lg leading-6 text-left",
};

const KNOWLEDGES = [
  {
    id: 1,
    containerClass: "flex flex-col md:flex-row md:h-64 lg:h-306",
    firstBlockClass: "w-full h-64 md:w-135 ",
    header: "We agree only on the minimum metrics",
    img: "/images/home_page/to_know_five.svg",
    alt: "TO_KNOW_FIVE",
    paragraph: `When it comes to building links and getting domains to refer to your website, we start with the minimum level of requirements, unless you have anything specific in mind.`,
  },
  {
    id: 2,
    containerClass: "flex flex-col md:flex-row-reverse md:h-64 lg:h-306",
    firstBlockClass: "w-full h-64 md:w-135 ",
    img: "/images/home_page/to_know_two.svg",
    alt: "TO_KNOW_TWO",
    header:
      "We work with legit business websites that offer either tools or services",
    paragraph: `The most efficient way to improve your SEO performance is getting authentic backlinks from real company websites such as SaaS or service platforms. This is the key reason why our clients have successful results.`,
  },
  {
    id: 3,
    containerClass: "flex flex-col md:flex-row md:h-64 lg:h-306",
    firstBlockClass: "w-full h-64 md:w-135 ",
    img: "/images/home_page/to_know_three.svg",
    alt: "TO_KNOW_THREE",
    header: "Pricing is quite sweet",
    paragraph: `With our link-building expertise, we create our own tools, such as an email finder, an outreaching option, etc so we don’t have to pay or charge extra for it.`,
  },
];

const ThingsToKnow = () => {
  return (
    <Fragment>
      <Container className={classes.container}>
        <div className={classes.root}>
          <h2 className={classes.header}>{content.header}</h2>
          <div className="pt-8 lg:pt-16" />
          {KNOWLEDGES.map((item) => (
            <div key={item.id}>
              <div className={item.containerClass}>
                <div className={item.firstBlockClass}>
                  <div className="w-full h-full relative">
                    <Image
                      src={item.img}
                      layout="fill"
                      className="w-full h-full crounded-tl-3xl rounded-br-3xl object-cover"
                      alt={item.alt}
                    />
                  </div>
                </div>
                <div className={classes.secondBlock} />
                <div className={classes.thirdBlock}>
                  <h3 className={classes.blockHeader}>{item.header}</h3>
                  <div className="pt-4" />
                  <p className={classes.blockParagraph}>{item.paragraph}</p>
                </div>
              </div>
              <div className="pt-14" />
            </div>
          ))}
        </div>
      </Container>
    </Fragment>
  );
};

export default ThingsToKnow;
