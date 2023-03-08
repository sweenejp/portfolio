import React, { useState, useEffect } from 'react';
import { Contact, Footer, Header, Portfolio } from './components';
import portfolioData from './portfolioData';

const App = () => {
  const [themeIsLight, setThemeIsLight] = useState();
  const [allTags, setAllTags] = useState([]);
  const [displayedTags, setDisplayedTags] = useState([]);

  useEffect(() => {
    // set initial state to own a list of all the tags
    const allTags = [].concat(...portfolioData.map((item) => item.tags));
    const allTagsUnique = Array.from(new Set(allTags));

    // get local storage
    const displayedTags = localStorage.getItem('displayedTags')
      ? JSON.parse(localStorage.getItem('displayedTags'))
      : ['Featured'];
    const themeIsLight =
      localStorage.getItem('themeIsLight') === 'false' ? false : true;
    setAllTags(allTagsUnique);
    setDisplayedTags(displayedTags);
    setThemeIsLight(themeIsLight);
  }, []);

  useEffect(() => {
    localStorage.setItem('displayedTags', JSON.stringify(displayedTags));
    localStorage.setItem('themeIsLight', themeIsLight);
  }, [themeIsLight, displayedTags]);

  const tagToggler = (event) => {
    const tag = event.target.name;
    let newDisplayedTags = displayedTags;
    if (newDisplayedTags.includes(tag)) {
      newDisplayedTags = newDisplayedTags.filter((item) => item !== tag);
    } else {
      newDisplayedTags = newDisplayedTags.concat(tag);
    }
    setDisplayedTags(newDisplayedTags);
  };

  const portfolioDataReversed = [...portfolioData].reverse();

  return (
    <div className={themeIsLight ? 'app theme-light' : 'app theme-dark'}>
      <Header
        themeIsLight={themeIsLight}
        handleClick={() => setThemeIsLight((prevValue) => !prevValue)}
      />
      <main>
        <Portfolio
          tagToggler={tagToggler}
          portfolioData={portfolioDataReversed}
          allTags={allTags}
          displayedTags={displayedTags}
          themeIsLight={themeIsLight}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
