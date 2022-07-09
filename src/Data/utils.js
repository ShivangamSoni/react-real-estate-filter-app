import DATA from "./data.json";
import filterFalsyValues from "../utils/filterFalsyValues";

export const fetchData = (filters) => {
  const truthyFilters = filterFalsyValues(filters);

  if (Object.keys(truthyFilters).length === 0) {
    return DATA;
  }

  if (truthyFilters.name != null) {
    return filterByName(truthyFilters.name);
  } else {
    return filterData(truthyFilters);
  }
};

const filterByName = (name) => {
  return [...DATA.filter((property) => property.title === name)];
};

const filterData = (filters) => {
  let filteredData = [...DATA];

  const { location, price, property } = filters;

  if (location) {
    filteredData = filteredData.filter(
      ({ address: { state, country } }) => `${state}, ${country}` === location,
    );
  }

  if (price) {
    filteredData = filteredData.filter((property) => property.price === price);
  }

  if (property) {
    filteredData = filteredData.filter(({ type }) => type === property);
  }

  return filteredData;
};
