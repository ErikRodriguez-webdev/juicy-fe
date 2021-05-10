// components
import MenuCards from "../components/MenuCards.js";
import VideoCards from "../components/VideoCards.js";
// data structure
import { mdata } from "../utils/structures/MenuStructure.js";
import { vdata } from "../utils/structures/VideoStructure.js";
// assets
import shake from "../assets/videos/juicy_shake_by_PolinaTankilevitch_from_Pexels.mp4";
// stylesheet
import "../index.css";

export default function Menu() {
  return (
    <section className="menu" id="menuComponent">
      <div className="title">
        <h3>Juicy Menu</h3>
      </div>

      <div className="menuMain">
        <div className="leftCont">
          <p>
            We have a very dedicated team here at Juicy tasked to find new and
            exciting flavors for all our customers. At Juicy, we know how boring
            one flavor of juice can be. We solve this by rotating our juice menu
            every week and introduce new juice flavors as well. So take the next
            step in powering up your lifestyle, with one juicy drink at a time.
          </p>
          <video loop autoPlay muted width="301px" height="400px">
            <source src={shake} type="video/mp4" />
            Browser does not support this video.
          </video>
        </div>
        <div className="rightCont">
          {mdata.map((iconObj) => (
            <MenuCards key={iconObj.id} data={iconObj} />
          ))}
        </div>
      </div>

      <div className="videoGrid">
        {vdata.map((videoObj) => (
          <VideoCards key={videoObj.id} data={videoObj} />
        ))}
      </div>
    </section>
  );
}
