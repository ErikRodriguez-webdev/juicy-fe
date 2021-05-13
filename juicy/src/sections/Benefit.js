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
  const tl = gsap.timeline({
    scrollTrigger: {
      start: "top+=20% 90%",
      end: "+=5% 50%",
      scrub: 1,
    },
  });

  useEffect(() => {
    // image slide animation
    tl.from(".leftToRight", {
      autoAlpha: 0,
      xPercent: -50,
      duration: 2,
    });
    tl.from(
      ".rightToLeft",
      { autoAlpha: 0, xPercent: 50, duration: 2 },
      "-=2.0"
    );

    // text fade in animation
    tl.from(".textCont", { autoAlpha: 0 });
  }, [tl]);

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
