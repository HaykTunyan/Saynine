import { Fragment } from "react";
import Image from "next/image";
import Container from "../../../components/Container";

const content = {
  header: "Our Customers Said",
};

const classes = {
  header:
    "font-bold text-2xl lg:text-3xl xl:text-4xl leading-tight md:text-center",
  cardsSection: "grid grid-cols-1 gap-5 md:grid-cols-1 xl:grid-cols-3 xl:gap-8",
  cardContainer:
    "rounded-tr-2xl rounded-br-xl rounded-bl-2xl shadow-gamma w-full h-72",
  cardBlock: "flex flex-col mx-4 md:mx-7 mt-7",
  cardBlockRow: "flex items-center justify-start space-x-4",
  cardBlockHeadersContainer: "flex flex-col",
  cardImage: "rounded-full grayscale",
  cardHeader: "font-bold text-lg leading-tight text-left",
  cardSubHeader: "font-normal	text-xs leading-tight text-left",
  cardDescription: "font-normal text-sm leading-tight text-left",
};

const USER_LIST = [
  {
    id: 1,
    name: "Azat Eloyan",
    alt: "AZAT ELOYAN",
    img: "/images/peoples/azat_eloyan.png",
    imgAlt: "AZAT_ELOYAN",
    position: "Chief Marketing Officer, Dexatel",
    description:
      "A super professional agency they know how to deliver relevant results and positively impact on website visibility and increase brand awareness. Just give him your targets and wait for the magic to happen. ",
  },
  {
    id: 2,
    name: "Yoni Yampolsky",
    alt: "YONI TYAMPLOSKY",
    img: "/images/peoples/yoni_yampolsky.png",
    imgAlt: "YONI_YAMPOLSKY",
    position: "Yoni Marketing manager, Elementor",
    description:
      "Georgi and his team are incredible. Always responsive and always deliver",
  },
  {
    id: 3,
    name: "Gerasim Hovhannisyan",
    alt: "GERASIM HOVHANNISYAN",
    img: "/images/peoples/gerasim_hovhannisyan.png",
    imgAlt: "GERASIM_HOVHANNISYAN",
    position: "CEO & Co-Founder, EasyDMARC",
    description:
      "We came across Saynine about 4 months ago and now we have 30% increased organic traffic from search engines. The quality of links with reasonable cost and the responsive and flexible staff makes Saynine great partner to work with. ",
  },
];

const CustomersFeedBack = () => {
  return (
    <Fragment>
      <Container className="px-4 md:px-10 lg:px-14 xl:px-30">
        <h2 className={classes.header}>{content.header}</h2>
        <div className="pt-8" />
        <div className={classes.cardsSection}>
          {USER_LIST.map((user) => (
            <div key={user.id} className={classes.cardContainer}>
              <div className={classes.cardBlock}>
                <div className={classes.cardBlockRow}>
                  <Image
                    src={user.img}
                    width={70}
                    height={70}
                    className={classes.cardImage}
                    alt={user.alt}
                  />
                  <div className={classes.cardBlockHeadersContainer}>
                    <h4 className={classes.cardHeader}>{user.name}</h4>
                    <div className="pt-1" />
                    <p className={classes.cardSubHeader}>{user.position}</p>
                  </div>
                </div>
                <div className="pt-4" />
                <p className={classes.cardDescription}>{user.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Fragment>
  );
};

export default CustomersFeedBack;
