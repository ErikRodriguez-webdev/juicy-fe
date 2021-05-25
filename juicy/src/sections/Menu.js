import { useEffect, useRef } from "react";
// components
import MenuCards from "../components/MenuCards.js";
// data structure
import { mdata } from "../utils/structures/MenuStructure.js";
// import { vdata } from "../utils/structures/VideoStructure.js";
// assets
import shake from "../assets/videos/juicy_shake_by_PolinaTankilevitch_from_Pexels.mp4";
// scroll animation
import gsap, { Power1, Power2, Power4 } from "gsap";
// stylesheet
import "../index.css";

export default function Menu() {
  const textRef = useRef(null);
  const videoRef = useRef(null);

  // scroll animation timeline
  const menuContTl = gsap.timeline();

  useEffect(() => {
    // image and text slide animation
    menuContTl
      .from(textRef.current, {
        autoAlpha: 0,
        xPercent: 75,
        ease: Power1,
        scrollTrigger: {
          trigger: "#menuComponent",
          start: "top center",
          end: "top 15%",
          scrub: 2,
        },
      })
      .from(
        videoRef.current,
        {
          autoAlpha: 0,
          xPercent: -75,
          ease: Power4,
          scrollTrigger: {
            trigger: "#menuComponent",
            start: "top center",
            end: "top 15%",
            scrub: 2,
          },
        },
        "-=0.5"
      );

    // menu cards reveal animation
    menuContTl.staggerTo(
      ".cardReveal",
      1.5,
      {
        yPercent: "100",
        ease: Power2.easeOut,
        scrollTrigger: {
          trigger: ".stepsGrid",
          start: "top-=10% 90%",
          end: "+=5% 50%",
          scrub: 2,
        },
      },
      0.15
    );
  }, [menuContTl]);

  return (
    <section className="menu" id="menuComponent">
      <div className="title">
        <h3>Juicy Menu</h3>
      </div>

      <div className="menuMain">
        <div className="menuCont">
          <p ref={textRef}>
            We have a very dedicated team here at Juicy tasked to find new and
            exciting flavors for all our customers. At Juicy, we know how boring
            one flavor of juice can be. We solve this by rotating our juice menu
            every week and introduce new juice flavors as well. So take the next
            step in powering up your lifestyle, with one juicy drink at a time.
          </p>
          <video
            muted
            playsInline
            autoPlay
            loop
            width="301px"
            height="400px"
            ref={videoRef}
          >
            <source src={shake} type="video/mp4" />
            Browser does not support this video.
          </video>
        </div>
      </div>

      <div className="stepsGrid">
        {mdata.map((iconObj) => (
          <MenuCards key={iconObj.id} data={iconObj} />
        ))}
      </div>
    </section>
  );
}
