import React from "react";
import PortfolioItem from "./PortfolioItem";

function Portfolio(props) {
  const displayedTags = props.displayedTags;
  const portfolioItems = props.data
    .filter((item) =>
      item.tags.some((item) => displayedTags.indexOf(item) >= 0)
    )
    .map((item) => <PortfolioItem key={item.title} {...item} />);

  const tagButtons = props.allTags.map((item) => (
    <button
      className="tag-button"
      key={item}
      name={item}
      onClick={props.tagToggler}
    >
      {item}
    </button>
  ));
  return (
    <div id="portfolio" className="section portfolio">
      <div className="divider"></div>
      <h2 className="section-title portfolio__title">Portfolio</h2>
      {tagButtons}
      <div className="portfolio-items-grid">{portfolioItems}</div>
    </div>
  );
}

export default Portfolio;
