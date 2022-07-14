import React, { useState } from "react";
import Thumbnail1 from "./assets/thumbnail1.png";
import Thumbnail2 from "./assets/thumbnail2.png";
import Thumbnail3 from "./assets/thumbnail3.png";
import Category1 from "./assets/category1.png";
import Category2 from "./assets/category2.png";
import Category3 from "./assets/category3.png";
import Category4 from "./assets/category4.png";
import User1 from "./assets/user1.png";
import User2 from "./assets/user2.png";
import User3 from "./assets/user3.png";
import User4 from "./assets/user4.png";
import Bag from "./assets/bag.png";
import Calender from "./assets/calender.png";
import Location from "./assets/location.png";
import Share from "./assets/share.png";
import Options from "./assets/options.png";
import "./styles.css";
import Times from "./assets/times.png";
import Edit from "./assets/edit.png";
import LocationDark from "./assets/location-dark.png";
import Thumbsup from "./assets/thumbsup.png";
import Leisure from "./assets/leisure.png";
import Activism from "./assets/activism.png";
import MBA from "./assets/mba.png";
import Philosophy from "./assets/philosophy.png";
import Info from "./assets/info.png";

const posts = [
  {
    thumbnail: Thumbnail1,
    category: "article",
    categoryIcon: Category1,
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    excerpt: "I’ve worked in UX for the better part of a decade. F..",
    author: "Sarthak Kamra",
    views: "1.4k",
    authorImage: User1,
  },
  {
    thumbnail: Thumbnail2,
    category: "education",
    categoryIcon: Category2,
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    excerpt: "I’ve worked in UX for the better part of a decade. F..",
    author: "Sarah West",
    views: "4.8k",
    authorImage: User2,
  },
  {
    thumbnail: Thumbnail3,
    category: "meetup",
    categoryIcon: Category3,
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    author: "Ronal Jones",
    views: "800",
    authorImage: User3,
  },
  {
    category: "job",
    categoryIcon: Category4,
    title: "Software Developer - II",
    author: "Joseph Gray",
    views: "1.7k",
    authorImage: User4,
  },
];

const groups = [
  { image: Leisure, group: "Leisure" },
  { image: Activism, group: "Activism" },
  { image: MBA, group: "MBA" },
  { image: Philosophy, group: "Philosophy" },
];

function PostsCollection({ isLoggedIn }) {
  const [location, setLocation] = useState("");

  return (
    <section
      id="posts-collection"
      className="row"
      style={{ overflow: "hidden", maxWidth: "100vw" }}
    >
      <ul className="col col-lg-6 offset-lg-1">
        {posts.map((post, index) => {
          const { category, categoryIcon, author, authorImage, views, title } =
            post;
          return (
            <li class="card rounded-0">
              {post.thumbnail ? (
                <img
                  class="card-img-top"
                  src={post.thumbnail}
                  alt="Card image cap"
                />
              ) : null}

              <div class="card-body">
                {/* category */}
                <div className="d-flex align-items-center justify-content-start post-category">
                  <img src={categoryIcon} alt={category} />
                  <span className="text-capitalize d-inline-block">
                    {category}
                  </span>
                </div>
                {/* title */}
                <div className="d-flex justify-content-between align-items-start post-title">
                  <h3>{title}</h3>
                  <img src={Options} alt="option icon" />
                </div>
                {/* content */}
                {!["meetup", "job"].includes(category) && (
                  <>
                    <p className="post-excerpt">{post.excerpt}</p>
                  </>
                )}

                {category == "meetup" && (
                  <>
                    <span className="call-to-action">
                      {/* info */}
                      <div className="row">
                        <div className="col">
                          <img src={Calender} alt="calender icon" />
                          <p className="d-inline-block details-text">
                            Fri, 12 Oct, 2018
                          </p>
                        </div>
                        <div className="col">
                          <img src={Location} alt="location icon" />
                          <p className="d-inline-block details-text">
                            Ahmedabad, India
                          </p>
                        </div>
                      </div>

                      {/* call to action */}
                      <button className="btn btn-outline-light btn-block">
                        <span className="meetup-cta">Visit Website</span>
                      </button>
                    </span>
                  </>
                )}

                {category == "job" && (
                  <>
                    <span className="call-to-action">
                      {/* info */}
                      <div className="row">
                        <div className="col">
                          <img src={Bag} alt="bag icon" />
                          <p className="d-inline-block details-text">
                            Innovaccer Analytic...
                          </p>
                        </div>
                        <div className="col">
                          <img src={Location} alt="location icon" />
                          <p className="d-inline-block details-text">
                            Noida, India
                          </p>
                        </div>
                      </div>

                      {/* call to action */}
                      <button className="btn btn-outline-light btn-block">
                        <span className="job-cta">Apply on Timesjobs</span>
                      </button>
                    </span>
                  </>
                )}

                {/* author */}
                <div className="d-flex align-items-center justify-content-between post-bottom">
                  <span className="d-flex">
                    <img
                      src={authorImage}
                      alt={author}
                      className="author-image"
                    />
                    <span className="d-flex flex-column justify-content-center">
                      <span className="author-name">{author}</span>
                      <span className="post-views">{views} views</span>
                    </span>
                  </span>

                  <button className="btn btn-light d-flex align-items-center">
                    <img src={Share} alt="share icon" className="share-icon" />
                    Share
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <aside className="d-none d-lg-flex col-lg-4 flex-column align-items-end">
        <div>
          <form
            style={{
              borderBottom: "0.4px solid #B8B8B8",
              paddingBottom: "15px",
              width: "250px",
            }}
            className="d-flex align-items-center justify-content-between"
          >
            <img src={LocationDark} alt="location symbol" />
            <input
              id="location-input"
              type="text"
              className="border-0"
              style={{ outline: "0", padding: "0 10px" }}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            {location ? (
              <img
                src={Times}
                alt="times symbol"
                onClick={(e) => setLocation("")}
              />
            ) : (
              <img src={Edit} alt="edit symbol" />
            )}
          </form>
          <p
            className="text-center"
            style={{
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "16px",
              color: "#000000",
              opacity: "0.5",
              maxWidth: "250px",
              margin: "32px 0 54px 0",
            }}
          >
            <span>
              <img src={Info} alt="info icon" />
            </span>{" "}
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
        {isLoggedIn ? (
          <div>
            <h4>
              <img src={Thumbsup} alt="thumbsup symbol" />{" "}
              <span
                className="d-inline-block"
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "18px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#000000",
                  marginBottom: "24px",
                }}
              >
                RECOMMENED GROUPS
              </span>
            </h4>
            <ul style={{ listStyle: "none", width: "250px" }}>
              {groups.map((group) => (
                <li
                  className="d-flex align-items-center justify-content-between"
                  style={{ boxShadow: "none", marginBottom: "22px" }}
                >
                  <span>
                    <img
                      src={group.image}
                      alt={group.group}
                      style={{ marginRight: "12px" }}
                    />
                    <span className="group-name">{group.group}</span>
                  </span>
                  <button
                    className="btn btn-sm follow-btn"
                    style={{
                      backgroundColor: "#EDEEF0",
                      borderRadius: "50px",
                      padding: "4px 12px",
                    }}
                  >
                    Follow
                  </button>
                </li>
              ))}
              <a
                href="#"
                className="d-block"
                style={{
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "16px",
                  textAlign: "right",
                  color: "#2F6CE5",
                  float: "right",
                  textDecoration: "none",
                  marginTop: "64px",
                }}
              >
                See More...
              </a>
            </ul>
          </div>
        ) : null}
      </aside>
    </section>
  );
}

export default PostsCollection;
