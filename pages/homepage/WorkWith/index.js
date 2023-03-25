import React from "react";
import Image from "next/image";
import Container from "../../../components/Container";

const content = {
  header: "Who we work with",
};

const classes = {
  header: "font-bold text-2xl lg:text-4xl leading-tight text-center",
  partnersDiv:
    "grid grid-cols-2 gap-8 md:grid-cols-3 px-4 md:gap-10 md:px-5 align-baseline  items-center lg:px-4 lg:px-4 lg:grid-cols-7 ",
  partnersBlock:
    "flex items-center flex-col lg:justify-center lg:px-4 lg:soace-x-4 space-x-8",
  partnerCard:
    " flex items-center justify-center rounded-3xl shadow-gamma w-auto h-auto lg:w-32 lg:h-22 xl:w-165 xl:h-113",
};

const PARTNERS = [
  {
    id: 1,
    img: "/images/logos_with_svg/elementor-larg.svg",
    alt: "ELEMENTOR",
  },
  {
    id: 2,
    img: "/images/logos_with_svg/brandcrowd.svg",
    alt: "BRANDCROWD",
  },
  {
    id: 3,
    img: "/images/logos_with_svg/podcastle.svg",
    alt: "PODCASTLE",
  },
  {
    id: 4,
    img: "/images/logos_with_svg/referralcandy-logo.svg",
    alt: "referralcandy",
  },
  {
    id: 5,
    img: "/images/logos_with_svg/easydmarc.svg",
    alt: "EASYDMARC",
  },
  {
    id: 6,
    img: "/images/logos_with_svg/omnisend.svg",
    alt: "OMNISEND",
  },
  {
    id: 7,
    img: "/images/logos_with_svg/hopper.svg",
    alt: "HOPPER",
  },
];

const WorkWith = () => {
  return (
    <Container>
      <h2 className={classes.header}>{content.header}</h2>
      <div className="pt-6" />
      <div className={classes.partnersDiv}>
        {PARTNERS.map((item) => (
          <div key={item.id} className={classes.partnerCard}>
            <Image src={item.img} width="100%" height="100%" alt={item.alt} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkWith;
