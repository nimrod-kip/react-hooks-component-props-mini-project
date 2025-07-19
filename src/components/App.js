import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const { name, posts } = blogData;
  return (
    <div className="App">
      <Header name={name} />
      <About about="This is a blog about React components and props." />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
