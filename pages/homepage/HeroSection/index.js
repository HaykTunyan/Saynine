import Container from "../../../components/Container";
import Image from "next/image";
import Link from "next/link";

const content = {
  title_one: "Building backlinks",
  title_two: "from SaaS websites",
  title_three: "for SaaS websites.",
  paragraph:
    "Tell us your SEO requirements and we will do the rest. Crush the competition, maximize your SEO results, and increase revenue with the right backlinks.",
  button: "Let’s talk!",
};

const classes = {
  root: "px-4 md:px-12 lg:px-30",
  title: "font-bold text-2xl lg:text-4xl xl:text-5xl leading-tight",
  paragraph: "leading-6",
  button:
    "bg-primary font-semibold text-white px-6 py-2 rounded-tr-xl rounded-br-xl rounded-bl-xl",
};

function HeroSection() {
  return (
    <section>
      <Container className={classes.root}>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-82.5 lg:w-132.5 xl:w-36 xl:flex-shrink-0 pt-10 md:pt-0 order-2 md:order-1">
            <h1 className={classes.title}>
              Building backlinks from SaaS websites for SaaS websites.
            </h1>
            <div className="pt-3" />
            <p className={classes.paragraph}>{content.paragraph}</p>
            <div className="pt-6" />
            <Link href="/contact-us">
              <button className={classes.button}>{content.button}</button>
            </Link>
          </div>
          <div className="hidden xl:block xl:w-30 xl:order-2" />
          <div className="w-full md:w-82.5 mx-auto xl:w-450px xl:relative z-10 order-1 md:order-3">
            <Image
              src="/images/home_page/automation_tools.svg"
              width={370}
              height={282}
              className="w-full md:w-96"
              alt="AUTOMATION_TOOLS"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
