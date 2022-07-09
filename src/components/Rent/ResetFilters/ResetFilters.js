import { useSearchParams } from "react-router-dom";

import { Button, Section } from "./styled.component";

const ResetFilters = () => {
  const setSearchParams = useSearchParams()[1];
  const handleReset = () => setSearchParams();

  return (
    <Section>
      <h2>No Properties match Selected Filters</h2>
      <Button onClick={handleReset} variant="outlined">
        Reset Filters
      </Button>
    </Section>
  );
};

export default ResetFilters;
