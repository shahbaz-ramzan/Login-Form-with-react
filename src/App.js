import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./Pages/Browse";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Help from "./Pages/Help";
import Jobs from "./Pages/Jobs";
import WhitePaper from "./Pages/WhitePaper";
import Login from "./Pages/Login";
import Fetch from "./Pages/Fetch";
import Axios from "./Pages/Axios";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Browse" element={<Browse />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/whitePaper" element={<WhitePaper />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Fetch" element={<Fetch />} />
          <Route path="/Axios" element={<Axios/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
