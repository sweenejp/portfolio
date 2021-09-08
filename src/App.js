import React from "react";
import { About, Contact, Footer, Header, Portfolio } from "./components";
import portfolioData from "./portfolioData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: portfolioData,
      displayedTags: [],
      allTags: [],
    };
    this.tagToggler = this.tagToggler.bind(this);
  }

  componentDidMount() {
    //set initial state to own a list of all the tags
    const allTags = [].concat(...this.state.data.map((item) => item.tags));
    const allTagsUnique = Array.from(new Set(allTags));
    this.setState({ allTags: allTagsUnique });
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
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <About />
          <Portfolio tagToggler={this.tagToggler} {...this.state} />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
