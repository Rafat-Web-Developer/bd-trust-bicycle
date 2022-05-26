import React from "react";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <main className="m-6">
      <section>
        <h1 className="mb-14 text-center text-2xl font-bold text-primary">
          My Portfolio
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card lg:max-w-96 bg-base-300 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/zXXDpzy/MPS1.png"
                alt="portfolio_image"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary">"Hello Gas"</h2>
              <p>This is my first and simple project.</p>
              <div className="card-actions">
                <a
                  href="https://hello-gas.netlify.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyPortfolio;
