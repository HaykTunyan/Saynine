import React from "react";
import Image from "next/image";
import Container from "../../../components/Container";
import classNames from "classnames";

const content = {
  header: "Our Partners",
};

const classes = {
  root: "relative pb-16",
  layer:
    "bg-primary absolute -left-20 top-0 w-150% h-full z-auto transform rotate-3",
  container: "relative",
  header: "font-bold text-light text-2xl lg:text-4xl leading-tight text-center",
  partnersBlock:
    "grid grid-cols-2 gap-8 md:grid-cols-3 px-4 md:gap-10 md:px-5 align-baseline items-center  lg:px-4 lg:grid-cols-7 ",
  partnerCard: "flex items-center justify-center max-h-30 flex-shrink-0",
};

const PARTNERS = [
  {
    id: 1,
    img: "/images/logos_svg/hive.svg",
    alt: "HIVE",
    classes: "w-full h-30",
  },
  {
    id: 2,
    img: "/images/logos_svg/youteam.svg",
    alt: "YOUTEAM",
    classes: "w-full h-30",
  },
  {
    id: 3,
    img: "/images/logos_svg/engati.svg",
    alt: "ENGATI",
    classes: "w-full h-30 ",
  },
  {
    id: 4,
    img: "/images/logos_svg/scalefusion.svg",
    alt: "SCALEFUSION",
    classes: "w-full h-30",
  },
  {
    id: 5,
    img: "/images/logos_svg/andcards.svg",
    alt: "ANDCARDS",
    classes: "w-165 h-12",
  },
  {
    id: 6,
    img: "/images/logos_svg/smartkarrot.svg",
    alt: "SMARTKARROT",
    classes: "w-full h-30",
  },
  {
    id: 7,
    img: "/images/logos_svg/brafton.svg",
    alt: "BRAFTON",
    classes: "w-full h-30",
  },
];

const Partners = () => {
  return (
    <div className={classes.root}>
      <div className={classes.layer} />
      <Container className={classes.container}>
        <div className="pt-8" />
        <h2 className={classes.header}>{content.header}</h2>
        <div className="pt-8" />
        <div className={classes.partnersBlock}>
          {PARTNERS.map((item) => (
            <div key={item.id} className={classNames(classes.partnerCard)}>
              <div className={classNames("relative", item?.classes)}>
                <Image src={item.img} alt={item.alt} layout="fill" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Partners;
