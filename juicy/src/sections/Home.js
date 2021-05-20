import { useEffect, useRef } from "react";
// assets
import hero1 from "../assets/images/juicy_hero_2_by_AleksandarPasaric_from_Pexels.jpeg";
import downArrow from "../assets/icons/down_arrow.png";
// animation
import gsap, { Power4 } from "gsap";
// stylesheet
import "../index.css";

export default function Home() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const scrollRef = useRef(null);

  // timeline for home section
  const tl = gsap.timeline();

  useEffect(() => {
    // hero text animation
    tl.from(textRef.current, {
      autoAlpha: 0,
      y: "+25",
      delay: 0.5,
      duration: 1,
    });
    // hero images animation
    tl.from(
      imageRef.current,
      { autoAlpha: 0, y: "-25", delay: 0.5, duration: 1 },
      "-= 1.5"
    );
    // scroll image animation
    tl.from(scrollRef.current, {
      autoAlpha: 0,
      y: "-50",
      yoyo: true,
      ease: Power4,
      repeat: 6,
    });
  }, [tl]);

  return (
    <section className="home">
      <header>
        <h1>JUICY</h1>
      </header>

      <div className="homeCont">
        <div className="hero">
          <div className="heroText" ref={textRef}>
            <h2>
              Fresh fruit products.
              <br />
              Shipped to you.
              <br />
              Every week.
            </h2>
          </div>

          <div className="heroImage" ref={imageRef}>
            <img src={hero1} alt="banana fruit" />
          </div>
        </div>

        <div className="botCont" ref={scrollRef}>
          <p>Scroll</p>
          <img src={downArrow} alt="down arrow" />
        </div>
      </div>
    </section>
  );
}
