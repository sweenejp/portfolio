import React from "react";
import { Contact, Footer, Header, Portfolio } from "./components";
import portfolioData from "./portfolioData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: portfolioData,
      displayedTags: [],
      allTags: [],
      themeIsLight: true,
    };
    this.tagToggler = this.tagToggler.bind(this);
    this.themeToggler = this.themeToggler.bind(this);
  }

  // methods

  themeToggler() {
    this.setState({ themeIsLight: !this.state.themeIsLight });
  }

  tagToggler(event) {
    const tag = event.target.name;
    let newDisplayedTags = this.state.displayedTags;
    if (newDisplayedTags.includes(tag)) {
      newDisplayedTags = newDisplayedTags.filter((item) => item !== tag);
    } else {
      newDisplayedTags = newDisplayedTags.concat(tag);
    }
    this.setState({ displayedTags: newDisplayedTags });
  }

  // life cycle

  componentDidMount() {
    //set initial state to own a list of all the tags
    const allTags = [].concat(...this.state.data.map((item) => item.tags));
    const allTagsUnique = Array.from(new Set(allTags));
    this.setState({ allTags: allTagsUnique });
  }

  render() {
    return (
      <div
        className={
          this.state.themeIsLight ? "app theme-light" : "app theme-dark"
        }
      >
        <Header
          themeIsLight={this.state.themeIsLight}
          handleClick={this.themeToggler}
        />
        <main>
          <Portfolio tagToggler={this.tagToggler} {...this.state} />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
