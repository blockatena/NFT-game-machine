import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
        {/* <div className="content">
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Routes>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
