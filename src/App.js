import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="m-6">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
