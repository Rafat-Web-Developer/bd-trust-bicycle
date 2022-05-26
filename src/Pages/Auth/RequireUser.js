import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const RequireUser = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [userCheckLoading, setUserCheckLoading] = useState(false);

  useEffect(() => {
    setUserCheckLoading(true);
    const email = user?.email;
    if (email) {
      fetch(`https://young-dawn-47483.herokuapp.com/checkAdmin/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserCheckLoading(false);
          if (data?.admin) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            return <Navigate to="/login"></Navigate>;
          }
        });
    }
  }, [user]);

  if (loading || userCheckLoading) {
    return <Loading></Loading>;
  }

  return children;
};

export default RequireUser;
