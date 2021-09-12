import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import { Typography } from "@material-ui/core"
import { cyan } from "@material-ui/core/colors"
import UpdateTask from "./UpdateTask"
import Deadline from "./Deadline"
import CheckBox from "./CheckBox"
import Priority from "./Priority"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "auto",
    margin: "0.5em",
  },
  paper: {
    margin: "0.75em",
    padding: "0.75em",
    textAlign: "justify",
  },
  heading: {
    textAlign: "left",
  },
})

const ColorButton = withStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(cyan[800]),
    backgroundColor: cyan[800],
    "&:hover": {
      backgroundColor: cyan[900],
    },
  },
}))(Button)

export default function TodoItem({
  id,
  name,
  item,
  status,
  deadline,
  priority,
  deleteItem,
  project_id,
  projects_id,
}) {
  const [taskState, setTaskState] = useState(false)
  function handleDelete() {
    deleteItem(item)
  }

  const handleUpdateTask = () => {
    setTaskState(!taskState)
  }

  if (project_id != projects_id) {
    return null
  }

  const classes = useStyles()
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper elevation={3} className={classes.paper}>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <CheckBox status={status} id={id} />
            <Deadline deadline={deadline} id={id} />
            <Priority priority={priority} id={id} />
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid
              item
              xs={9}
              container
              direction="row"
              justify="space-between"
              alignItems="baseline"
            >
              {!taskState ? (
                <Typography
                  variant="h6"
                  className={classes.heading}
                  noWrap={true}
                >
                  {name}
                </Typography>
              ) : (
                <UpdateTask state={taskState} id={id} />
              )}
            </Grid>

            <div>
              <ColorButton
                variant="contained"
                color="primary"
                value="start"
                size="small"
                startIcon={<EditIcon />}
                onClick={handleUpdateTask}
              >
                Edit
              </ColorButton>
              <Button
                variant="contained"
                color="secondary"
                value="start"
                size="small"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
