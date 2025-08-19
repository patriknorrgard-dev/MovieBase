import { useQuery } from "@tanstack/react-query";
import { searchMovie } from "../services/TMDB_API";
import { useSearchParams } from "react-router";
import Pagination from "../components/Pagination";
import SearchResult from "../components/search/SearchResult";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const query = searchParams.get("query") || "";
  

  const { data: search } = useQuery({
    queryKey: ["query", query, currentPage],
    queryFn: () => searchMovie(query, currentPage),
  })
  
  return (
    <>
      {search && (
        <div className="mt-10">
          <h2 className="text-gray-300 sm:text-xl lg:text-2xl px-2 mb-3">
            Showing {search.total_results} search results for "{query}"...
          </h2>
          
          <SearchResult movies={search.results} />

          <Pagination 
            firstPage={currentPage === 1} 
            lastPage={currentPage === search.total_pages} 
            currentPage={search.page}
            totalPages={search.total_pages}
            onPrevPage={() => setSearchParams({ page: (currentPage - 1).toString() }) }
            onNextPage={() => setSearchParams({ page: (currentPage + 1).toString() }) }
          />
        </div>
      )}
    </>
  )
}

export default SearchPage