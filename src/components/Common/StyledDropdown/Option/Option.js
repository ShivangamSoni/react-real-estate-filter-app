import { Li } from "./styled.component";

const Option = ({ idx, label, handleSelect, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleSelect(idx);
    }
  };
  return (
    <Li
      onClick={handleClick}
      disabled={disabled}
      title={disabled ? "Can't be Selected" : label}
    >
      {label}
    </Li>
  );
};

export default Option;
