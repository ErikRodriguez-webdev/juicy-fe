import { useEffect, useRef } from "react";
// scroll animation
import gsap from "gsap";
// stylesheet
import "../index.css";

export default function Challenge() {
  const sectionRef = useRef(null);

  const challengeContTl = gsap.timeline();

  useEffect(() => {
    // section parallax animation
    challengeContTl.to(sectionRef.current, {
      scrollTrigger: {
        trigger: ".challenge",
        start: "top center",
        pin: true,
        pinSpacing: true,
      },
    });
  }, [challengeContTl]);

  return (
    <section className="challenge" ref={sectionRef}>
      <div className="title">
        <h3>Juicy Challenge</h3>
      </div>

      <div className="challengeText">
        <p>
          You can still start today! It is never to late to start. We challenge
          you to put down that carbonated beverage and try these alternatives:
          Hot Tea, Cold Tea and Infused water.
        </p>
      </div>
    </section>
  );
}
