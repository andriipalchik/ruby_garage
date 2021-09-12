import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import UpdateIcon from "@material-ui/icons/Update"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "0.5em",
    padding: "0.75em",
    textAlign: "justify",
  },
}))

const UpdateTask = ({ state, id }) => {
  const [input, setInput] = useState("")

  const handleInputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put(`/api/v1/tasks/${id}.json`, { name: input })
      .then((resp) => {
        console.log(resp.data.data)
      })
      .catch((error) => console.log(error))
  }

  const classes = useStyles()

  const form = (
    <Grid container>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit} id="todo_form" autoComplete="off">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={10}>
              <TextField
                id="task_input"
                label="Task Description"
                placeholder="Start typing here to update your task..."
                variant="outlined"
                type="text"
                size="small"
                name="task"
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="small"
                style={{ height: "100%" }}
                startIcon={<UpdateIcon />}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )

  return <div className="UpdateTask">{state ? form : null}</div>
}
export default UpdateTask
