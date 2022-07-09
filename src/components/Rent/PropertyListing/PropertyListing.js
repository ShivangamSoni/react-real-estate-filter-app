import PropertyCard from "../PropertyCard/PropertyCard";
import { List, Section } from "./styled.component";

const DATA = [
  {
    id: 1,
    title: "Palm Harbor",
    address: {
      full: "2699 Green Valley, Highland Lake, FL",
      state: "Florida",
      country: "USA",
    },
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    beds: 3,
    bathrooms: 2,
    area: {
      w: 5,
      l: 7,
    },
    price: "2095",
    isPopular: true,
    type: "house",
  },
  {
    id: 2,
    title: "Beverly Springfield",
    address: {
      full: "2821 Lake Sevilla, Palm Harbor, TX",
      state: "Texas",
      country: "USA",
    },
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    beds: 4,
    bathrooms: 2,
    area: {
      w: 6,
      l: 7.5,
    },
    price: "2700",
    isPopular: true,
    type: "house",
  },
  {
    id: 3,
    title: "Faulkner Ave",
    address: {
      full: "909 Woodland St. Michigan, IN",
      state: "Indiana",
      country: "USA",
    },
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    beds: 4,
    bathrooms: 3,
    area: {
      w: 8,
      l: 20,
    },
    price: "4550",
    isPopular: true,
    type: "house",
  },
];

const PropertyListing = () => {
  return (
    <Section>
      <List>
        {DATA.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </List>
    </Section>
  );
};

export default PropertyListing;