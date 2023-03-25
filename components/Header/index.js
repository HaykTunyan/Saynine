import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import BrandLogo from "../BrandLogo";
import Menu from "./Menu";
import Container from "../Container";

const classes = {
  root: "mt-5 sticky top-2 z-50",
  container:
    "flex items-center justify-between shadow-alpha px-7 lg:px-14 rounded-3xl bg-white w-full lg:h-20 h-15 bg-white",
};

const Logo = () => (
  <Fragment>
    <div className="md:flex hidden">
      <BrandLogo />
    </div>
    <div className="md:hidden flex">
      <Link href="/" className="">
        <Image
          src="/saynine-logo-mobile.svg"
          width={32}
          height={32}
          alt="SAYNINE-LOGO-MOBILE"
          className="cursor-pointer flex-shrink-0"
        />
      </Link>
    </div>
  </Fragment>
);

function Header() {
  return (
    <header className={classes.root}>
      <Container>
        <div className={classes.container}>
          <Logo />
          <Menu />
        </div>
      </Container>
    </header>
  );
}

export default Header;
