import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import useCheckAdmin from "../../Hooks/useCheckAdmin";
import Loading from "../Shared/Loading";

const DashboardHome = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, checkAdminLoading] = useCheckAdmin(user);

  const { data: totalCount, isLoading } = useQuery("totalCount", () =>
    fetch(`https://young-dawn-47483.herokuapp.com/total/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (loading || isLoading || checkAdminLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {admin && (
          <>
            <div className="stats bg-primary text-primary-content">
              <div className="stat text-center">
                <div className="stat-title font-bold">Total Admin</div>
                <div className="stat-value">{totalCount.adminCount}</div>
              </div>
            </div>
            <div className="stats bg-primary text-primary-content">
              <div className="stat text-center">
                <div className="stat-title font-bold">Total Users</div>
                <div className="stat-value text-center">
                  {totalCount.userCount}
                </div>
              </div>
            </div>
            <div className="stats bg-primary text-primary-content">
              <div className="stat text-center">
                <div className="stat-title font-bold">Total Orders</div>
                <div className="stat-value text-center">15</div>
              </div>
            </div>
            <div className="stats bg-primary text-primary-content">
              <div className="stat text-center">
                <div className="stat-title font-bold">Total Products</div>
                <div className="stat-value text-center">20</div>
              </div>
            </div>
            <div className="stats bg-primary text-primary-content">
              <div className="stat text-center">
                <div className="stat-title font-bold">Total Reviews</div>
                <div className="stat-value text-center">6</div>
              </div>
            </div>
          </>
        )}

        {!admin && (
          <div className="stats bg-primary text-primary-content">
            <div className="stat text-center">
              <div className="stat-title font-bold">My Total Orders</div>
              <div className="stat-value text-center">
                {totalCount?.ordersCount}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DashboardHome;
