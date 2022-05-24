import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../firebase.init";
import useCheckAdmin from "../../Hooks/useCheckAdmin";
import Loading from "../Shared/Loading";

const RequireUser = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, checkAdminLoading] = useCheckAdmin(user);

  if (loading || checkAdminLoading) {
    return <Loading></Loading>;
  }

  if (admin) {
    signOut(auth);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default RequireUser;
