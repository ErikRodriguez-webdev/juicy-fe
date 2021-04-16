import "../index.css";

export default function MenuCards(props) {
  const { text, image, imageW, imageH, imageAlt } = props.data;
  return (
    <div className="menuCard">
      <img
        src={image}
        style={{ width: imageW, height: imageH }}
        alt={imageAlt}
      />
      <p>{text}</p>
    </div>
  );
}
