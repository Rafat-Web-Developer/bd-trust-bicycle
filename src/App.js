import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Navbar from "./Pages/Shared/Navbar";
import AllParts from "./Pages/BycycleParts/AllParts";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/allParts" element={<AllParts></AllParts>}></Route>
      </Routes>
    </>
  );
}

export default App;
