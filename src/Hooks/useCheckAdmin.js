import { useEffect, useState } from "react";

const useCheckAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [checkAdminLoading, setCheckAdminLoading] = useState(false);

  useEffect(() => {
    setCheckAdminLoading(true);
    const email = user?.email;
    if (email) {
      fetch(`https://young-dawn-47483.herokuapp.com/checkAdmin/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCheckAdminLoading(false);
          setAdmin(data.admin);
        });
    }
  }, [user]);

  return [admin, checkAdminLoading];
};

export default useCheckAdmin;
