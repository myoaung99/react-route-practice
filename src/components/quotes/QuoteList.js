import { useEffect } from "react";
import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  // to navigate between pages
  const navigate = useNavigate();

  // to get url infomation
  const location = useLocation();

  console.log(location);

  // js build-in class for extracting query parameter
  const searchParams = new URLSearchParams(location.search);

  const isSortingAscending = searchParams.get("sort") === "asc";

  // sort function
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const sortingChangeHandler = () => {
    // navigate နဲ့ url ပြောင်းတိုင်း component re-evaluate ဖြစ်တယ်
    navigate("?sort=" + (isSortingAscending ? "desc" : "asc"));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingChangeHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>

      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
