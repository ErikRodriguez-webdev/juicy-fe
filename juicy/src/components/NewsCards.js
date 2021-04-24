export default function NewsCards(props) {
  const { title, articleLink, newsImage } = props.data;
  return (
    <div className="newsCard">
      <a href={articleLink} target="_blank" rel="noreferrer">
        <div className="newsBg" style={{ backgroundImage: newsImage }}>
          <h4>{title}</h4>
        </div>
      </a>
    </div>
  );
}
