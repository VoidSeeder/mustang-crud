import CarInfos from "../../../utils/carInfos";
import Button from "./Button";
import CardContainer from "./Container";
import Image from "./Image";
import Item from "./Item";
import Title from "./Title";

type CardProps = CarInfos & {};

export default function Card({
  imagePath,
  name,
  year,
  maxSpeed,
  economyRate,
  userRate,
  productLink,
}: CarInfos) {
  return (
    <CardContainer>
      <Image src={imagePath} />
      <Title>{name}</Title>
      <Item iconSrc="bi:calendar2-date">{year}</Item>
      <Item iconSrc="fluent:top-speed-20-regular">{maxSpeed} Km/h</Item>
      <Item iconSrc="simple-line-icons:energy">{economyRate}/10</Item>
      <Item iconSrc="fluent:people-20-regular">{userRate}/10</Item>
      <Button link={productLink} />
    </CardContainer>
  );
}
