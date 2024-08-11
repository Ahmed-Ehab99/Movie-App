import { useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";
import BlogCard from "../BlogCard/BlogCard";

export default function Blog() {
  const [blogs, setBlogs] = useState();
  async function fetchData() {
    let { data } = await axios.get(`http://localhost:5173/data/blogData.json`);
    setBlogs(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section id="blogs" className="blogs">
        <div className="container-fluid">
          <div className="row">
            <h4 className="section-title">Our Blog</h4>
          </div>
          <div className="row mt-5">
            {blogs &&
              blogs.length > 0 &&
              blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
          </div>
        </div>
      </section>
    </>
  );
}
