// components
import NewsCards from "../components/NewsCards.js";
// data structure
import { ndata } from "../utils/structures/NewsStructure.js";
// assets
import news1 from "../assets/videos/juicy_news_1_by_KoolShooters_from_Pexels.mp4";
import news2 from "../assets/videos/juicy_news_2_by_KoolShooters_from_Pexels.mp4";
// stylesheet
import "../index.css";

export default function News() {
  return (
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
  );
}
