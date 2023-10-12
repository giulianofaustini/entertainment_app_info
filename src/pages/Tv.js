import React, { useEffect, useState } from "react";
import axios from "axios";

const Tv = () => {
  const key = process.env.REACT_APP_TV_API_KEY;

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchTv();
  }, [key]);

  const fetchTv = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=a686a0ae574126000682bb05784b5cc6`
      )
      .then((res) => {
        const movies = res.data.results;
        console.log(movies);
        setMovieList(movies);
      });
  };

  return (
    <div>
      <p>In here you look for your next TV show to watch</p>
      <div className="rows" style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent:"space-between" , alignContent:"flex-start" }}>
        {movieList.map((movie) => (
          <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="image-size"
            />
            <p style={{fontSize: "15px", fontWeight: "bold"}}>{movie.title}</p>
            </div>
         ))}
      </div>
    </div>
  );
};

export { Tv };
