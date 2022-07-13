import React from "react";
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

function PostsCollection() {
  return (
    <section id="posts-collection">
      <ul>
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
    </section>
  );
}

export default PostsCollection;
