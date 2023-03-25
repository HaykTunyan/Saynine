import classNames from "classnames";
import Link from "next/link";

const classes = {
  menu: "flex space-x-8",
  menuItem: "hover:text-primary text-lg",
  menuItemActive: "text-primary",
};

const Desktop = ({ items, asPath }) => {
  return (
    <ul className={classes.menu}>
      {items.map((item) => {
        const isActive = asPath === item.path;
        return (
          <li
            key={item.path}
            className={classNames(classes.menuItem, {
              [classes.menuItemActive]: isActive,
            })}
          >
            <Link href={item.path}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Desktop;
