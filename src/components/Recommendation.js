import React from "react";

function Recommendations({ items }) {
  return (
    <div className="recommendation-list">
      {items.map((item, index) => (
        <div key={index} className="recommendation-item">
          <img src={item.imageUrl} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Recommendations;
