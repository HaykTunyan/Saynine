import React from "react";
import Image from "next/image";
import Container from "../../../components/Container";

const contect = {
  header: "How We Work ",
  paragraph:
    "Getting your SEO tasks handled has become more simple than ever. What’s happening behind the scenes? Here’s how the process goes.",
};

const classes = {
  root: "relative pb-14",
  layer:
    "bg-primary py-12 absolute -left-20 top-0 w-150% h-full z-auto rotate-3",
  container: "px-4 md:px-10 lg:px-12 xl:px-30 z-10 relative",
  header:
    "font-bold pt-8 text-2xl lg:text-3xl xl:text-4xl leading-tight text-white",
  paragraph: "text-white leading-6 w-auto lg:w-728px",
  imageWrapper: "relative h-96 select-none",
};

const HowWeWork = () => {
  return (
    <div className={classes.root}>
      <div className={classes.layer} />
      <Container className={classes.container}>
        <h2 className={classes.header}>{contect.header}</h2>
        <div className="pt-1" />
        <p className={classes.paragraph}>{contect.paragraph}</p>
        <div className="pt-9" />
        <div className="relative h-186 md:h-33 select-none">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* box 1 */}
            <div className="relative mr-auto ml-auto top-10 md:top-0 md:right-15 lg:top-3 lg:right-20 xl:right-0 xl:left-0 xl:top-3">
              <div className="relative top-1 left-8 md:top-16 md:left-0 lg:top-20 xl:top-24 z-30 px-2">
                <p className="text-base lg:text-2xl text-center">
                  You provide the <br />
                  target pages
                </p>
              </div>
              <div className="relative bottom-14 left-8 md:bottom-0 md:left-0 w-44 h-22 lg:w-64 lg:h-30 xl:w-70 xl:h-35">
                <Image
                  src="/images/Union_left.png"
                  layout="fill"
                  className=" w-full h-full z-10"
                  alt="UNION_LEFT"
                />
              </div>
            </div>
            {/* box 3 */}
            <div className="relative mr-auto ml-auto bottom-4 right-4 md:bottom-10 md:right-1 lg:bottom-10 xl:bottom-11">
              <div className="relative top-15  md:top-16 lg:top-20 xl:top-24 z-30 px-2">
                <p className="text-base lg:text-2xl text-center">
                  We send the websites
                  <br />
                  for confirmation
                </p>
              </div>
              <div className="relative w-44 h-22 lg:w-64 lg:h-30 xl:w-70 xl:h-35 ">
                <Image
                  src="/images/Union_top.png"
                  layout="fill"
                  className="w-full h-full z-10"
                  alt="UNION_TOP"
                />
              </div>
            </div>
            {/* box 5 */}
            <div className="relative ml-auto mr-auto bottom-8 right-1 md:top-0 md:bottom-5 md:right-2 md:left-16 lg:right-0 lg:left-20 xl:left-3 xl:top-0">
              <div className="relative top-16 md:top-16 lg:top-20 xl:top-24 z-30 px-2 ">
                <p className="text-base lg:text-2xl text-center">
                  We make your <br />
                  backlinks live
                </p>
              </div>
              <div className="relative w-44 h-22 lg:w-64 lg:h-30 xl:w-70 xl:h-35">
                <Image
                  src="/images/Union_right.png"
                  layout="fill"
                  className="w-full h-full z-10"
                  alt="UNION_RIGHT"
                />
              </div>
            </div>
            {/*  */}
          </div>
          <div className=" flex justify-center relative bottom-72  md:bottom-10">
            <div className="hidden md:block md:w-132.5 md:h-20 lg:w-186 lg:h-24 xl:w-223 xl:h-24">
              <Image
                src="/images/we_work_larg.svg"
                layout="fill"
                className="w-full h-full"
                alt="WE_WORK_LARG"
              />
            </div>
            <div className="block md:hidden w-113 h-135">
              <Image
                src="/images/we_work_small.svg"
                layout="fill"
                className="w-full h-full"
                alt="WE_WORK_SMALL"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-around relative bottom-96 md:bottom-22">
            {/* box 2 */}
            <div className="relative mr-auto ml-auto bottom-26 left-1 md:bottom-3 md:left-0 lg:bottom-6 xl:bottom-7 xl:left-14">
              <div className="relative top-16 md:top-16 lg:top-20 xl:top-24 z-30 px-2">
                <p className="text-base lg:text-2xl text-center">
                  We find relevant <br />
                  websites
                </p>
              </div>
              <div className="relative w-44 h-22 lg:w-64 lg:h-30 xl:w-70 xl:h-35">
                <Image
                  src="/images/Union.png"
                  layout="fill"
                  className="w-full h-full z-10"
                  alt="UNION"
                />
              </div>
            </div>
            {/* box 4 */}
            <div className="relative  mr-auto ml-auto bottom-22 left-9 md:right-0 md:left-2 md:bottom-12 lg:bottom-16 xl:bottom-20 xl:right-20 xl:-left-10 ">
              <div className="relative top-15 md:top-16 lg:top-20 xl:top-28 z-30 px-2 ">
                <p className="text-base lg:text-2xl text-center">
                  We complete the <br />
                  outreaching processes
                </p>
              </div>
              <div className="relative w-44 h-22 lg:w-64 lg:h-30 xl:w-70 xl:h-35">
                <Image
                  src="/images/Union_bottom.png"
                  layout="fill"
                  className="w-full h-full z-10"
                  alt="UNION_BOTTOM"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowWeWork;
