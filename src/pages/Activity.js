import { useState, useEffect } from "react";
import Axios from "axios";

const Activity = () => {
  const [activity, setActivity] = useState([]);
  const [selectedType, setSelectedType] = useState("education");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetchActivity();
  }, []);

  const fetchActivity = () => {
    Axios.get(`https://www.boredapi.com/api/activity?type=${selectedType}`)
      .then((res) => {
        console.log(res.data);
        const newActivity = res.data.activity;
        const newPrice = res.data.price;
        setActivity(newActivity);
        setPrice(newPrice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div>
      <h1>The Activity Page renders activity ideas</h1>

      <label htmlFor="typeSelect">Select The activity based on Type:</label>
      <div>
        <select
          className="selectButton"
          id="typeSelect"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>
      </div>

      <div>
        <button className="getActivityButton" onClick={fetchActivity}>
          Get a new activity
        </button>
      </div>
      <div>
        <p className="activityResult" >{activity} </p>
        <p>The price for the activity is in general ${price}</p>
      </div>
    </div>
  );
};

export { Activity };
