import { Component } from "react";
import toDoAPI from "../api/toDoAPI"

class TaskPage extends Component {

  state = {
    task: null
  }

  async getTask() {
    try {
      let taskId = this.props.match.params.taskId
      let taskData = await toDoAPI.getTaskById(taskId)
      if (taskData) {
        this.setState({ task: taskData })
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getTask()
  }

  renderTask() {
    if (!this.state.task) {
      return <p>No Task found!</p>
    }

    return (
      <div>
        <h1>Name: {this.state.task.name}</h1>
        <h3>Done: {this.state.task.completed ? "YES" : "NO"}</h3>
        <h3>Due: {this.state.task.due_date}</h3>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Task Page: { this.props.match.params.taskId }</h1>
        { this.renderTask() }
      </div>
    )
  }
}

export default TaskPage;