import { useRef, useState, useEffect } from "react";
import CarouselControls from "./CarouselControls";
import CarouselList from "./CarouselList";

export interface CarouselProps<T> {
  data: T[];
  Card: React.ComponentType<{ item: T; size: string }>;
  initialBig?: boolean;
}

const Carousel = <T,>(props: CarouselProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const activeImage = imageRef.current[activeIndex];

    if (activeImage) {
      activeImage.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <div className="carousel-wrapper">
      <CarouselControls 
        hasPrevious={activeIndex > 0}
        hasNext={activeIndex < props.data.length - 1} 
        onPrevious={() => setActiveIndex(prev => prev - 1)}
        onNext={() => setActiveIndex(prev => prev + 1)}
      >
        <CarouselList 
          {...props}
          activeIndex={activeIndex}
          setRef={(index) => (el) => imageRef.current[index] = el}          
        />
      </CarouselControls>
    </div>
  );  
};

export default Carousel;