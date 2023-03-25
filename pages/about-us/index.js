import { Fragment, useEffect } from "react";
import Head from "next/head";
import BannerTitle from "../../components/BannerTitle";
import Container from "../../components/Container";
import AboutBanner from "./AboutBanner";
import Image from "next/image";

export const userList = [
  {
    key: 1,
    name: "Georgi Mamajanyan",
    alt: "GEORGI MAMAJANYAN",
    postition: "Chief Executive Officer",
    img: "/images/peoples/georgi_mamajanyan.png",
    title: "SEO expert, Neuromarketing enthusiast, DMS specialist.",
    link: "https://www.linkedin.com/in/georgi-mamajanyan/",
  },
  {
    key: 2,
    name: "Areg Petrosyan",
    alt: "AREG PETROSYAN",
    postition: "Search Engine Optimization Specialist",
    img: "/images/peoples/areg_petrosyan.png",
    title: "Search Engine Optimization Specialist",
    link: "https://www.linkedin.com/in/areg-petrosyan007/",
  },
  {
    key: 3,
    name: "Eduard Mihranyan",
    alt: "EDUARD MIHRANYAN",
    postition: "Edul Pedul",
    img: "/images/peoples/eduard_mihranyan.png",
    title: "Search Engine Optimization Specialist",
    link: "https://www.linkedin.com/in/eduard-mihranyan-406b09223/",
  },
  {
    key: 4,
    name: "Mariam Mkhitaryan",
    alt: "MARIAM MKHITARYAN",
    postition: "Search Engine Optimizer",
    img: "/images/peoples/mariam_mkhitaryan.png",
    title: "Search Engine Optimizer",
    link: "https://www.linkedin.com/in/mariam-mkhitaryan-23178a1b4/",
  },
  {
    key: 5,
    name: "Ruben Bilbulyan",
    alt: "RUBEN BILBULYAN",
    postition: "Search Engine Optimization Specialist",
    img: "/images/peoples/ruben_bilbulyan.png",
    title: "Search Engine Optimization Specialist",
    link: "https://www.linkedin.com/in/rubekon/",
  },
  {
    key: 6,
    name: "Liana Grigoryan",
    alt: "LIAN GRIGORYAN",
    postition: "Content Writer",
    img: "/images/peoples/liana_grigoryan.png",
    title: "Content Writer",
    link: "https://www.linkedin.com/in/liana-grigoryan-7a764a225/",
  },
  {
    key: 7,
    name: "Nane Karapetyan",
    alt: "NANE KARAPETYAN",
    postition: "Search Engine Optimization Specialist",
    img: "/images/peoples/nane_karapetyan.png",
    title: "Search Engine Optimization Specialist",
    link: "https://www.linkedin.com/in/nane-karapetyan-4ba8ab1a6/",
  },
  {
    key: 8,
    name: "Ani Apitsarian",
    alt: "ANI APITSARIAN",
    postition: "Search Engine Optimization Specialist",
    img: "/images/peoples/ani_apitsarian.png",
    title: "Search Engine Optimization Specialist",
    link: "https://www.linkedin.com/in/aniapitsarian/",
  },
  {
    key: 9,
    name: "Syuzana Ghazaryan",
    alt: "SYUZANA GHAZARYAN",
    postition: "Search Engine Optimization Specialist",
    img: "/images/peoples/syuzan_aghazaryan.png",
    title: "Search Engine Optimization Specialist",
    link: "https://www.linkedin.com/in/syuzanaghazaryan/",
  },
  {
    key: 10,
    name: "Arpi Pakhanyan",
    alt: "ARPI PAKHANYAN",
    postition: "Search Engine Optimization Specialist",
    img: "/images/peoples/arpi_pakhanyan.png",
    title: "Search Engine Optimization Specialist",
    link: "https://www.linkedin.com/in/arpi-pakhanyan-87a80b187/",
  },
  {
    key: 11,
    name: "Shushanik Babayan",
    alt: "SHUSHANIK BABAYAN",
    postition: "Search Engine Optimization Specialist",
    img: "/images/peoples/shushanik_babayan.png",
    title: "Search Engine Optimization Specialist",
    link: "https://www.linkedin.com/in/shushanik-babayan-b91b56153/",
  },
  {
    key: 12,
    name: "Arman Badoyan",
    alt: "ARMAN BADOYAN",
    postition: "Link Outreach Specialist",
    img: "/images/peoples/arman_b.png",
    title: "SMM Specialist, Marketer and more to come...",
    link: "https://www.linkedin.com/in/arman-b-018398a6/",
  },
  {
    key: 13,
    name: "Ani Baghdasaryan",
    alt: "ANI BAGHDASARYAN",
    postition: "Search Engine Optimization Specialist",
    img: "/images/peoples/ani_baghdasaryan.png",
    title: "Search Engine Optimization Specialist",
    link: "https://www.linkedin.com/in/ani-baghdasaryan-298194a5/",
  },
  {
    key: 14,
    name: "Karine Dilanyan",
    alt: "KARINE DILANYAN",
    postition: "SEO Content Writer",
    img: "/images/peoples/karine_dilanyan.png",
    title:
      "Once passionate and enthusiastic English-speaking tour guide turned into a passionate and enthusiastic digital communicator.",
    link: "https://www.linkedin.com/in/karine-dilanyan/",
  },
  {
    key: 15,
    name: "Siranush Melqonyan",
    alt: "SIRANUSH MELQONYAN",
    postition: "Search Engine Optimization Specialist",
    img: "/images/peoples/siranush_melqonyan.png",
    title: "Search Engine Optimization Specialist",
    link: "https://www.linkedin.com/in/siranush-melqonyan-783b28222/",
  },
  {
    key: 16,
    name: "Mery Minasyan",
    alt: "MERY MINASYAN",
    postition: "Search Engine Optimizer",
    img: "/images/peoples/mery_minasyan.png",
    title: "Search Engine Optimizer",
    link: "https://www.linkedin.com/in/mery-minasyan/",
  },
  {
    key: 17,
    name: "Syuzanna Sargsyan",
    alt: "SYUZANNA SARGSYAN",
    postition: "Marketing Specialist",
    img: "/images/peoples/syuzanna_sargsyan.png",
    title: "Marketing Specialist at Spell Creative Marketing Agency",
    link: "https://www.linkedin.com/in/syuzanna-sargsyan-8bb778151/",
  },
  {
    key: 18,
    name: "Liana Simonyan",
    alt: "LIANA SIMONYAN",
    postition: "Off-Page SEO & Content Specialist",
    img: "/images/peoples/liana_simonyan.png",
    title: "Tech-Savvy Digital Marketer | B2B & SaaS Marketer",
    link: "https://www.linkedin.com/in/liana-simonyan",
  },
  {
    key: 19,
    name: "Tigran Vardanyan",
    alt: "TIGRAN VARDANYAN",
    postition: "CTO",
    img: "/images/peoples/tigran.png",
    title: "SuperMan",
    link: "https://www.linkedin.com/in/tigran-vardanyan",
  }
];

