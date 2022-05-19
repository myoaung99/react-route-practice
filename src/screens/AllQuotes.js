import React, { useEffect } from "react";
import QuoteList from "./../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "./../components/hooks/use-http";
import { getAllQuotes } from "./../components/lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "Myo", text: "Learning React is Fun!" },
  { id: "q2", author: "Myo Myint Aung", text: "Learning React is Great!" },
];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest(getAllQuotes);
  }, [sendRequest]);

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

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
