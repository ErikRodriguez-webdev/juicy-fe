// sections
import Home from "./sections/Home.js";
import Benefit from "./sections/Benefit.js";
import Menu from "./sections/Menu.js";
import Plan from "./sections/Plan.js";
// components
import NewsCards from "./components/NewsCards.js";
import CreditsCard from "./components/CreditsCard.js";
// data structure
import { ndata } from "./utils/structures/NewsStructure.js";
import { cdata } from "./utils/structures/CreditsStructure.js";
// stylesheet
import "./index.css";
// assets
import news1 from "./assets/videos/juicy_news_1_by_KoolShooters_from_Pexels.mp4";
import news2 from "./assets/videos/juicy_news_2_by_KoolShooters_from_Pexels.mp4";
import water1 from "./assets/videos/juicy_water_1_by_KellyLacy_from_Pexels.mp4";

export default function App() {
  return (
    <div className="app">
      <Home />

      <div className="bg">
        <Benefit />

        <Menu />

        <Plan />

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
