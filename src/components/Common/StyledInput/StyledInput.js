import { Control, Label, Input, End } from "./styled.component";

const StyledInput = ({ endElem, ...props }) => {
  return (
    <Control>
      <Input {...props} />
      <Label>{props.placeholder}</Label>

      {endElem && <End>{endElem}</End>}
    </Control>
  );
};

export default StyledInput;
