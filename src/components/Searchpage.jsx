import MovieCard from "./MovieCard";

const Searchpage = ({ searchText, searchResults }) => {
  const movieResults = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });
  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-12">
          <h3>Showing results for "{searchText}":</h3>
        </div>
      </div>
      <div className="row ">{searchText.length > 0 ? movieResults : ""}</div>
    </div>
  );
};

export default Searchpage;
