import React, { useEffect, useState } from "react";
import axios from "axios";

const Tv = () => {
  const key = process.env.REACT_APP_TV_API_KEY;

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
   
  }, [key]);

  const fetchTv = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=a686a0ae574126000682bb05784b5cc6`
      )
      .then((res) => {
        const genres = res.data.genres;
        console.log(movieList);
        setMovieList(genres);
      });
  };

  return (
    <div>
      <div>In here you look for your next TV show to watch</div>
      <ul>
        {movieList.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { Tv };
