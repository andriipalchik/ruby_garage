import DateFnsUtils from "@date-io/date-fns"
import React, { useState } from "react"
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers"
import axios from "axios"
import "date-fns"

const Deadline = ({ id, deadline }) => {
  const [state, setState] = useState(deadline)

  const handleDateChange = (date) => {
    setState(date)
  }

  const handleChange = (state) => {
    axios
      .put(`/api/v1/tasks/${id}.json`, { deadline: state })
      .then((resp) => {
        console.log(resp.data.data)
      })
      .catch((error) => console.log(error))
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        format="dd/MM/yyyy"
        label="Deadline"
        value={state}
        size="small"
        onChange={handleDateChange}
        onAccept={handleChange}
        animateYearScrolling
      />
    </MuiPickersUtilsProvider>
  )
}

export default Deadline
