import React, { Component } from 'react';
import Home from './Home'
import Portfolio from './Portfolio';
import Resume from './Resume';


class App extends Component {
  constructor(props) {
    super(props)
    this.homeRef = React.createRef();
    this.portRef = React.createRef();
    this.resRef = React.createRef();
  }

  scrollToHomeRef = () => {console.log("Clicked 1!")
  window.scrollTo(0, this.homeRef.current.offsetTop)}

  scrollToPortRef = () => {console.log("Clicked 2!") 
  window.scrollTo(0, this.portRef.current.offsetTop + 2)}

  scrollToResRef = () => {console.log("Clicked 3!")
  window.scrollTo(0, this.resRef.current.offsetTop - 80) }

  render() {
    return (
      <div>
        <div ref={this.homeRef}>
          <Home homeButtonClicked={this.scrollToHomeRef}
            portButtonClicked={this.scrollToPortRef}
            resButtonClicked={this.scrollToResRef} />
        </div>

        <div ref={this.portRef}>
          <Portfolio 
            homeButtonClicked={this.scrollToHomeRef}
            portButtonClicked={this.scrollToPortRef}
            resButtonClicked={this.scrollToResRef} />
        </div>
        <div ref={this.resRef}>
          <Resume 
            homeButtonClicked={this.scrollToHomeRef}
            portButtonClicked={this.scrollToPortRef}
            resButtonClicked={this.scrollToResRef} />
        </div>
      </div>
    );
  }
}

export default App;
