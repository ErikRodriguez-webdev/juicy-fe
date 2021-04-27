import "../index.css";

export default function CreditsCard(props) {
  const { name, profileLink } = props.data;
  return (
    <a
      href={profileLink}
      className="creditsCard"
      target="_blank"
      rel="noreferrer"
    >
      <p>{name}</p>
    </a>
  );
}
