import React, { useEffect, useState } from "react";
import axios from "axios";
import { PopupWindow } from "../components/PopupWindow";

const Tv = () => {
  const key = process.env.REACT_APP_TV_API_KEY;

  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [isPopupWindon, setIsPopupWindow] = useState(false)

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

  const handleImageClick = (movie) => {
    console.log("selected movie is:", movie)
    
    setSelectedMovie(movie)
    setIsPopupWindow(true)
  }

  const handleIsPopupWIndowClosed = () => {
    setIsPopupWindow(false)
  }

  return (
    <div>
      <h1>PICK A MOVIE FOR TODAY</h1>
      <div className="rows" style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent:"space-between" , alignContent:"flex-start" }}>
        {movieList.map((movie) => (
          <div key={movie.id} onClick={ () => handleImageClick(movie)}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="image-size"
              style={{ transition: "transform 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p style={{fontSize: "15px", fontWeight: "bold"}}>{movie.title}</p>
            </div>
         ))}
      </div>
      {isPopupWindon && selectedMovie && (
        <div>
          <PopupWindow movie={selectedMovie} onClose={handleIsPopupWIndowClosed}  />
          
        </div>
      )}
    </div>
  );
};

export { Tv };
