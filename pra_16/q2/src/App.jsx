import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };

    console.log("Constructor Called");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>React Lifecycle Example</h2>
        <h3>Count: {this.state.count}</h3>

        <button onClick={this.increaseCount}>
          Increase Count
        </button>
      </div>
    );
  }
}

export default App;