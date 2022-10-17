import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import NoteState from "./Context/notes/NoteState";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Navbar />
          <div className="conatiner">
            <Routes>
              <Route
                exact
                path="/about"
                element={
                  <>
                    <About />
                  </>
                }
              />
              <Route
                exact
                path="/"
                element={
                  <>
                    <Home />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
