import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const [tokenLoading, setTokenLoading] = useState(false);

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      setTokenLoading(true);
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("accessToken", data?.token);
          setToken(data?.token);
          setTokenLoading(false);
        });
    }
  }, [user]);
  return [token, tokenLoading];
};

export default useToken;
