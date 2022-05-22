import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Navbar from "./Pages/Shared/Navbar";
import AllParts from "./Pages/BycycleParts/AllParts";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import Profile from "./Pages/Dashboard/Profile";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/allParts" element={<AllParts></AllParts>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
