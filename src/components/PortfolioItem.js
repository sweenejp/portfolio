import React from "react";

function PortfolioItem(props) {
  return (
    <div className="portfolio-item">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default PortfolioItem;
