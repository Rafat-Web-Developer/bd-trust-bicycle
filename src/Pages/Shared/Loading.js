import React from "react";

const Loading = () => {
  return (
    <section className="flex justify-center h-screen items-center">
      <button type="button" className="btn loading" disabled>
        Loading
      </button>
    </section>
  );
};

export default Loading;
