import { useEffect, useState } from "react";
import SearchField from "./components/SearchField";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=5b9a579d";

//5b9a579d
// http://www.omdbapi.com/?i=tt3896198&apikey=5b9a579d

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("sponge");
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="flex justify-center pt-4 gap-4">
        <SearchField
          searchTerm={searchTerm}
          onInputChange={setSearchTerm}
          onSearch={() => searchMovies(searchTerm)}
        />
      </div>
      <div className="container flex flex-wrap gap-4 justify-center pt-10">
        {movies?.length > 0 ? (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10">
            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="border-black border-2 items-center sm:w-1/2 lg:w-1/3 xl:w-full"
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
