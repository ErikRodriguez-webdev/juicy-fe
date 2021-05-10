// stylesheet
import "../index.css";

export default function BenefitCards(props) {
  const { id, title, texts, image, imageW, imageH, imageAlt } = props.data;
  let i = 1;
  return (
    <>
      {/* Even cards are displayed with image on left first
    Odd cards are displayed with text on left first*/}
      {id % 2 === 0 ? (
        <div className="benefitCard">
          <div className="textCont">
            <h4 className="title">{title}</h4>
            <ul>
              {texts.map((text) => (
                <li key={i++}>{text}</li>
              ))}
            </ul>
          </div>
          <img
            className="benefitImage rightToLeft"
            src={image}
            style={{ width: imageW, height: imageH }}
            alt={imageAlt}
          />
        </div>
      ) : (
        <div className="benefitCard">
          <img
            className="benefitImage leftToRight"
            src={image}
            style={{ width: imageW, height: imageH }}
            alt={imageAlt}
          />
          <div className="textCont">
            <h4 className="title">{title}</h4>
            <ul>
              {texts.map((text) => (
                <li key={i++}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
