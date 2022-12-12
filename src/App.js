import logo from './logo.svg'
import './App.css'
import Button from "@mui/material/Button"
import SaveIcon from "@mui/icons-material/Save"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />

        <Button
          startIcon={ <SaveIcon /> }
          size="large"
          variant="contained"
          color="secondary">
          Hello World
        </Button>
      </header>
    </div>
  )
}

export default App
