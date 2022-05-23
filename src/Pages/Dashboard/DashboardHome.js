import React from "react";

const DashboardHome = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div class="stats bg-primary text-primary-content">
          <div class="stat text-center">
            <div class="stat-title font-bold">Total Admin</div>
            <div class="stat-value">5</div>
          </div>
        </div>

        <div class="stats bg-primary text-primary-content">
          <div class="stat text-center">
            <div class="stat-title font-bold">Total Users</div>
            <div class="stat-value text-center">10</div>
          </div>
        </div>

        <div class="stats bg-primary text-primary-content">
          <div class="stat text-center">
            <div class="stat-title font-bold">Total Orders</div>
            <div class="stat-value text-center">15</div>
          </div>
        </div>

        <div class="stats bg-primary text-primary-content">
          <div class="stat text-center">
            <div class="stat-title font-bold">My Total Orders</div>
            <div class="stat-value text-center">2</div>
          </div>
        </div>

        <div class="stats bg-primary text-primary-content">
          <div class="stat text-center">
            <div class="stat-title font-bold">Total Products</div>
            <div class="stat-value text-center">20</div>
          </div>
        </div>

        <div class="stats bg-primary text-primary-content">
          <div class="stat text-center">
            <div class="stat-title font-bold">Total Reviews</div>
            <div class="stat-value text-center">6</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
