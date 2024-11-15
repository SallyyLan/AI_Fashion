import React, { useState } from "react";
import axios from "axios";

function SearchBar({ setRecommendations }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/search?query=${query}`
      );
      setRecommendations(response.data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g., A dress for summer vacation trip to Italy"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
