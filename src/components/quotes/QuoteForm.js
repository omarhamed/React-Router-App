import { useContext, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import { quotesContext } from "../../App";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const quotes = useContext(quotesContext);
  const [enteringData, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    console.log(quotes);
    var lastIdNumber = quotes.length;
    props.onAddQuote({
      id: lastIdNumber + 1,
      author: enteredAuthor,
      text: enteredText,
    });
  }

  return (
    <>
      <Prompt
        when={enteringData}
        message={(location) =>
          `Are You Sure you want to leave this page, Data will be lost!`
        }
      />
      <Card>
        <form
          className={classes.form}
          onFocus={() => {
            setIsEntering(true);
          }}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button
              onClick={() => {
                setIsEntering(false);
              }}
              className="btn"
            >
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
