import React from 'react';
import PortfolioItem from './PortfolioItem';

function Portfolio({
  portfolioData,
  allTags,
  displayedTags,
  themeIsLight,
  tagToggler,
}) {
  const portfolioItems = portfolioData.map((item) => (
    <PortfolioItem
      key={item.title}
      {...item}
      display={
        item.tags.some((item) => displayedTags.indexOf(item) >= 0)
          ? true
          : false
      }
      themeIsLight={themeIsLight}
    />
  ));

  const tagButtons = allTags.sort().map((item) => (
    <button
      className={`tag-button ${
        displayedTags.indexOf(item) >= 0 ? 'active' : ''
      }`}
      key={item}
      name={item}
      onClick={tagToggler}
      onMouseDown={(e) => e.preventDefault()}
    >
      {item}
    </button>
  ));
  return (
    <section id="portfolio" className="section portfolio">
      <div className="divider"></div>
      <h2 className="section__title portfolio__title">Portfolio</h2>
      <div className="tag-buttons">{tagButtons}</div>
      <div className="portfolio-items-grid">{portfolioItems}</div>
    </section>
  );
}

export default Portfolio;
