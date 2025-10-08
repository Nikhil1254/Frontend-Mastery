import Comment from "../comment/Comment";
import "./style.css";

interface Comment {
  username: string;
  comment: string;
  replies?: Comment[];
}

interface Props {
  comments: Comment[];
}

export default function CommentList({ comments }: Props) {
  return comments.map((comment) => {
    return (
      <div className="comment-list-container">
        <div className="comment">
          <div className="horizontal-dash"></div>
          <Comment comment={comment.comment} username={comment.username} />
        </div>
        {comment.replies && <CommentList comments={comment.replies} />}
      </div>
    );
  });
}
