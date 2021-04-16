// components
import BenefitCards from "./components/BenefitCards.js";
import MenuCards from "./components/MenuCards.js";
// data structure
import { bdata } from "./utils/structures/BenefitStructure.js";
import { mdata } from "./utils/structures/MenuStructure.js";
// stylesheet
import "./index.css";
// assets
import hero1 from "./assets/images/juicy_hero_2_by_AleksandarPasaric_from_Pexels.jpeg";
import hero2 from "./assets/images/juicy_hero_1_by_AleksandarPasaric_from_Pexels.jpeg";
import scrollDown from "./assets/icons/scroll_down.png";
import shake from "./assets/videos/juicy_shake_by_PolinaTankilevitch_from_Pexels.mp4";

function App() {
  return (
    <div className="app">
      <section className="home">
        <header>
          <h1>JUICY</h1>
        </header>

        <div className="hero">
          <div className="heroText">
            <h2>
              Fresh fruit products.
              <br />
              Shipped to you.
              <br />
              Every week.
            </h2>
          </div>

          <div className="heroImages">
            <img src={hero1} alt="banana fruit" />
            <img src={hero2} alt="dragon fruit" />
          </div>
        </div>

        <div className="botCont">
          <img src={scrollDown} alt="scroll down" />
        </div>
      </section>

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
          <div>
            <h3 className="title">Juicy Menu</h3>
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
        </section>
      </div>
    </div>
  );
}

export default App;
