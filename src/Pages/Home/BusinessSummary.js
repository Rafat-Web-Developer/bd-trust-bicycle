import React from "react";

const BusinessSummary = () => {
  return (
    <section className="my-20">
      <h1 className="mb-20 text-3xl text-center uppercase font-bold text-primary">
        Business Summary
      </h1>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            class="max-w-sm rounded-lg shadow-2xl"
            alt="img"
          />
          <div>
            <h1 class="text-5xl font-bold">Summary Title</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
