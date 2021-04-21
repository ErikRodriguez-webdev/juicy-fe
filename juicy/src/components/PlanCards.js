import "../index.css";

export default function PlanCards(props) {
  const { title1, title2, price, bgColor } = props.data;
  return (
    <div className="planCard">
      <div className="planBg" style={{ background: bgColor }}>
        <h5>{title1}</h5>
        <h6>{price}</h6>
        <h5>{title2}</h5>
      </div>
    </div>
  );
}
