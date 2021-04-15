// stylesheet
import "../index.css";

export default function BenefitCards(props) {
  const { title, texts, image, imageAlt } = props.data;
  return (
    <div>
      <div>
        <h4>{title}</h4>
        <ul>
          {texts.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
      </div>
      <img src={image} alt={imageAlt} />
    </div>
  );
}
