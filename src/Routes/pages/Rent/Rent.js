import { useSearchParams } from "react-router-dom";

import { PageContainer } from "../../../styles/common.component";

import Head from "../../../components/Rent/Head/Head";
import FilterBar from "../../../components/Rent/FilterBar/FilterBar";
import PropertyListing from "../../../components/Rent/PropertyListing/PropertyListing";

import { fetchData } from "../../../Data/utils";

const Rent = () => {
  const [searchParams, _] = useSearchParams();

  const filters = {
    name: searchParams.get("name"),
    location: searchParams.get("location"),
    when: searchParams.get("when"),
    price: searchParams.get("price"),
    propertyType: searchParams.get("propertyType"),
  };

  const data = fetchData(filters);

  return (
    <PageContainer>
      <Head />
      <FilterBar />
      <PropertyListing data={data} />
    </PageContainer>
  );
};

export default Rent;
