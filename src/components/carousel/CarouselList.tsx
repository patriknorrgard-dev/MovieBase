import type { CarouselProps } from "./Carousel";

interface CarouselListProps<T> extends CarouselProps<T> {
  activeIndex: number;
  setRef: (index: number) => (el: HTMLDivElement | null) => void;
}

const CarouselList = <T,>({ data, Card, activeIndex, initialBig, setRef, }: CarouselListProps<T>) => {

// optional function that makes the active images slightly larger when navigating the carousel
const handleImageSize = (index: number) => {
  const isBig = index === 0 ? initialBig : index === activeIndex;

  return isBig 
    // hardcoded image sizes for responsiveness
    ? "w-[172px] h-[263px] lg:w-[216px] lg:h-[320px]" 
    : "w-[147px] h-[222px] lg:w-[184px] lg:h-[270px]";
};

  return (
    <div className="carousel-list flex space-x-4 overflow-x-auto">
      {data.map((image, index) => (
        <div key={index} ref={setRef(index)}>
          <Card
            item={image}
            size={handleImageSize(index)}
          />
        </div>
      ))}
    </div>
  )
}

export default CarouselList;