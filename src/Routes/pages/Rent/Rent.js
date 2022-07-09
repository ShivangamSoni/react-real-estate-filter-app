import { useSearchParams } from "react-router-dom";

import { PageContainer } from "../../../styles/common.component";

import Head from "../../../components/Rent/Head/Head";
import FilterBar from "../../../components/Rent/FilterBar/FilterBar";
import PropertyListing from "../../../components/Rent/PropertyListing/PropertyListing";

import { fetchData } from "../../../Data/utils";
import ResetFilters from "../../../components/Rent/ResetFilters/ResetFilters";

const Rent = () => {
  const searchParams = useSearchParams()[0];

  const filters = {
    name: searchParams.get("name"),
    location: searchParams.get("location"),
    when: searchParams.get("when"),
    price: searchParams.get("price"),
    property: searchParams.get("property"),
  };

  const data = fetchData(filters);

  return (
    <PageContainer>
      <Head />
      <FilterBar />
      {data.length !== 0 ? <PropertyListing data={data} /> : <ResetFilters />}
    </PageContainer>
  );
};

export default Rent;
