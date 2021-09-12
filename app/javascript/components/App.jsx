import React from "react"
import TodoList from "./TodoList"
import UpdatePage from "./UpdatePage"
import Container from "@material-ui/core/Container"

const App = () => {
  return (
    <div className="App">
      <Container maxWidth="md">
        <TodoList />
      </Container>
      <UpdatePage />
    </div>
  )
}

export default App
