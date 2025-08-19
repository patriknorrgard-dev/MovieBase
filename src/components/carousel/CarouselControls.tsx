import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

interface CarouselControlsProps {
  children: React.ReactNode;
  hasNext: boolean;
  hasPrevious: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ children, hasPrevious, hasNext, onPrevious, onNext }) => {
  return (
    <>
      <div className="absolute top-1/2 -translate-y-1/2 -left-10">
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="disabled:opacity-0"
        >
          <img
            src={leftArrow}
            alt=""
            className="px-2 h-6 lg:px-2 lg:h-8 cursor-pointer"
          />
        </button>
      </div>

      {children}

      <div className="absolute top-1/2 -translate-y-1/2 -right-10">
        <button
          onClick={onNext}
          disabled={!hasNext}
          className="disabled:opacity-0"
        >
          <img
            src={rightArrow}
            alt=""
            className="px-2 h-6 lg:px-2 lg:h-8 cursor-pointer"
          />
        </button>
      </div>
    </>
  )
}

export default CarouselControls;