import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="search/:id" element={<Search />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
