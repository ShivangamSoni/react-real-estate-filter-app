import { PageContainer } from "../../../styles/common.component";

import Head from "../../../components/Rent/Head/Head";
import FilterBar from "../../../components/Rent/FilterBar/FilterBar";
import PropertyListing from "../../../components/Rent/PropertyListing/PropertyListing";

const Rent = () => {
  return (
    <PageContainer>
      <Head />
      <FilterBar />
      <PropertyListing />
    </PageContainer>
  );
};

export default Rent;
