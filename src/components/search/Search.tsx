import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import search from "../../assets/icons/search-2.svg";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const inputValueEl = useRef<HTMLInputElement>(null)
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate(`/search?query=${inputValue}&page=1`);
    setShowSearch(false);
  }

  useEffect(() => {
    if (showSearch && inputValueEl.current) {
      inputValueEl.current.focus();
    }
  }, [showSearch]);

  return (
    <>
      {showSearch ? (
        <div>
          <form 
            onSubmit={handleSubmit}
            className="flex gap-1 pt-2"
          >
            <input 
              type="text" 
              onChange={e => setInputValue(e.target.value)}
              value={inputValue}
              ref={inputValueEl}
              className="sm:w-sm text-black bg-gray-300 focus:outline-none pl-2 border rounded"
            />
            <button 
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-2 rounded"
            >Search</button>
          </form>
        </div>
      ) : (
        <img 
          src={search} 
          onClick={() => setShowSearch(true)} 
          className="w-6 h-6 cursor-pointer"
        />
      )}
    </>
  )
}

export default Search;