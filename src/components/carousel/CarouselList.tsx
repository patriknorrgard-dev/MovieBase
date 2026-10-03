import type { CarouselProps } from "./Carousel";

interface CarouselListProps<T> extends CarouselProps<T> {
  activeIndex: number;
  setRef: (index: number) => (el: HTMLDivElement | null) => void;
}

const cardSize = {
  large: "w-[172px] h-[263px] lg:w-[216px] lg:h-[320px]",
  small: "w-[147px] h-[222px] lg:w-[184px] lg:h-[270px]",
}

const CarouselList = <T,>({
  data,
  Card,
  activeIndex,
  defaultBig,
  setRef,
}: CarouselListProps<T>) => {
  const getCardSize = (index: number) => {
    const isBig = index === 0
      ? defaultBig
      : index === activeIndex;

    return isBig
      ? cardSize.large
      : cardSize.small;
  };

  return (
    <div className="carousel-list flex space-x-4 touch-pan-x overflow-x-auto">
      {data.map((item, index) => (
        <div key={index} ref={setRef(index)}>
          <Card
            item={item}
            size={getCardSize(index)}
          />
        </div>
      ))}
    </div>
  )
}

export default CarouselList;