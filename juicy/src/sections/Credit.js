// components
import CreditsCard from "../components/CreditsCard.js";
// data structure
import { cdata } from "../utils/structures/CreditsStructure.js";
// assets
import water1 from "../assets/videos/juicy_water_1_by_KellyLacy_from_Pexels.mp4";
// stylesheet
import "../index.css";

export default function Credit() {
  return (
    <footer>
      <div className="creditsCont">
        <p>Designed and Created by:</p>
        <p>Erik Rodriguez</p>
        <br />
        <p>Images and Video from Pexel Creators by:</p>
        {cdata.map((creditObj) => (
          <CreditsCard key={creditObj.id} data={creditObj} />
        ))}
      </div>

      <div className="videoCenter">
        <video muted playsInline autoPlay loop width="40%">
          <source src={water1} type="video/mp4" />
          Browser does not support this video.
        </video>
        <video
          muted
          playsInline
          autoPlay
          loop
          width="40%"
          className="invertVideo"
        >
          <source src={water1} type="video/mp4" />
          Browser does not support this video.
        </video>
      </div>
    </footer>
  );
}
