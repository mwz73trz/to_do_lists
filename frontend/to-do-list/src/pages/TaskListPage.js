import { Component } from "react";
import { Link } from "react-router-dom";
import toDoAPI from "../api/toDoAPI"

class TaskListPage extends Component {

  state = {
    taskList: null
  }

  async getTaskList() {
    try {
      let taskListId = this.props.match.params.taskListId
      let taskListData = await toDoAPI.getTaskListById(taskListId)
      if (taskListData) {
        this.setState({ taskList: taskListData })
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getTaskList()
  }

  renderTasks() {
    let taskElements = this.state.taskList.tasks.map((task, index) => {
      return (
        <li key={`task-${index}`}><Link to={`/task-lists/${this.state.taskList.tasks.id}/tasks/${task.id}`}>{task.name}</Link></li>
      )
    })
    return (
      <ul>
        { taskElements }
      </ul>
    )
  }

  renderTaskList() {
    if (!this.state.taskList) {
      return <p>No Task List found!</p>
    }

    return (
      <div>
        <h1>{this.state.taskList.name}</h1>
        <h3>{this.state.taskList.user}</h3>
        { this.renderTasks() }
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Task List Page: { this.props.match.params.taskListId }</h1>
        { this.renderTaskList() }
      </div>
    )
  }
}

export default TaskListPage;