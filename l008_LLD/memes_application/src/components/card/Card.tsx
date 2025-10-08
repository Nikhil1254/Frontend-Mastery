import "./card.css";
const Card = ({ url, title }) => {
  return (
    <div className="card-container">
      <div>
        <img className="poster" src={url} alt="meme-poster" />
      </div>
      <p className="title">{title}</p>
    </div>
  );
};

export default Card;
