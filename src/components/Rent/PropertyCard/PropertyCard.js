import { FiHeart } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { BiBed, BiBath } from "react-icons/bi";
import { TbDimensions } from "react-icons/tb";

import {
  Address,
  Body,
  Card,
  Detail,
  FavButton,
  Foot,
  Head,
  Info,
  PopularTag,
  Price,
  Title,
} from "./styled.component";
import currencyFormatter from "../../../utils/currencyFormatter";

const PropertyCard = ({
  title,
  image,
  price,
  address,
  isPopular,
  beds,
  bathrooms,
  area,
}) => {
  const formattedPrice = currencyFormatter.format(price);

  return (
    <Card>
      <Head>
        <img src={image} alt={title} />
      </Head>

      <Body>
        <Info>
          <Price>
            <strong>{formattedPrice}</strong>/month
          </Price>

          <Title>{title}</Title>

          <Address>{address.full}</Address>

          <FavButton>
            <FiHeart />
          </FavButton>
        </Info>

        {isPopular && (
          <PopularTag>
            <span>
              <BsStars />
              Popular
            </span>
          </PopularTag>
        )}

        <Foot>
          <Detail>
            <BiBed />
            {beds} Beds
          </Detail>

          <Detail>
            <BiBath />
            {bathrooms} Bathrooms
          </Detail>

          <Detail>
            <TbDimensions />
            {`${area.w} x ${area.l}`} m<sup>2</sup>
          </Detail>
        </Foot>
      </Body>
    </Card>
  );
};

export default PropertyCard;
