import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          {/* <div className="content">
              <Home />
            </div> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
