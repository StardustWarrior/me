import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Introduction from './Introduction';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import VisualPortfolio from './VisualPortfolio';
import ScrollableAnchor from 'react-scrollable-anchor';

class App extends Component{
  render(){
    return (
      <div className="App">
        <NavBar />
        <div className="AppContainer">
          <ScrollableAnchor id={'intro'}>
            <Introduction />
          </ScrollableAnchor>
          <ScrollableAnchor id={'work'}>
            <WorkExperience />
          </ScrollableAnchor>
          <ScrollableAnchor id={'skills'}>
            <Skills />
          </ScrollableAnchor>
          <ScrollableAnchor id={'websites'}>
            <VisualPortfolio />
          </ScrollableAnchor>
        </div>
      </div>
    );
  }
}

export default App;
