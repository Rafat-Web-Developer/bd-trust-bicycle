import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("qA.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [blogs]);

  return (
    <main className="m-6">
      <section>
        <h1 className="mb-14 text-center text-2xl font-bold text-primary">
          Important Questions
        </h1>
        <div>
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blogs;
