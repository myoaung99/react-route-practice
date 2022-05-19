import { useState, useEffect } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getAllComments } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "../comments/CommentsList";

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const params = useParams();

  const { quoteId } = params.quoteId;

  const {
    sendRequest,
    error,
    status,
    data: loadedComments,
  } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const addCommentHandler = () => {};

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && (loadedComments || loadedComments.length > 0)) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments were added yet!</p>;
  }

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm onAddComment={addCommentHandler} quoteId={quoteId} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
