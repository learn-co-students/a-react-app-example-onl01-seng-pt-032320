import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {moment()}
          <p>Now</p>
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        {/* <ExampleComponent /> */}
        <TestComponent />

      </div>
    );
  }
}

export default App;

// Replace the contents of the header element so that, instead of a time, it just says 'Now'
// Make sure to include <ExampleComponent /> (if you have removed it)
// Add in a new component, <TestComponent />, just below <ExampleComponent />
// You can open two terminal tabs to both run npm start and test the lab using learn or npm test.

