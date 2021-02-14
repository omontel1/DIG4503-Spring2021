import React from 'react';
import Market from '../src/components/Market';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "Omar"
    };

  }
  render() {
    return (
      <div>
        <h2>Click button to randomize your name!</h2>
        <button onClick={()=> this.setState({firstname: "Oswald" })}>Click me!</button>

        <p>My name is {this.state.firstname}</p>
      </div>
    );
  }
}

export default App;
