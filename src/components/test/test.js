import React, { Component } from "react";

class test extends Component {
  state = {
    title: "",
    body: ""
  };
  //fires when component mounts
  componentDidMount() {
    console.log("Componenet did Mount");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // //fires before component didmount
  // componentWillMount() {
  //   console.log("Componenet will Mount");
  // }

  // //fires when component update if anyhting change sin state
  // componentDidUpdate() {
  //   console.log("ComponentDId Update");
  // }
  // //fires before componentdid update
  // componentWillUpdate() {
  //   console.log("Component Will Update");
  // }
  // //fires when component recieve new properties
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("Component Recieve props");
  // }

  // //fires before mutation are made
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("componentgetsnapshotbeforeupdate");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default test;
