import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ setRecommendations }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    //  dummy recommendations
    const dummyRecommendations = [
      {
        name: "Floral Dress",
        imageUrl:
          "https://static.zara.net/assets/public/e6e0/3fad/3e3e400a9867/dd1e1c422e8a/02183072712-p/02183072712-p.jpg?ts=1715849193459&w=1024",
      },
      {
        name: "Summer Maxi Dress",
        imageUrl:
          "https://static.zara.net/assets/public/d8e7/562e/3c8140e7a105/06f2fa830bd6/05029151330-p/05029151330-p.jpg?ts=1718097964978&w=1024",
      },
      {
        name: "Elegant Yellow Dress",
        imageUrl:
          "https://static.zara.net/assets/public/1a7c/c37f/76ec40e8a0c7/6bac7fd59119/02731068300-p/02731068300-p.jpg?ts=1715867446004&w=1024",
      },
    ];
    setRecommendations(dummyRecommendations);
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
