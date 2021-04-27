// components
import PlanCards from "../components/PlanCards.js";
// data structure
import { pdata } from "../utils/structures/PlanStructure.js";
// stylesheet
import "../index.css";

export default function Plan() {
  return (
    <section className="plans">
      <div>
        <h3 className="title">Juicy Plans</h3>
      </div>

      {pdata.map((planObj) => (
        <PlanCards key={planObj.id} data={planObj} />
      ))}
    </section>
  );
}
