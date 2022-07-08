import {
  Container,
  Logo,
  NavBar,
  NavLink,
  ButtonLink,
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
  return (
    <Container>
      <Logo>Estatery</Logo>

      <NavBar>
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
