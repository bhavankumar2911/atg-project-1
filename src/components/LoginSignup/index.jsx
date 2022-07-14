import React from "react";
import "./styles.css";
import Close from "./assets/close.png";
import CloseWhite from "./assets/close-white.png";
import Eye from "./assets/eye.png";
import Google from "./assets/google.png";
import FB from "./assets/fb.png";
import Illustration from "./assets/atg_illustration.svg";

function LoginSignup({ isLogin, setIsLogin, setShowLoginModal }) {
  return (
    <div
      id="login-signup-main"
      className="d-flex flex-column justify-content-end justify-content-lg-center align-items-lg-center"
    >
      <span
        className="d-none d-lg-flex justify-content-end"
        style={{ width: "775px" }}
      >
        <img
          src={CloseWhite}
          alt="close icon"
          id="close-btn-lg"
          onClick={(e) => setShowLoginModal(false)}
        />
      </span>
      <div className="bg-white">
        <div
          id="flash-message"
          className="d-none d-lg-block"
          style={{ backgroundColor: "#EFFFF4" }}
        >
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center justify-content-between">
              <h2 id="form-title">
                {isLogin ? "Welcome Back!" : "Create Account"}
              </h2>
              <img
                className="d-lg-none"
                src={Close}
                alt="times icon"
                onClick={(e) => setShowLoginModal(false)}
              />
            </div>
            {/* for signup form */}
            {!isLogin && (
              <form>
                <div className="row mx-auto">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="First Name"
                    className="col"
                  />
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last Name"
                    className="col"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100"
                  style={{
                    borderRadius: "0",
                  }}
                />
                <div className="p-0 rounded-0 position-relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-100"
                  />
                  <img
                    src={Eye}
                    alt="hide icon"
                    id="password-hide-icon"
                    className="position-absolute"
                  />
                </div>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  className="rounded-bottom w-100"
                  placeholder="Confirm Password"
                  style={{
                    borderBottom: "1px solid #d9d9db",
                  }}
                />
              </form>
            )}

            {/* for login form */}
            {isLogin && (
              <form>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100"
                  style={{
                    borderRight: "1px solid #d9d9db",
                    borderTopRightRadius: "0.25rem",
                  }}
                />
                <div className="p-0 rounded-0 position-relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-100 rounded-bottom"
                    style={{ borderBottom: "1px solid #d9d9db" }}
                  />
                  <img
                    src={Eye}
                    alt="hide icon"
                    id="password-hide-icon"
                    className="position-absolute"
                  />
                </div>
              </form>
            )}

            {/* action section */}
            <div className="d-flex align-items-center justify-content-between d-lg-block">
              <button
                type="submit"
                className="btn btn-primary action-section-button"
                onClick={(e) => setShowLoginModal(false)}
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
              <span
                onClick={(e) => setIsLogin(isLogin ? false : true)}
                className="d-lg-none"
              >
                or, {isLogin ? "Create Account" : "Sign In"}
              </span>
            </div>

            {/* oauth section */}
            <div style={{ marginTop: "22px" }}>
              <button className="d-flex align-items-center justify-content-center btn btn-block btn-outline-secondary text-black w-100 oauth-button">
                <img src={FB} alt="facebook icon" />
                {isLogin ? "Sign in with Facebook" : "Sign up with Facebook"}
              </button>

              <button className="d-flex align-items-center justify-content-center btn btn-block btn-outline-secondary text-black w-100 oauth-button">
                <img src={Google} alt="google icon" />
                {isLogin ? "Sign in with Google" : "Sign up with Google"}
              </button>
            </div>

            {/* privacy policy */}
            {!isLogin && (
              <p id="meta-text" className="d-lg-none">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            )}

            {isLogin && (
              <a href="#" id="meta-text" style={{ fontWeight: "500" }}>
                Forgot password?
              </a>
            )}
          </div>
          <div className="col d-none d-lg-flex flex-column align-items-end justify-content-between">
            <p
              style={{
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "17px",
                textAlign: "right",
                color: "#3D3D3D",
              }}
              onClick={(e) => setIsLogin(isLogin ? false : true)}
            >
              {isLogin ? (
                <span>
                  Don’t have an account yet?
                  <b
                    style={{
                      color: "#2F6CE5",
                      display: "inline-block",
                      marginLeft: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Create new for free!
                  </b>
                </span>
              ) : (
                <span>
                  Already have an account?
                  <b
                    style={{
                      color: "#2F6CE5",
                      display: "inline-block",
                      marginLeft: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Sign In
                  </b>
                </span>
              )}
            </p>
            <img src={Illustration} alt="ATG illustration" />
            {!isLogin && (
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                  textAlign: "right",
                  letterSpacing: "-0.008em",
                  color: "#000000",
                  opacity: "0.6",
                }}
              >
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
