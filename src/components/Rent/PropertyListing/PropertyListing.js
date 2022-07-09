import { List, Section } from "./styled.component";

import PropertyCard from "../PropertyCard/PropertyCard";

const PropertyListing = ({ data }) => {
  return (
    <Section>
      <List>
        {data.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </List>
    </Section>
  );
};

export default PropertyListing;
