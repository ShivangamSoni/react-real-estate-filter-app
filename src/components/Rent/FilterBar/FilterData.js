import currencyFormatter from "../../../utils/currencyFormatter";

export const locationOptions = [
  { label: "Select", value: "" },
  { label: "Florida, USA", value: "Florida, USA" },
  { label: "Texas, USA", value: "Texas, USA" },
  { label: "Indiana, USA", value: "Indiana, USA" },
];

export const priceOptions = [
  { label: "Select", value: "" },
  { label: currencyFormatter.format(2095), value: "2095" },
  { label: currencyFormatter.format(2700), value: "2700" },
  { label: currencyFormatter.format(4550), value: "4550" },
];

export const propertyTypeOptions = [
  { label: "Select", value: "" },
  { label: "Houses", value: "houses" },
  { label: "Villas", value: "villas" },
  { label: "Mansions", value: "mansions" },
];

// Sets the Filters to default in case user passes invalid filters
// by editing the url query params
export const correctFilters = (filters) => {
  const { location, price, property } = filters;

  if (
    location &&
    locationOptions.filter((location) => location.value === location).length ===
      0
  ) {
    filters.location = "";
  }

  if (
    price &&
    priceOptions.filter((price) => price.value === price).length === 0
  ) {
    filters.price = "";
  }

  if (
    property &&
    propertyTypeOptions.filter((property) => property.value === property)
      .length === 0
  ) {
    filters.property = "";
  }

  return filters;
};
