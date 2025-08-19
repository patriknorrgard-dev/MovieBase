import type { Trailer } from "../../../types/Trailer.types";

interface TrailerCardProps {
  item: Trailer;
}

const TrailerCard: React.FC<TrailerCardProps> = ({ item }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${item.key}`}
      title={item.name}
      allowFullScreen
      className="w-[240px] h-[270px]"
    />
  )
}

export default TrailerCard;