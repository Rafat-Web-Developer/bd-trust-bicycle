import React from "react";
import SinglePart from "./SinglePart";

const AllParts = () => {
  return (
    <main className="m-6">
      <section>
        <div className="text-center mb-10">
          <h1 className="mb-2 mt-10 text-3xl font-bold text-primary uppercase">
            All Bicycle Parts
          </h1>
          <p className="text-sm uppercase text-muted">You can buy any part</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SinglePart></SinglePart>
          <SinglePart></SinglePart>
          <SinglePart></SinglePart>
          <SinglePart></SinglePart>
          <SinglePart></SinglePart>
          <SinglePart></SinglePart>
        </div>
      </section>
    </main>
  );
};

export default AllParts;
