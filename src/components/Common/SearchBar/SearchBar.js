import { useState } from "react";

import { useSearchParams } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

import { Form, Search } from "./styled.component";

import StyledInput from "../StyledInput/StyledInput";

const SearchBar = () => {
  const setSearchParams = useSearchParams()[1];
  const [search, setSearch] = useState("");

  const handleChange = (e) => setSearch(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    const name = search.trim();
    if (!name) {
      setSearchParams();
    } else {
      setSearchParams({ name });
    }
  };

  return (
    <Form onSubmit={handleSearch}>
      <StyledInput
        type="search"
        placeholder="Search with Search Bar"
        endElem={
          <Search type="submit">
            <AiOutlineSearch />
          </Search>
        }
        value={search}
        onChange={handleChange}
      />
    </Form>
  );
};

export default SearchBar;
