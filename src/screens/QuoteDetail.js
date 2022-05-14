import React from "react";
import Comments from "./../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
import { useParams, Routes, Route } from "react-router-dom";

const DUMMY_QUOTES = [
  { id: "q1", author: "Myo", text: "Learning React is Fun!" },
  { id: "q2", author: "Myo Myint Aung", text: "Learning React is Great!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </>
  );
};

export default QuoteDetail;
