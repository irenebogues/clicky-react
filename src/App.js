// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import avatarcard from "./components/avatarcard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import avatars from "./avatar.json";
import "./App.css";

class App extends Component {
  // Setting this.state.avatars to the avatars json array
  state = {
    avatars
  };

  removeAvatar = id => {
    // Filter this.state.avatars for avatars with an id not equal to the id being removed
    const avatars = this.state.avatars.filter(avatar => avatar.id !== id);
    // Set this.state.avatars equal to the new avatars array
    this.setState({ avatars });
  };

  // Map over this.state.avatars and render a avatarCard component for each avatar object
  render() {
    return (
      <Wrapper>
        <Title>Avatar List</Title>
        {this.state.avatars.map(avatar => (
          <avatarCard
            removeAvatar={this.removeAvatar}
            id={avatar.id}
            key={avatar.id}
            name={avatar.name}
            image={avatar.image}
            professions={avatar.occupation}
            location={avatar.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

