import "./index.css";
// assets
import hero1 from "./assets/images/juicy_hero_2_by_AleksandarPasaric_from_Pexels.jpeg";
import hero2 from "./assets/images/juicy_hero_1_by_AleksandarPasaric_from_Pexels.jpeg";
import scrollDown from "./assets/icons/scroll_down.png";

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
    </div>
  );
}

export default App;
