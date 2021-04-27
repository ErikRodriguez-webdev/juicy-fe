// components
import BenefitCards from "../components/BenefitCards.js";
// data structure
import { bdata } from "../utils/structures/BenefitStructure.js";
// stylesheet
import "../index.css";

export default function Benefit() {
  return (
    <section className="benefit">
      <div className="title">
        <h3>Juicy Benefits</h3>
      </div>

      {bdata.map((groupObj) => (
        <BenefitCards key={groupObj.id} data={groupObj} />
      ))}
    </section>
  );
}
