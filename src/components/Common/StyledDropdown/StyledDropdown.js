import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

import {
  Container,
  Label,
  Options,
  Select,
  Selected,
} from "./styled.component";

import Option from "./Option/Option";
import { useEffect } from "react";

const StyledDropdown = ({ label, value, onChange, options }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const clickEvent = (e) => {
      setVisible(false);
    };
    document.addEventListener("click", clickEvent);

    return () => {
      document.removeEventListener("click", clickEvent);
    };
  }, []);

  const toggleDropDown = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setVisible((prev) => !prev);
  };

  const handleSelect = (idx) => {
    onChange(idx);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Select>
        <Selected onClick={toggleDropDown}>
          {options.filter((o) => o.value === value)[0].label}
          <button>
            <MdKeyboardArrowDown />
          </button>
        </Selected>

        {visible && (
          <Options>
            {options.map(({ label, disabled }, idx) => (
              <Option
                key={idx}
                idx={idx}
                label={label}
                disabled={disabled}
                handleSelect={handleSelect}
              />
            ))}
          </Options>
        )}
      </Select>
    </Container>
  );
};

export default StyledDropdown;
