import { Fragment } from "react";
import Image from "next/image";
import Container from "../../../components/Container";

const content = {
  title: "Case Studies",
};

const CaseStudies = () => {
  return (
    <Fragment>
      <Container className="px-4 md:px-10 lg:px-14 xl:px-30">
        <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-tight">
          {content.title}
        </h2>
        <div className="pt-4 md:pt-8 " />
        <div className=" flex flex-col justify-center md:grid gap-8 md:grid-cols-2">
          <div className="w-full flex justify-center">
            <Image
              src="/images/home_page/casestudies1.svg"
              width={540}
              height={260}
              className="lg:w-115 lg:h-55"
              alt="CASESTUDOES1"
            />
          </div>
          <div className="w-full flex justify-center">
            <Image
              src="/images/home_page/casestudies2.svg"
              width={540}
              height={260}
              className="lg:w-115 lg:h-55"
              alt="CASESTUDIES2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 mr-auto ml-auto ">
          <div className="flex justify-center pt-8">
            <Image
              src="/images/home_page/casestudies3.svg"
              width={540}
              height={260}
              className="w-full md:w-82.5 md:h-44 lg:w-115 lg:h-55"
              alt="CASESTUDIES3"
            />
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default CaseStudies;
