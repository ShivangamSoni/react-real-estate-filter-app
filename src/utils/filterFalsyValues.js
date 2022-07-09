const filterFalsyValues = (object) => {
  return Object.keys(object).reduce((acc, key) => {
    if (object[key]) {
      acc[key] = object[key];
    }

    return acc;
  }, {});
};

export default filterFalsyValues;
