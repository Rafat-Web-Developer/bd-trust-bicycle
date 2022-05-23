import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Profile = () => {
  const [user] = useAuthState(auth);

  return (
    <section>
      <div className="card w-100 bg-primary text-primary-content">
        <h2 className="text-2xl py-2 px-8 font-bold uppercase">Profile Page</h2>
        <div className="card-body">
          <h2 className="card-title">{user?.displayName}</h2>
          <p>{user?.email}</p>
          {/* <div className="card-actions justify-start">
            <button className="btn">Buy Now</button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Profile;
