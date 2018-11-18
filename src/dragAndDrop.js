import React, { Component } from "react";
import "./App.css";

export default class dragAndDrop extends Component {
  state = {
    tasks: [
      { name: "Task1", category: "wip", color: "yellow" },
      { name: "Task2", category: "wip", color: "pink" },
      { name: "Task3", category: "done", color: "skyblue" }
    ]
  };

  render() {
    var tasks = {
      wip: [],
      done: []
    };

    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div
          key={t.name}
          className="draggable"
          style={{ backgroundColor: t.color }}
        />
      );
    });
    return <div className="main_container">Drag and Drop</div>;
  }
}
