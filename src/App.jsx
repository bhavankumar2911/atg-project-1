import React from "react";
import "./main.css";
import ShapesRowInMobile from "./components/ShapesRowInMobile/index.jsx";
import Hero from "./components/Hero/index.jsx";
import PostsFilter from "./components/PostsFilter/index.jsx";

export default function App() {
  return (
    <main>
      <ShapesRowInMobile />

      <Hero />

      <PostsFilter />
    </main>
  );
}
