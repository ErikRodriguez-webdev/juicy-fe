// sections
import Home from "./sections/Home.js";
import Benefit from "./sections/Benefit.js";
import Menu from "./sections/Menu.js";
import Plan from "./sections/Plan.js";
import Challenge from "./sections/Challenge.js";
import News from "./sections/News.js";
import Credit from "./sections/Credit.js";
// stylesheet
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Home />

      <div className="bg">
        <Benefit />
        <Menu />
        <Plan />
        <Challenge />
        <News />
        <Credit />
      </div>
    </div>
  );
}
