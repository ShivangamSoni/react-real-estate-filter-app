import { useState } from "react";

import { useSearchParams } from "react-router-dom";

import DatePicker from "react-date-picker";

import { Button, Field, Label, Section } from "./styled.component";

import StyledDropdown from "../../Common/StyledDropdown/StyledDropdown";

import filterFalsyValues from "../../../utils/filterFalsyValues";

import {
  correctFilters,
  locationOptions,
  priceOptions,
  propertyTypeOptions,
} from "./FilterData";

const FilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let filters = correctFilters({
    location: searchParams.get("location"),
    when: searchParams.get("when"),
    price: searchParams.get("price"),
    property: searchParams.get("property"),
  });

  const [selectedLocation, setSelectedLocation] = useState(
    filters["location"] || "",
  );
  const [selectedWhen, setSelectedWhen] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(filters["price"] || "");
  const [selectedPropertyType, setSelectedPropertyType] = useState(
    filters["property"] || "",
  );

  const handleLocationChange = (idx) => {
    setSelectedLocation(locationOptions[idx].value);
  };
  const handleWhenChange = (date) => {
    setSelectedWhen(date);
  };
  const handlePriceChange = (idx) => {
    setSelectedPrice(priceOptions[idx].value);
  };
  const handlePropertyTypeChange = (idx) => {
    setSelectedPropertyType(propertyTypeOptions[idx].value);
  };

  const handleSearch = () => {
    const filters = filterFalsyValues({
      location: selectedLocation,
      when: selectedWhen
        ? `${selectedWhen.getFullYear()}-${
            selectedWhen.getMonth() + 1
          }-${selectedWhen.getDate()}`
        : "",
      price: selectedPrice,
      property: selectedPropertyType,
    });

    if (Object.keys(filters).length === 0) {
      setSearchParams();
    } else {
      setSearchParams(filters);
    }
  };

  return (
    <Section>
      <Field>
        <Label>Location</Label>
        <StyledDropdown
          value={selectedLocation}
          onChange={handleLocationChange}
          options={locationOptions}
        />
      </Field>

      <Field>
        <Label>When</Label>
        <DatePicker value={selectedWhen} onChange={handleWhenChange} />
      </Field>

      <Field>
        <Label>Price</Label>
        <StyledDropdown
          value={selectedPrice}
          onChange={handlePriceChange}
          options={priceOptions}
        />
      </Field>

      <Field>
        <Label>Property Type</Label>
        <StyledDropdown
          label={"Property Type"}
          value={selectedPropertyType}
          onChange={handlePropertyTypeChange}
          options={propertyTypeOptions}
        />
      </Field>

      <Field>
        <Button onClick={handleSearch}>Search</Button>
      </Field>
    </Section>
  );
};

export default FilterBar;
