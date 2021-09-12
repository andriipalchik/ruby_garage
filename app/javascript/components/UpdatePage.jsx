import React from "react"
import Fab from "@material-ui/core/Fab"
import UpdateIcon from "@material-ui/icons/Update"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "sticky",
    bottom: theme.spacing(40),
    left: theme.spacing(155),
  },
}))

const UpdatePage = () => {
  const classes = useStyles()
  return (
    <Fab
      color="secondary"
      aria-label="update"
      className={classes.fab}
      href="/pages/index"
      // style={{ marginLeft: 800 }}
    >
      <UpdateIcon />
    </Fab>
  )
}

export default UpdatePage
