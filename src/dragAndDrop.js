import React, { Component } from "react";
import './App.css';

export default class dragAndDrop extends Component {

  state = {
    tasks: [
      { name: "Task1", category: "wip", color: "yellow" },
      { name: "Task2", category: "wip", color: "pink" },
      { name: "Task3", category: "done", color: "skyblue" }
    ]
  };
  
  onDragStart = (ev, id) => {
    ev.dataTransfer.setData('id', id)
}

  onDragOver = (ev) => {
      ev.preventDefault()
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id")

    let tasks = this.state.tasks.filter((task) => {
        if(task.name = id) {
            task.category = cat
        }
        return task
    }) 

    this.setState({
        ...this.state,
        tasks
    })
  }

  render() {
    var tasks = {
      wip: [],
      done: []
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div key={t.name}
          onDragStart = {(e) => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.color }}
        >
          {t.name}
        </div>
      );
    });
    return (
      <div className="main_container">
        <h2 className="header">Drag and Drop</h2>
        <div className="wip"
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e) => {this.onDrop(e, "wip")}}>
          <span className="task-header">Wip</span>
          {tasks.wip}
        </div>
        <div className="droppable" 
        onDragOver= {(e)=>this.onDragOver(e)}
        onDrop= {(e) => this.onDrop(e, "done")}>
          <span className="task-header">Done</span>
          {tasks.done}
        </div>
      </div>
    );
  }
}
