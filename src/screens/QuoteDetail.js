import React, { useEffect } from "react";
import Comments from "./../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
import { useParams, Routes, Route, Link } from "react-router-dom";

import useHttp from "./../components/hooks/use-http";
import { getSingleQuote } from "./../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
  { id: "q1", author: "Myo", text: "Learning React is Fun!" },
  { id: "q2", author: "Myo Myint Aung", text: "Learning React is Great!" },
];

const ShowCommentBtn = () => {
  return (
    <div className="centered">
      <Link className="btn--flat" to="comments">
        Load Comments
      </Link>
    </div>
  );
};

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    error,
    data: loadedQuote,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "error") {
    return <div className="centered focused">{error}</div>;
  }

  if (!loadedQuote.text) {
    return <p>No Quote Found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      <Routes>
        <Route path="" element={<ShowCommentBtn />} />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </>
  );
};

export default QuoteDetail;