function AboutUs() {
  const title = "About Us";
  const paragraph =
    "Here you can find all of our employees information. Feel free to reach out to them and ask any questions you have. At saynine we all are open to new connections!";
  useEffect(() => {
    document.body.classList.add("banner");
    return () => {
      document.body.classList.remove("banner");
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>About Us | Saynine</title>
        <meta
          name="description"
          content="Looking for a trustworthy SEO agency? At saynine we use cost-effective methods to build your website backlinks in the shortest time frames possible."
        />
      </Head>
      <BannerTitle title={title} paragraph={paragraph} />
      <AboutBanner />
      <Container className="pt-28 pb-20 px-4 md:px-12 lg:px-30">
        <div className="flex-shrink-0">
          <h1 className="text-center font-bold text-2xl lg:text-4xl leading-tight">
            {/* Have questions? <br /> Our team is here to support you! */}
            Meet our link ninjas
          </h1>
        </div>
        <div className="pt-8 pb-10">
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {userList.map((item) => (
              <div
                className="shadow-alpha bg-body rounded-3xl static h-100%"
                key={item.key}
              >
                <div className="flex flex-col">
                  <div className="w-9/12">
                    <Image
                      src={item.img}
                      width="350"
                      height="250"
                      className="rounded-tl-3xl rounded-br-3xl w-auto object-cover grayscale"
                      alt={item.alt}
                    />
                  </div>
                  <div className="pt-8 px-8 pb-2 flex justify-between">
                    <div className="">
                      <h4 className="text-left font-bold text-lg leading-tight">
                        {item.name}
                      </h4>
                      <div className="pt-1" />
                      <span className="text-xs">{item.postition}</span>
                    </div>
                    <div className="">
                      <a
                        target="_blank"
                        href={item.link}
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/Linkedin.svg"
                          width={36}
                          height={36}
                          alt="LINKEDIN"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default AboutUs;

