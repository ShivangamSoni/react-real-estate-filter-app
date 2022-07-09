import DATA from "./data.json";

export const fetchData = (filters) => {
  const truthyFilters = filterFalsyValues(filters);

  if (Object.keys(truthyFilters).length === 0) {
    return DATA;
  }

  if (filters.name != null) {
    return filterByName(filters.name);
  } else {
    return filterData(filters);
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
    filteredData = filteredData.filter(
      (property) => property.type === property,
    );
  }

  return filteredData;
};

const filterFalsyValues = (object) => {
  return Object.keys(object).reduce((acc, key) => {
    if (object[key]) {
      acc[key] = object[key];
    }

    return acc;
  }, {});
};
