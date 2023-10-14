import React from "react";

const NasaInfo = ({ todayPicture, onCloseInfo, }) => {
    
    console.log('this is the onCloseInfo that prints from NASA INFO', onCloseInfo)
  
    if (!todayPicture) {
        return null
    }

  return (
    <div className="NasaInfoContainer">
          <div className="NasaExplanationContainer" >
              <p>Title: {todayPicture.title}</p>
              <p>Copyright: {todayPicture.copyright}</p>
              <p>Datye: {todayPicture.date}</p>
              <p>In the picture you see ...  </p>
              <p>{todayPicture.explanation}</p>
          </div>
      <button  onClick={onCloseInfo} >close</button>
    </div>
  );
};

export  {NasaInfo};
