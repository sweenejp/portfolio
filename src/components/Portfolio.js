import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PortfolioItem from "./PortfolioItem";

function Portfolio(props) {
  const displayedTags = props.displayedTags;
  const portfolioItems = props.data
    .filter((item) =>
      item.tags.some((item) => displayedTags.indexOf(item) >= 0)
    )
    .map((item) => (
      <CSSTransition
        unmountOnExit
        timeout={300}
        classNames="portfolio-item"
        key={item.title}
      >
        <PortfolioItem key={item.title} {...item} />
      </CSSTransition>
    ));

  const tagButtons = props.allTags.map((item) => (
    <label className="tag-button__label" key={item} htmlFor={item}>
      {item}
      <input
        className="tag-button__input"
        type="checkbox"
        name={item}
        onChange={props.tagToggler}
      />
    </label>
  ));
  return (
    <div id="portfolio" className="portfolio">
      <h2>This is the portfolio section</h2>
      {tagButtons}
      <TransitionGroup>{portfolioItems}</TransitionGroup>
    </div>
  );
}

export default Portfolio;
