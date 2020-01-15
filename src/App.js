import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonClicked: false,
    }
  }

  displayTask() {
    this.setState({
      buttonClicked: true,
    })
  }

  render(){
    if (this.state.buttonClicked) {
      return <p>You should try doing the Airport challenge</p>
    }
    return (
      <div className="App">

          <p>
            So... what should I work on today?
          </p>

          <button
            onClick={() => {this.displayTask()}}
          >
            Give me a task!
          </button>
      </div>
    );
  }
}

export default App;
