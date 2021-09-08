import React from "react";

function PortfolioItem(props) {
  const portfolioItemTags = props.tags.map((tag) => (
    <span className="portfolio-item__tag" key={tag}>
      {tag}
    </span>
  ));
  return (
    <div className="portfolio-item">
      <img
        className="portfolio-item__screenshot"
        src={props.screenshot}
        alt=""
      />
      <h3 className="portfolio-item__title">{props.title}</h3>
      <p className="portfolio-item__description">{props.description}</p>
      <div className="portfolio-item__tags">{portfolioItemTags}</div>
    </div>
  );
}

export default PortfolioItem;
