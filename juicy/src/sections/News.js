import { useEffect, useRef } from "react";
// components
import NewsCards from "../components/NewsCards.js";
// data structure
import { ndata } from "../utils/structures/NewsStructure.js";
// assets
import news1 from "../assets/videos/juicy_news_1_by_KoolShooters_from_Pexels.mp4";
import news2 from "../assets/videos/juicy_news_2_by_KoolShooters_from_Pexels.mp4";
// scroll animation
import gsap, { Bounce } from "gsap";
// stylesheet
import "../index.css";

export default function News() {
  // const videoRef = useRef(null);

  const newsContTl = gsap.timeline();

  useEffect(() => {
    // news articles reveal animation
    newsContTl.staggerFrom(
      ".newsCard",
      3,
      {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".news",
          start: "top+=25% center",
          end: "+=5% top",
          markers: true,
          scrub: 2,
        },
      },
      1
    );
  }, [newsContTl]);
  return (
    <section className="news">
      <div className="title">
        <h3>Juicy News</h3>
      </div>

      <div className="videoCenter">
        <video loop autoPlay muted width="500px" height="600px">
          <source src={news1} type="video/mp4" />
          Browser does not support this video.
        </video>
      </div>

      <div className="newsGrid">
        {ndata.map((newsObj) => (
          <NewsCards key={newsObj.id} data={newsObj} />
        ))}
      </div>
      {/* <div className="videoCenter">
        <video loop autoPlay muted width="500px" height="600px">
          <source src={news2} type="video/mp4" />
          Browser does not support this video.
        </video>
      </div> */}
    </section>
  );
}
