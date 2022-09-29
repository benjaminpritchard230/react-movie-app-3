import MovieCard from "./MovieCard";
import Placeholder from "./Placeholder";

const Searchpage = ({ searchText, searchResults }) => {
  const movieResults = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });
  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-12">
          {searchText ? <h3>Showing results for "{searchText}":</h3> : ""}
        </div>
      </div>
      <div className="row w-100 h-100 ">
        {searchText.length > 0 ? movieResults : <Placeholder />}
      </div>
    </div>
  );
};

export default Searchpage;
