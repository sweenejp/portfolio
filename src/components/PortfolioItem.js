import React from "react";

function PortfolioItem(props) {
  const display = props.display;
  const portfolioItemTags = props.tags.map((tag) => (
    <span className="portfolio-item__tag" key={tag}>
      {tag}
    </span>
  ));
  return (
    <div className={`portfolio-item ${display ? "" : "hide"}`}>
      <a href={props.liveSite} target="_blank" rel="noreferrer">
        <img
          className="portfolio-item__screenshot"
          src={props.screenshot}
          alt=""
        />
      </a>
      <h3 className="portfolio-item__title">{props.title}</h3>
      <ul>
        <li className="portfolio-item__link">
          <a href={props.liveSite}>
            <img className="icon" src="images/preview.png" alt="Live Site" />{" "}
            View live site
          </a>
        </li>
        <li className="portfolio-item__link">
          <a href={props.gitRepo}>
            <img className="icon" src="images/github.png" alt="GitHub Repo" />{" "}
            View repository
          </a>
        </li>
      </ul>

      <p className="portfolio-item__description">{props.description}</p>
      <div className="portfolio-item__tags">{portfolioItemTags}</div>
    </div>
  );
}

export default PortfolioItem;
