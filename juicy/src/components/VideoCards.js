import "../index.css";

export default function VideoCards(props) {
  const { vid } = props.data;
  return (
    <div className="videoCard">
      <video loop autoPlay muted width="300px" height="300px">
        <source src={vid} type="video/mp4" />
        Browser does not support this video.
      </video>
    </div>
  );
}
