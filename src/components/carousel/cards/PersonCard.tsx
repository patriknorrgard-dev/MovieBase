import type { Image } from "../../../types/Person.types";

interface PersonCardProps {
  item: Image;
}

const PersonCard: React.FC<PersonCardProps> = ({ item }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w342/${item.file_path}`}
      alt=""
      className={`block px-4 w-[216px] h-[320px] md:w-[270px] md:h-[400px] lg:w-[324px] lg:h-[470px]`}
    />
  )
}

export default PersonCard;