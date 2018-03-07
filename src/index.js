import React from "react";
import { render } from "react-dom";
import { Header } from "./header";
//{}es6 destructuring returning an object
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Header />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
