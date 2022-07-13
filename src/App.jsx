import React from "react";
import "./main.css";
import ShapesRowInMobile from "./components/ShapesRowInMobile/index.jsx";
import Hero from "./components/Hero/index.jsx";
import PostsFilter from "./components/PostsFilter/index.jsx";
import PostsCollection from "./components/PostsCollection/index.jsx";

export default function App() {
  return (
    <main>
      <ShapesRowInMobile />

      <Hero />

      <PostsFilter />

      <PostsCollection />
    </main>
  );
}
