import { AiOutlineSearch } from "react-icons/ai";

import { Form, Search } from "./styled.component";

import StyledInput from "../StyledInput/StyledInput";

const SearchBar = () => {
  return (
    <Form>
      <StyledInput
        type="search"
        placeholder="Search with Search Bar"
        endElem={
          <Search>
            <AiOutlineSearch />
          </Search>
        }
      />
    </Form>
  );
};

export default SearchBar;
