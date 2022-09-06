import styled from "styled-components";
import Slick from "../../slider/Slick";

interface itemsProps {
  item: string;
  name: string;
}

const SliderItem = styled.div`
  max-width: 100%;
`;

const Image = styled.img`
  width: 100%;
  min-width: 1200px;
  max-height: auto;
`;

const items: itemsProps[] = [
  {
    item: "/main_banner.jpg",
    name: "이미지01",
  },
  {
    item: "/main_banner2.jpg",
    name: "이미지02",
  },
  {
    item: "/main_banner3.jpg",
    name: "이미지03",
  },
];

function Item() {
  return (
    <Slick>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <Image src={item.item} alt={item.name} />
        </SliderItem>
      ))}
    </Slick>
  );
}

export default Item;
