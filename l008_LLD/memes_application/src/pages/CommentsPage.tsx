import CommentList from "../components/comments/commentList/CommentList";
import { comments } from "../components/comments/commentList/data";

export default function CommentsPage() {
  return <CommentList paddingLeft={0} comments={comments} />;
}
