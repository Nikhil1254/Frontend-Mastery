import "./style.css";

interface Props {
  username: string;
  comment: string;
}

export default function Comment({ username, comment }: Props) {
  return (
    <div className="comment-container">
      <span className="comment-username">👤 {username}</span>
      <span className="comment-body">{comment}</span>
    </div>
  );
}
