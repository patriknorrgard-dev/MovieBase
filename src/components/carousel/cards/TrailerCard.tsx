import type { Trailer } from "../../../types/Trailer.types";

interface TrailerCardProps {
  item: Trailer;
}

const TrailerCard: React.FC<TrailerCardProps> = ({ item }) => {
  if (!item) {
    return null;
  }
  
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${item.key}`}
      title={item.name}
      allowFullScreen
      className="w-full h-[370px]"
    />
  )
}

export default TrailerCard;