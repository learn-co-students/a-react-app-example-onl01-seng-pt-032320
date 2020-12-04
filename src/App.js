import React, { Component } from 'react';
// import moment from 'moment';
import ExampleComponent from './ExampleComponent'
//ExampleComponent.js has an export statement as well (take the time to locate it),
// and is imported into App.js
// eslint-disable-next-line 
import TestComponent from './TestComponent'
//node_module folder = holds all downloaded packages
//react + moment = npm packages, App.js is importing files from diff directory from node_module folder
// ExampleComponent and TestComponent = App.js is importing files in the same directory 
//and lets us use ExampleComponent in render() method
// export = let other files import things from App.js file 
// diff. types of exports= named exports and default exports

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
        // JSX goes here!
        //We will go into greater depth on things like extends Component,
        // but for now, the key thing to understand is that all of 
        //the visible content of our app is contained within this App class.
      <div className="App">
        <header className="App-header">
        Now
          {/* {moment().format('MMMM Do YYYY, hh:mm:ss a')} */}
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}

export default App; //= App is the "default export"
//export default = App class is main thing we want to export from our App.js file.
// You can have only one default export per file.
