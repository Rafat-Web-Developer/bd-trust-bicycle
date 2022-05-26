import React from "react";

const Blog = ({ blog }) => {
  const { question, answer } = blog;
  return (
    <div className="card bg-primary my-3">
      <div className="card-body">
        <h1 className="card-title text-warning">{question}</h1>
        <p className="text-white">{answer}</p>
      </div>
    </div>
  );
};

export default Blog;
