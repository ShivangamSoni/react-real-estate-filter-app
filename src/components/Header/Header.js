import { useState, useEffect } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import {
  Container,
  Logo,
  NavBar,
  NavLink,
  ButtonLink,
  NavToggle,
} from "./styled.component";

const SITE_LINKS = [
  {
    id: 1,
    label: "Rent",
    to: "/rent",
  },
  {
    id: 2,
    label: "Buy",
    to: "/buy",
  },
  {
    id: 3,
    label: "Sell",
    to: "/sell",
  },
  {
    id: 4,
    label: "Manage Property",
    to: "/manage-property",
  },
  {
    id: 5,
    label: "Resources",
    to: "/resources",
  },
];

const USER_ACTIONS = [
  {
    id: 1,
    label: "Login",
    to: "login",
    variant: "outlined",
  },
  {
    id: 2,
    label: "Sign up",
    to: "signup",
  },
];

const Header = () => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => setVisible((prev) => !prev);

  useEffect(() => {
    if (visible) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      let scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;

      const scrollHandler = () => window.scrollTo(scrollLeft, scrollTop);

      window.addEventListener("scroll", scrollHandler);

      return () => window.removeEventListener("scroll", scrollHandler);
    }
  }, [visible]);

  return (
    <Container>
      <Logo>Estatery</Logo>

      <NavToggle onClick={handleToggle}>
        {visible ? <GrClose /> : <GiHamburgerMenu />}
      </NavToggle>

      <NavBar className={`${visible && "visible"}`}>
        <ul>
          {SITE_LINKS.map(({ id, label, to }) => (
            <li key={id}>
              <NavLink href={to}>{label}</NavLink>
            </li>
          ))}
        </ul>

        <ul>
          {USER_ACTIONS.map(({ id, label, to, variant }) => (
            <li key={id}>
              <ButtonLink href={to} variant={variant}>
                {label}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </NavBar>
    </Container>
  );
};

export default Header;
