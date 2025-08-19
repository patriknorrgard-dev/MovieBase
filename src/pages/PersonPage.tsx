import { useQuery } from "@tanstack/react-query";
import { getPersonDetails } from "../services/TMDB_API";
import { useParams } from "react-router";
import Carousel from "../components/carousel/Carousel";
import PersonCard from "../components/carousel/cards/PersonCard";
import MovieCard from "../components/carousel/cards/MovieCard";

const PersonPage = () => {
  const { id } = useParams();
  const { data: person } = useQuery({
    queryKey: ["person", id],
    queryFn: () => getPersonDetails(Number(id)),
  })
  
  return (
    <>
      {person && (
        <div className="flex flex-col">

          <div className="mt-10 mx-6 flex flex-col items-start sm:flex-row lg:flex-row gap-5">
            <div className="flex-none mx-auto w-54 md:w-67 lg:w-80">
              <Carousel 
                data={person.images.profiles}
                Card={PersonCard}
                initialBig={true}
              />
            </div>
            +
            <div className="h-80 md:h-auto overflow-y-auto flex-auto">
              <h2 className="font-bold text-gray-300 text-4xl">{person.name}</h2>
              <p className="py-4 text-gray-300 text-sm md:text-base">{person.biography}</p>
            </div>
          </div>
          
          <div className="py-10 lg:mx-6 flex flex-col items-center lg:items-start">
            <h1 className="text-gray-300 text-4xl px-2 py-4">Movies</h1>
            
            <div className="px-15 lg:px-0 w-full h-[263px] lg:h-[320px]">
              <Carousel 
                data={person.credits.cast}
                Card={MovieCard}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PersonPage;