import classNames from "classnames";
import Link from "next/link";
import BrandLogo from "../BrandLogo";
import FacebookIcon from "../../components/Icons/facebook";
import TwitterIcon from "../../components/Icons/twitter";
import LinkedinIcon from "../../components/Icons/linkedin";
import Container from "../Container";

const classes = {
  root: "px-4 pt-8 py-4 md:px-10 lg:px-40  shadow-beta ",
  menuWrapper: "flex space-x-8 md:space-x-14",
  infoWrapper: "w-72 text-xs",
  menuTitle: "text-sm lg:text-2xl",
  menu: "grid gap-y-2",
  menuItem: "text-xs",
  socialMenu: "flex space-x-5",
  socialMenuIcon: "fill-current text-primary w-6 h-6 md:w-8 md:h-8",
};

const INFORMATION_MENU_ITEMS = [
  { label: "About Us", path: "/about-us" },
  { label: "Privacy Policy", path: "/privacy-policy" },
];

const KEEP_IN_TOCH_MENU_ITEMS = [
  { label: "Contact Us", path: "/contact-us" },
  // { label: "Blog", path: "/blog" },
];

const SOCIAL_LINKS = [
  { Icon: FacebookIcon, path: "https://www.facebook.com/sayninewithninty/" },
  { Icon: LinkedinIcon, path: "https://www.linkedin.com/company/saynine/" },
];

const NavigationMenu = ({ items, title }) => {
  return (
    <div>
      <h4 className="text-sm lg:text-2xl">{title}</h4>
      <div className="pt-3" />

      <ul className={classes.menu}>
        {items.map((item) => (
          <li key={item.path} className={classNames(classes.menuItem)}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SocialMenu = () => (
  <div>
    <h4 className={classes.menuTitle}>Follow Us On:</h4>
    <div className="pt-3" />
    <ul className={classes.socialMenu}>
      {SOCIAL_LINKS.map(({ Icon, path }) => (
        <li key={path} className={classNames(classes.menuItem)}>
          <a href={path} target="_blank">
            <Icon className={classes.socialMenuIcon} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

function Footer() {
  return (
    <footer className={classes.root}>
      <Container className="flex flex-col md:flex-row md:justify-between">
        <div className={classes.infoWrapper}>
          <BrandLogo />
          {/* <p>
            Eros leaned dis fiestas episode Laurent. Rivera caucus vitae,
            cliquey Felix, pellentesque.
          </p> */}
          <div className="pt-6 md:pt-16" />
          <p>(©) 2022 All rights reserved.</p>
          <div className="pt-4" />
        </div>

        <div className={classes.menuWrapper}>
          <NavigationMenu items={INFORMATION_MENU_ITEMS} title="Information" />
          <NavigationMenu
            items={KEEP_IN_TOCH_MENU_ITEMS}
            title="Keep In Touch"
          />
          <SocialMenu />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
