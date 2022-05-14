import React from "react";
import QuoteList from "./../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Myo", text: "Learning React is Fun!" },
  { id: "q2", author: "Myo Myint Aung", text: "Learning React is Great!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
