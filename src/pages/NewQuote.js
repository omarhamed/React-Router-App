import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = (props) => {
  const history = useHistory();
  const addQuoteHandler = (newQuote) => {
    props.onAddNewQuote(newQuote);
    history.push("/quotes");
  };
  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default NewQuote;
