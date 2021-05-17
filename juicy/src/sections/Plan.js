import { useEffect } from "react";
// components
import PlanCards from "../components/PlanCards.js";
// data structure
import { pdata } from "../utils/structures/PlanStructure.js";
// scroll animation
import gsap, { Power3 } from "gsap";
// stylesheet
import "../index.css";

export default function Plan() {
  const planContTL = gsap.timeline();

  useEffect(() => {
    // grow from right animation
    planContTL
      .to(".planCard", {
        autoAlpha: 1,
        immediateRender: false,
        scrollTrigger: {
          trigger: "#planComponent",
          start: "top 55%",
          end: "top 25%",
          scrub: 2,
        },
      })
      .staggerFrom(
        ".planCard",
        1,
        {
          width: "0%",
          ease: Power3,
          scrollTrigger: {
            trigger: "#planComponent",
            start: "top 55%",
            end: "top 25%",
            scrub: 2,
          },
        },
        0.25,
        "-= 0.5"
      );
  }, [planContTL]);

  return (
    <section className="plans" id="planComponent">
      <div>
        <h3 className="title">Juicy Plans</h3>
      </div>

      {pdata.map((planObj) => (
        <PlanCards key={planObj.id} data={planObj} />
      ))}
    </section>
  );
}
