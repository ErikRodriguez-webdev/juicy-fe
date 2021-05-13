import "../index.css";

export default function MenuCards(props) {
  const { id, text, image, imageW, imageH, imageAlt } = props.data;
  return (
    <>
      <div className="menuCard">
        <span className="cardReveal" />
        <p>{`Step ${id}`}</p>
        <img
          src={image}
          style={{ width: imageW, height: imageH }}
          alt={imageAlt}
        />
        <p>{text}</p>
      </div>
    </>
  );
}
