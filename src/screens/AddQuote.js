import React, { useEffect } from "react";
import QuoteForm from "./../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
import useHttp from "./../components/hooks/use-http";
import { addQuote } from "./../components/lib/api";

const AddQuote = () => {
  const navigate = useNavigate();

  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      // programtic navigation
      navigate("/quotes");
    }
  }, [status, navigate]);

  // form submit (add quote) handler
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default AddQuote;
