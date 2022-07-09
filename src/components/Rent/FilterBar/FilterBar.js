import { useState } from "react";

import { Button, Section } from "./styled.component";

import StyledDropdown from "../../Common/StyledDropdown/StyledDropdown";

const dummyOptions = [
  { label: "Select Something", value: "", disabled: true },
  { label: "Test 1", value: "text-1" },
  { label: "Test 2", value: "text-2" },
  { label: "Test 3", value: "text-3" },
  { label: "Test 4", value: "text-4" },
  { label: "Test 5", value: "text-5" },
];

const FilterBar = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedWhen, setSelectedWhen] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");

  const handleLocationChange = (idx) => {
    setSelectedLocation(dummyOptions[idx].value);
  };
  const handleWhenChange = (idx) => {
    setSelectedWhen(dummyOptions[idx].value);
  };
  const handlePriceChange = (idx) => {
    setSelectedPrice(dummyOptions[idx].value);
  };
  const handlePropertyTypeChange = (idx) => {
    setSelectedPropertyType(dummyOptions[idx].value);
  };

  const handleSearch = () => {
    const filter = {
      location: selectedLocation,
      when: selectedWhen,
      price: selectedPrice,
      property: selectedPropertyType,
    };

    console.log({ filter });
  };

  return (
    <Section>
      <div>
        <StyledDropdown
          label={"Location"}
          value={selectedLocation}
          onChange={handleLocationChange}
          options={dummyOptions}
        />
      </div>

      <div>
        <StyledDropdown
          label={"When"}
          value={selectedWhen}
          onChange={handleWhenChange}
          options={dummyOptions}
        />
      </div>

      <div>
        <StyledDropdown
          label={"Price"}
          value={selectedPrice}
          onChange={handlePriceChange}
          options={dummyOptions}
        />
      </div>

      <div>
        <StyledDropdown
          label={"Property Type"}
          value={selectedPropertyType}
          onChange={handlePropertyTypeChange}
          options={dummyOptions}
        />
      </div>

      <div>
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </Section>
  );
};

export default FilterBar;
