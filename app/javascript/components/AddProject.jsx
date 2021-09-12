import React, { useState, useEffect } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import axios from "axios"

const AddProject = (props) => {
  const [input, setInput] = useState("")
  const [state, setState] = useState(false)

  const handleChange = () => {
    setState(!state)
  }

  const handleInputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("/api/v1/projects.json", { name: input })
      .then((resp) => {
        console.log(resp.data)
      })
      .catch((error) => console.log(error))
    setState(!state)
  }

  const text = (
    <div>
      <TextField
        id="basic"
        label="Name"
        size="small"
        style={{ margin: 8 }}
        defaultValue={input}
        onChange={handleInputChange}
        placeholder="Name of your project"
      />
    </div>
  )

  const button1 = (
    <div>
      <Button
        value="end"
        color="primary"
        variant="contained"
        onClick={handleChange}
        startIcon={<AddIcon />}
      >
        Add TODO List
      </Button>
    </div>
  )

  const button2 = (
    <div>
      <Button
        value="end"
        color="primary"
        variant="contained"
        onClick={handleSubmit}
        startIcon={<AddIcon />}
      >
        Add TODO List
      </Button>
    </div>
  )

  return (
    <div className="AddButton">
      <Box mx={46}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={2}
          >
            {state ? text : null}

            {state ? button2 : button1}
          </Grid>
        </form>
      </Box>
    </div>
  )
}

export default AddProject
