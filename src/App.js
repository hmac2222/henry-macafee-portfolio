import React, { Component } from 'react';
import Home from './Home'
import Portfolio from './Portfolio';


class App extends Component {
  constructor(props) {
    super(props)
    this.homeRef = React.createRef();
    this.portRef = React.createRef();
  }

  scrollToHomeRef = () => window.scrollTo(0, this.homeRef.current.offsetTop)

  scrollToPortRef = () => window.scrollTo(0, this.portRef.current.offsetTop)

  render() {
    return (
      <div>
        <div ref={this.homeRef}>
          <Home portButtonClicked={this.scrollToPortRef} />
        </div>

        <div ref={this.portRef}>
          <Portfolio 
            homeButtonClicked={this.scrollToHomeRef}
            portButtonClicked={this.scrollToPortRef} />
        </div>
      </div>
    );
  }
}

export default App;
