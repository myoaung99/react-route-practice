import React from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>This is Quote detail screen</h1>
      <p>{params.quoteId}</p>
    </>
  );
};

export default QuoteDetail;
