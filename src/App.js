import React from 'react';
import './App.css';

const weekendChallenges = [
  {
    name: "Airport Challenge",
    url: "https://github.com/makersacademy/airport_challenge"
  },
  {
    name: "Takeaway Challenge",
    url:"https://github.com/makersacademy/takeaway-challenge"
  }
]

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

    let randomNumber = Math.floor((Math.random() * weekendChallenges.length))

    return (

    <div className="App">

    {(this.state.buttonClicked) ?

      (<p>You should try doing the {weekendChallenges[randomNumber].name}</p>)
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
