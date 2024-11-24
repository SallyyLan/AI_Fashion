import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Recommendations from "./components/Recommendations";
import "./App.css";

// Importing images from src/img folder
import image5 from "./img/image5.jpg";
import image6 from "./img/image6.jpg";
import image7 from "./img/image7.jpg";
import image8 from "./img/image8.jpg";

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="App">
      {recommendations.length === 0 && (
        <div className="image-container">
          <img src={image5} alt="Product 1" className="top-image" />
          <img src={image6} alt="Product 2" className="top-image" />
          <img src={image7} alt="Product 3" className="top-image" />
          <img src={image8} alt="Product 4" className="top-image" />
        </div>
      )}
      <h2>Find the Best for You</h2>
      <SearchBar setRecommendations={setRecommendations} />
      <Recommendations items={recommendations} />
    </div>
  );
}

export default App;
