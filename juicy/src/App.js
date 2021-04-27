// sections
import Home from "./sections/Home.js";
// components
import BenefitCards from "./components/BenefitCards.js";
import MenuCards from "./components/MenuCards.js";
import VideoCards from "./components/VideoCards.js";
import PlanCards from "./components/PlanCards.js";
import NewsCards from "./components/NewsCards.js";
import CreditsCard from "./components/CreditsCard.js";
// data structure
import { bdata } from "./utils/structures/BenefitStructure.js";
import { mdata } from "./utils/structures/MenuStructure.js";
import { vdata } from "./utils/structures/VideoStructure.js";
import { pdata } from "./utils/structures/PlanStructure.js";
import { ndata } from "./utils/structures/NewsStructure.js";
import { cdata } from "./utils/structures/CreditsStructure.js";
// stylesheet
import "./index.css";
// assets
import shake from "./assets/videos/juicy_shake_by_PolinaTankilevitch_from_Pexels.mp4";
import news1 from "./assets/videos/juicy_news_1_by_KoolShooters_from_Pexels.mp4";
import news2 from "./assets/videos/juicy_news_2_by_KoolShooters_from_Pexels.mp4";
import water1 from "./assets/videos/juicy_water_1_by_KellyLacy_from_Pexels.mp4";

export default function App() {
  return (
    <div className="app">
      <Home />

      <div className="bg">
        <section className="benefit">
          <div className="title">
            <h3>Juicy Benefits</h3>
          </div>

          {bdata.map((groupObj) => (
            <BenefitCards key={groupObj.id} data={groupObj} />
          ))}
        </section>

        <section className="menu">
          <div className="title">
            <h3>Juicy Menu</h3>
          </div>

          <div className="menuMain">
            <div className="leftCont">
              <p>
                We have a very dedicated team here at Juicy tasked to find new
                and exciting flavors for all our customers. At Juicy, we know
                how boring one flavor of juice can be. We solve this by rotating
                our juice menu every week and introduce new juice flavors as
                well. So take the next step in powering up your lifestyle, with
                one juicy drink at a time.
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

        <section className="plans">
          <div>
            <h3 className="title">Juicy Plans</h3>
          </div>

          {pdata.map((planObj) => (
            <PlanCards key={planObj.id} data={planObj} />
          ))}
        </section>

        <section className="challenge">
          <div className="title">
            <h3>Juicy Challenge</h3>
          </div>

          <div className="challengeText">
            <p>
              You can still start today! It is never to late to start. We
              challenge you to put down that carbonated beverage and try these
              alternatives: Hot Tea, Cold Tea and Infused water.
            </p>
          </div>
        </section>

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

          {ndata.map((newsObj) => (
            <NewsCards key={newsObj.id} data={newsObj} />
          ))}
          <div className="videoCenter">
            <video loop autoPlay muted width="500px" height="600px">
              <source src={news2} type="video/mp4" />
              Browser does not support this video.
            </video>
          </div>
        </section>

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
            <video loop autoPlay muted width="33%" className="invertVideo">
              <source src={water1} type="video/mp4" />
              Browser does not support this video.
            </video>
            <video loop autoPlay muted width="33%">
              <source src={water1} type="video/mp4" />
              Browser does not support this video.
            </video>
            <video loop autoPlay muted width="33%" className="invertVideo">
              <source src={water1} type="video/mp4" />
              Browser does not support this video.
            </video>
          </div>
        </footer>
      </div>
    </div>
  );
}
