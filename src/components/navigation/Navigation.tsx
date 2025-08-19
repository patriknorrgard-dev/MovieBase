import { useState } from "react";
import { NavLink } from "react-router";
import burger from "../../assets/icons/menu-burger.svg";
import arrowDown from "../../assets/icons/down-arrow.svg";
import arrowUp from "../../assets/icons/top-arrow.svg";
import GenreList from "./GenreList";
import Search from "../search/Search";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  }
  
  return (
    <nav className="relative">
      <div className="fixed w-full z-10 dark:bg-black text-gray-300">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between min-h-14">
          <div className="lg:hidden min-w-8">
            <img
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              src={burger}
              alt="Menu icon"
              className="w-8 h-8 cursor-pointer"
            />
          </div>

          <div className="hidden lg:flex px-0 gap-7">
            <NavLink to={"/popular"} onClick={handleCloseMenu}>Most popular movies</NavLink>
            <NavLink to={"/rated"} onClick={handleCloseMenu}>Highest rated movies</NavLink>
            <span className="cursor-pointer" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>Browse movies by genre</span>
          </div>

          <Search />
        </div>

        {isSubMenuOpen && (
          <div className="hidden lg:block w-full absolute pt-1 z-10">
            <GenreList onGenreSelect={handleCloseMenu} />
          </div>
        )}
      </div>

      <div className="pt-16">
        {isMenuOpen && (
          <div className="fixed w-80 sm:w-1/2 flex flex-col gap-2 lg:hidden bg-black px-4 pt-3 z-20 h-full">
            <NavLink 
              to={"/popular"} 
              onClick={handleCloseMenu} 
              className="bg-neutral-900 text-gray-300 text-sm py-3 px-3 rounded-md"
            >
              Most popular movies
            </NavLink>

            <NavLink 
              to={"/rated"} 
              onClick={handleCloseMenu} 
              className="bg-neutral-900 text-gray-300 text-sm py-3 px-3 rounded-md"
            >
              Highest rated movies
            </NavLink>
            
            <div 
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="cursor-pointer bg-neutral-900 text-gray-300 py-3 px-3 rounded-md"
            >
              <div className="flex justify-between items-center">
                <p className="text-sm">Browse movies by genre</p>
                <img 
                  src={isSubMenuOpen ? arrowUp : arrowDown} 
                  alt=""
                  className="h-3" 
                />
              </div>
              
              {isSubMenuOpen && <GenreList onGenreSelect={handleCloseMenu} />}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
