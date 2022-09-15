import React, { useContext } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { quotesContext } from "../App";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetails = () => {
  const params = useParams();
  const match = useRouteMatch();
  const quotes = useContext(quotesContext);
  const quote = quotes.find((quote) => quote.id === parseInt(params.quoteId));

  if (!quote) {
    return <p>No quote Found!</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
