import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Navbar from "./Pages/Shared/Navbar";
import AllParts from "./Pages/BicycleParts/AllParts";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/User/MyOrders";
import AddReview from "./Pages/Dashboard/User/AddReview";
import Profile from "./Pages/Dashboard/Profile";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import RequireAuth from "./Pages/Auth/RequireAuth";
import AllUsers from "./Pages/Dashboard/Admin/AllUsers";
import AllAdmin from "./Pages/Dashboard/Admin/AllAdmin";
import ManageProducts from "./Pages/Dashboard/Admin/ManageProducts";
import ManageOrders from "./Pages/Dashboard/Admin/ManageOrders";
import AddProduct from "./Pages/Dashboard/Admin/AddProduct";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/allParts" element={<AllParts></AllParts>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route path="allAdmin" element={<AllAdmin></AllAdmin>}></Route>
          <Route path="allUsers" element={<AllUsers></AllUsers>}></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="manageProducts"
            element={<ManageProducts></ManageProducts>}
          ></Route>
          <Route
            path="manageOrders"
            element={<ManageOrders></ManageOrders>}
          ></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </>
  );
}

export default App;
