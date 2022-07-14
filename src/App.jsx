import React, { useState } from "react";
import "./main.css";
import ShapesRowInMobile from "./components/ShapesRowInMobile/index.jsx";
import Hero from "./components/Hero/index.jsx";
import PostsFilter from "./components/PostsFilter/index.jsx";
import PostsCollection from "./components/PostsCollection/index.jsx";
import Edit from "./edit.png";
import LoginSignup from "./components/LoginSignup/index.jsx";

export default function App() {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main>
      <ShapesRowInMobile />

      <Hero setShowLoginModal={setShowLoginModal} />

      <PostsFilter />

      <PostsCollection />

      {showLoginModal && (
        <LoginSignup
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          setShowLoginModal={setShowLoginModal}
        />
      )}

      {!showLoginModal && (
        <button
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{
            border: "none",
            height: "54px",
            width: "54px",
            background: "linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%)",
            boxShadow:
              "0px 2px 4px rgba(0, 0, 0, 0.18), 0px 0px 2px rgba(0, 0, 0, 0.08)",
            position: "fixed",
            right: "18px",
            bottom: "18px",
            textAlign: "center",
          }}
          onClick={(e) => setShowLoginModal(true)}
        >
          <img src={Edit} alt="edit symbol" />
        </button>
      )}
    </main>
  );
}
