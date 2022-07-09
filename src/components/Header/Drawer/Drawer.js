import { useState, useRef, useEffect } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

import { Container, NavDrawerButton } from "./styled.component";
import { NavLink } from "../styled.component";

const Drawer = ({ label, links }) => {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (open) {
      const mouseDownHandler = (e) => {
        if (!drawerRef.current.contains(e.target)) {
          toggleDrawer();
        }
      };
      document.addEventListener("mousedown", mouseDownHandler);

      return () => document.removeEventListener("mousedown", mouseDownHandler);
    }
  }, [open]);

  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <Container ref={drawerRef}>
      <NavDrawerButton onClick={toggleDrawer}>
        <span>{label}</span> <MdKeyboardArrowDown />
      </NavDrawerButton>

      <ul className={`subNav ${open && "visible"}`}>
        {links.map(({ id, to, label }) => (
          <li key={id}>
            <NavLink href={to}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Drawer;
