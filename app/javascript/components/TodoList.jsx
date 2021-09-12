import React, { Component } from "react"
import AddProject from "./AddProject"
import Project from "./Project"
import axios from "axios"

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      items: [],
    }
    this.updateTodoProject = this.updateTodoProject.bind(this)
    this.deleteProject = this.deleteProject.bind(this)
    this.updateTodoList = this.updateTodoList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  componentDidMount() {
    this.getProjects()
    this.getTasks()
  }

  getProjects() {
    axios
      .get("/api/v1/projects.json")
      .then((resp) => {
        this.setState({ projects: resp.data.data.reverse() })
      })
      .catch((resp) => console.log(resp))
  }
  getTasks() {
    axios
      .get("/api/v1/tasks.json")
      .then((resp) => {
        this.setState({ items: resp.data.data.reverse() })
      })
      .catch((resp) => console.log(resp))
  }

  updateTodoProject(project) {
    let _projects = this.state.projects
    _projects.unshift(project)
    this.setState({
      projects: _projects,
    })
  }

  updateTodoList(item) {
    let _items = this.state.items
    _items.unshift(item)
    this.setState({
      items: _items,
    })
  }

  deleteProject(project) {
    let deleteURL = "/api/v1/projects" + `/${project.id}.json`
    fetch(deleteURL, {
      method: "DELETE",
    }).then(() => {
      let _projects = this.state.projects
      let index = _projects.indexOf(project)
      _projects.splice(index, 1)
      this.setState({
        projects: _projects,
      })
    })
  }

  deleteItem(item) {
    let deleteURL = "/api/v1/tasks" + `/${item.id}.json`
    fetch(deleteURL, {
      method: "DELETE",
    }).then(() => {
      //or .filter(item != passed_in_item)
      let _items = this.state.items
      let index = _items.indexOf(item)
      _items.splice(index, 1)
      this.setState({
        items: _items,
      })
    })
  }

  render() {
    return (
      <div className="TodoList">
        {this.state.projects.map((i) => (
          <Project
            key={i.id}
            id={i.id}
            item={i}
            items={this.state.items}
            name={i.attributes.name}
            deleteProject={this.deleteProject}
            updateTodoList={this.updateTodoList}
            deleteItem={this.deleteItem}
          />
        ))}
       
        <AddProject updateTodoProject={this.updateTodoProject} />
      </div>
    )
  }
}
export default TodoList
