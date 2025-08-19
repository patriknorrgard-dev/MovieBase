import { Routes, Route } from "react-router";
import Navigation from "./components/navigation/Navigation";
import RatedMoviesPage from "./pages/RatedMoviesPage";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import PersonPage from "./pages/PersonPage";
import MoviesByGenrePage from "./pages/MoviesByGenrePage";

function App() {
  return (
    <div className="bg-dark-gradient min-h-screen">
      <Navigation />
      
      <div className="@container max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rated" element={<RatedMoviesPage />} />
          <Route path="/popular" element={<PopularMoviesPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/person/:id" element={<PersonPage />} />
          <Route path="/movie/genre/:id" element={<MoviesByGenrePage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
