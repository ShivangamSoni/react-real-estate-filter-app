import { useState } from "react";

import { useSearchParams } from "react-router-dom";

import { Button, Section } from "./styled.component";

import StyledDropdown from "../../Common/StyledDropdown/StyledDropdown";
import currencyFormatter from "../../../utils/currencyFormatter";

const dummyOptions = [
  { label: "Select", value: "" },
  { label: "Test 1", value: "text-1" },
  { label: "Test 2", value: "text-2" },
  { label: "Test 3", value: "text-3" },
  { label: "Test 4", value: "text-4" },
  { label: "Test 5", value: "text-5" },
];

const locationOptions = [
  { label: "Select", value: "" },
  { label: "Florida, USA", value: "Florida, USA" },
  { label: "Texas, USA", value: "Texas, USA" },
  { label: "Indiana, USA", value: "Indiana, USA" },
];

const priceOptions = [
  { label: "Select", value: "" },
  { label: currencyFormatter.format(2095), value: "2095" },
  { label: currencyFormatter.format(2700), value: "2700" },
  { label: currencyFormatter.format(4550), value: "4550" },
];

const propertyTypeOptions = [
  { label: "Select", value: "" },
  { label: "Houses", value: "houses" },
  { label: "Villas", value: "villas" },
  { label: "Mansions", value: "mansions" },
];

const correctFilters = (filters) => {
  if (
    locationOptions.filter((location) => location.value === filters.location)
      .length === 0
  ) {
    filters.location = "";
  }

  if (
    priceOptions.filter((price) => price.value === filters.price).length === 0
  ) {
    filters.price = "";
  }

  if (
    propertyTypeOptions.filter(
      (property) => property.value === filters.property,
    ).length === 0
  ) {
    filters.property = "";
  }
};

const FilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let filters = {
    location: searchParams.get("location"),
    when: searchParams.get("when"),
    price: searchParams.get("price"),
    property: searchParams.get("propertyType"),
  };

  correctFilters(filters);

  const [selectedLocation, setSelectedLocation] = useState(
    filters["location"] || "",
  );
  const [selectedWhen, setSelectedWhen] = useState(filters["when"] || "");
  const [selectedPrice, setSelectedPrice] = useState(filters["price"] || "");
  const [selectedPropertyType, setSelectedPropertyType] = useState(
    filters["property"] || "",
  );

  const handleLocationChange = (idx) => {
    setSelectedLocation(locationOptions[idx].value);
  };
  // const handleWhenChange = (idx) => {
  //   setSelectedWhen(dummyOptions[idx].value);
  // };
  const handlePriceChange = (idx) => {
    setSelectedPrice(priceOptions[idx].value);
  };
  const handlePropertyTypeChange = (idx) => {
    setSelectedPropertyType(propertyTypeOptions[idx].value);
  };

  const handleSearch = () => {
    const filters = {
      location: selectedLocation,
      when: selectedWhen,
      price: selectedPrice,
      property: selectedPropertyType,
    };

    setSearchParams(filters);
  };

  return (
    <Section>
      <div>
        <StyledDropdown
          label={"Location"}
          value={selectedLocation}
          onChange={handleLocationChange}
          options={locationOptions}
        />
      </div>

      {/* <div>
        <StyledDropdown
          label={"When"}
          value={selectedWhen}
          onChange={handleWhenChange}
          options={dummyOptions}
        />
      </div> */}

      <div>
        <StyledDropdown
          label={"Price"}
          value={selectedPrice}
          onChange={handlePriceChange}
          options={priceOptions}
        />
      </div>

      <div>
        <StyledDropdown
          label={"Property Type"}
          value={selectedPropertyType}
          onChange={handlePropertyTypeChange}
          options={propertyTypeOptions}
        />
      </div>

      <div>
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </Section>
  );
};

export default FilterBar;
