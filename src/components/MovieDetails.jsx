import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const imageUrl = useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9fb5564d1a088cb776b062fc755ea04e&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div class="row mt-3">
      <div class="col-6">
        <div class="d-flex justify-content-center flex-column">
          <h3>{movie?.title}</h3>
          <div class="d-flex">
            <p>{movie?.date}</p>
            <span> &#x2022; </span>
            <p>{movie?.production_countries?.[0]?.name}</p>
            <span> &#x2022; </span>
            <p>{movie?.genres?.[0]?.name}</p>
            <span> &#x2022; </span>
            <p>{movie?.runtime}</p>
          </div>

          <p>{movie?.overview}</p>
        </div>
      </div>
      <div class="col-6 d-flex flex-column justify-content-center align-items-center">
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie?.poster_path}`}
          alt=""
        />
        <p>{movie?.tagline}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
