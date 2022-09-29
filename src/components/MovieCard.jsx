import { Router, Route, Link, browserHistory } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;
  const detailUrl = `/moviedetails/${movie.id}`;

  return (
    <div class="col-12">
      <Link to={detailUrl}>
        <button className="button-2">{movie.title}</button>
      </Link>
    </div>
  );
};
export default MovieCard;
