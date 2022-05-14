import React from "react";
import Comments from "./../components/comments/Comments";
import { useParams, Routes, Route, Link } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>This is Quote detail screen</h1>
      <p>{params.quoteId}</p>

      <Link to="comments">btn</Link>

      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </>
  );
};

export default QuoteDetail;
