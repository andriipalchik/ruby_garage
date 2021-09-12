import React, { useState } from "react"
import { red } from "@material-ui/core/colors"
import FormGroup from "@material-ui/core/FormGroup"
import { withStyles } from "@material-ui/core/styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import axios from "axios"

const RedSwitch = withStyles({
  switchBase: {
    color: red[300],
    "&$checked": {
      color: red[600],
    },
    "&$checked + $track": {
      backgroundColor: red[500],
    },
  },
  checked: {},
  track: { backgroundColor: red[200] },
})(Switch)

const Priority = ({ id, priority }) => {
  const [state, setState] = useState(priority)

  const handleChange = () => {
    setState(!state)
    axios
      .put(`/api/v1/tasks/${id}.json`, { priority: !state })
      .then((resp) => {
        console.log(resp.data.data)
      })
      .catch((error) => console.log(error))
  }

  return (
    <FormGroup>
      <FormControlLabel
        value="start"
        control={
          <RedSwitch
            defaultChecked={priority}
            onChange={handleChange}
            name="checked"
          />
        }
        label="High Priority"
        labelPlacement="start"
      />
    </FormGroup>
  )
}

export default Priority
