import { useEffect } from "react";
// components
import BenefitCards from "../components/BenefitCards.js";
// data structure
import { bdata } from "../utils/structures/BenefitStructure.js";
// scroll animation
import gsap from "gsap";
// stylesheet
import "../index.css";

export default function Benefit() {
  // benefits section timeline
  const benefitsContTl = gsap.timeline();

  useEffect(() => {
    // image slide animation
    benefitsContTl.staggerFrom(
      ".leftToRight",
      3,
      {
        autoAlpha: 0,
        xPercent: -50,
        scrollTrigger: {
          trigger: "#benefitComponent",
          start: "top 60%",
          end: "top 5%",
          scrub: 2,
          // markers: true,
        },
      },
      1
    );
    benefitsContTl.staggerFrom(
      ".rightToLeft",
      3,
      {
        autoAlpha: 0,
        xPercent: 50,
        scrollTrigger: {
          trigger: "#benefitComponent",
          start: "top 60%",
          end: "top 5%",
          scrub: 2,
        },
      },
      1
    );

    // text fade in animation
    benefitsContTl.staggerFrom(
      ".textCont",
      1,
      {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#benefitComponent",
          start: "top 60%",
          end: "top 5%",
          scrub: 2,
        },
      },
      0.5
    );
  }, [benefitsContTl]);

  return (
    <section className="benefit" id="benefitComponent">
      <div className="title">
        <h3>Juicy Benefits</h3>
      </div>

      {bdata.map((groupObj) => (
        <BenefitCards key={groupObj.id} data={groupObj} />
      ))}
    </section>
  );
}
