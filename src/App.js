import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Recommendations from "./components/Recommendations";
import "./App.css";

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="App">
      <h2>Find the Best for You</h2>
      <SearchBar setRecommendations={setRecommendations} />
      <Recommendations items={recommendations} />
    </div>
  );
}

export default App;
