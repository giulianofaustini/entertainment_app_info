import axios from "axios";
import React, { useEffect, useState } from "react";
import { NasaInfo } from "../components/NasaInfo";
import IsLoading from "../components/IsLoading";

const NasaPictures = () => {
  const apis = process.env.REACT_APP_NASA_API_KEY;

  const [todayPicture, setTodayPicture] = useState([]);
  const [isSelected, setIseSelected] = useState("");
  const [infoVisible, setInfoVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = (todayPicture) => {
    console.log("on line 14 Nasa info the handle select is_", handleSelect);
    setIseSelected(todayPicture);
    setInfoVisible(true);
  };

  const handleCloseSelect = () => {
    console.log(
      "on line 19 Nasa CLOSE INFO handle select is_",
      handleCloseSelect
    );
    setIseSelected("");
    setInfoVisible(false);
  };

  useEffect(() => {
    getImage();
  }, []);

  const getImage = () => {
    setIsLoading(true);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=nuIBb7eoT5IwhcF4VPiVcQXh0ZB9vw7M3ZaSncqv`
      )
      .then((res) => {
        const nasaImage = res.data;
        console.log(nasaImage);
        setTodayPicture(nasaImage);
        setIsLoading(false);
      });
  };

  return (
    <div
   
    >
          {isLoading &&
              <IsLoading isLoading={isLoading} />}
      <div onClick={handleSelect}>
        <img
          style={{
            width: "100%",
            height: "auto",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.005)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          src={todayPicture.hdurl}
          alt="{todayPicture.title}"
        />
      </div>
      <div>
        {infoVisible && (
          <NasaInfo
            todayPicture={todayPicture}
            infoVisible={infoVisible}
            isSelected={isSelected}
            onCloseInfo={handleCloseSelect}
          />
        )}
      </div>
    </div>
  );
};

export default NasaPictures;
