import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relativeList = ["Sourav", "Anirban", "Chudia"];
    return (
      <>
        <ol key = "relativeList">
          {relativeList.map((relative, index) => (
            <li key={`relativeListItem${index + 1}`}>{relative}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;