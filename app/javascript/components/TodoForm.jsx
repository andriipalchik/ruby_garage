import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import axios from "axios"

class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: "",
      defaultTaskValue: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTaskChange = this.handleTaskChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.formSubmit(e.target)
  }

  async formSubmit() {
    await axios
      .post("/api/v1/tasks.json", {
        name: this.state.task,
        status: false,
        deadline: new Date(),
        project_id: this.props.project_id,
        priority: false,
      })
      .then((resp) => {
        console.log(resp.data)
        // this.props.updateTodoList(resp.data)
        // this.setState({
        //   task: this.state.defaultTaskValue,
        // })
      })
      .catch((error) => console.log(error))
  }

  handleTaskChange(e) {
    this.setState({
      task: e.target.value,
    })
  }

  // async formSubmit() {
  //   var formData = {
  //     data: {
  //       id: Math.floor(Math.random() * 1000),
  //       type: "task",
  //       attributes: {
  //         name: this.state.task,
  //         status: false,
  //         priority: false,
  //         deadline: new Date(),
  //         project_id: this.props.project_id,
  //       },
  //     },
  //   }

  //   await fetch("/api/v1/tasks.json", {
  //     method: "POST",
  //     // mode: "cors",
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => this.props.updateTodoList(response))
  //   this.setState({
  //     task: this.state.defaultTaskValue,
  //   })
  // }

  //   handleBodyChange(event) {
  //     this.setState({
  //       body: event.target.value,
  //     })
  //   }

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <form onSubmit={this.handleSubmit} id="todo_form" autoComplete="off">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-end"
              spacing={2}
            >
              <Grid item xs={10}>
                <TextField
                  id="task_input"
                  label="Task Description"
                  placeholder="Start typing here to create a task..."
                  variant="outlined"
                  type="text"
                  size="small"
                  name="task"
                  onChange={this.handleTaskChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ height: "100%" }}
                >
                  Add Task
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    )
  }
}
export default TodoForm
