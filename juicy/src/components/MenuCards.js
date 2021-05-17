import "../index.css";

export default function MenuCards(props) {
  const { id, text, image, imageW, imageH, imageAlt } = props.data;
  return (
    <div className="menuCard">
      {/* Plain Object that moves to reveal card below */}
      <span className="cardReveal" />

      {/* Menu Card */}
      <p>{`Step ${id}`}</p>
      <img
        src={image}
        style={{ width: imageW, height: imageH }}
        alt={imageAlt}
      />
      <p>{text}</p>
    </div>
  );
}
