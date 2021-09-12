import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import EventAvailableRoundedIcon from "@material-ui/icons/EventAvailableRounded"
import TodoForm from "./TodoForm"
import UpdateProject from "./UpdateProject"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import AddIcon from "@material-ui/icons/Add"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import TodoItem from "./TodoItem"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
    marginTop: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    margin: "0.5em",
    padding: "0.75em",
    textAlign: "justify",
  },
}))

const Project = (props) => {
  const [projectState, setProjectState] = useState(false)
  const [state, setState] = useState(false)
  const projects = props.item
  const tasks = props.items

  const handleChange = () => {
    setState(!state)
  }

  const handleUpdateProject = () => {
    setProjectState(!projectState)
  }

  function handleDelete() {
    props.deleteProject(props.item)
  }

  const list = tasks.map((item) => (
    <TodoItem
      item={item}
      id={item.id}
      key={item.id}
      name={item.attributes.name}
      status={item.attributes.status}
      deadline={item.attributes.deadline}
      priority={item.attributes.priority}
      project_id={item.attributes.project_id}
      deleteItem={props.deleteItem}
      projects_id={projects.id}
    />
  ))

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper elevation={2}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleChange}
              >
                <EventAvailableRoundedIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {props.name}
              </Typography>
              <Grid
                item
                xs={4}
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
                spacing={4}
              >
                <div>
                  <IconButton
                    variant="contained"
                    color="inherit"
                    value="end"
                    size="small"
                    onClick={handleChange}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    variant="contained"
                    color="inherit"
                    value="end"
                    size="small"
                    onClick={handleUpdateProject}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    variant="contained"
                    color="inherit"
                    value="start"
                    size="small"
                    onClick={handleDelete}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Grid>
            </Toolbar>
          </AppBar>
          <Grid item xs={12}>
            {state ? (
              <Paper elevation={3} className={classes.paper}>
                <TodoForm
                  updateTodoList={props.updateTodoList}
                  project_id={props.id}
                />
              </Paper>
            ) : null}

            <UpdateProject
              handleChange={handleUpdateProject}
              state={projectState}
              id={props.id}
            />
            <Grid container spacing={3}>
              <Grid item xs={12} id="todo_list">
                {list}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Project
