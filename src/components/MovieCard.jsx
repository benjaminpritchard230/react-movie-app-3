const MovieCard = ({ movie }) => {
  const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;

  return (
    <div class="col-6">
      <div class="card">
        <div>
          <h4>{movie.title}</h4>
          <p>{movie.release_date}</p>
          <p>Score: {movie.vote_average}/10</p>
        </div>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};
export default MovieCard;
