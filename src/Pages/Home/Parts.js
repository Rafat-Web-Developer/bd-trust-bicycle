import React from "react";
import Part from "./Part";

const Parts = () => {
  return (
    <section className="my-20">
      <h1 className="mb-20 text-3xl text-center uppercase font-bold text-primary">
        Bicycle Parts
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Part></Part>
        <Part></Part>
        <Part></Part>
        <Part></Part>
        <Part></Part>
        <Part></Part>
      </div>
    </section>
  );
};

export default Parts;
