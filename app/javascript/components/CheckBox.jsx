import React, { useState } from "react"
import Checkbox from "@material-ui/core/Checkbox"
import { amber } from "@material-ui/core/colors"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { withStyles } from "@material-ui/core/styles"
import axios from "axios"

const AmberCheckbox = withStyles({
  root: {
    color: amber[400],
    "&$checked": {
      color: amber[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />)

const CheckBox = ({ id, status }) => {
  const [checked, setChecked] = useState(status)

  const handleChange = () => {
    setChecked(!checked)
    axios
      .put(`/api/v1/tasks/${id}.json`, { status: !checked })
      .then((resp) => {
        console.log(resp.data.data)
      })
      .catch((error) => console.log(error))
  }
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <AmberCheckbox
            checked={checked}
            onChange={handleChange}
            color="primary"
          />
        }
        label="done"
        labelPlacement="end"
      />
    </FormGroup>
  )
}

export default CheckBox
