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

  render() {

    return (

    <div className="App">

    {(this.state.buttonClicked) ?
      (<p>You should try doing the Airport challenge</p>)
      :
      (<div><p>
         So... what should I work on today?
       </p>

       <button
         onClick={() => {this.displayTask()}}
       >
        Give me a task!

       </button></div>)
    }

      </div>
    );
  }
}

export default App;
