import QuoteList from "../components/quotes/QuoteList";
import { quotesContext } from "../App";
import { useContext } from "react";

const AllQuotes = () => {
  const quotes = useContext(quotesContext);
  return (
    <div>
      <QuoteList quotes={quotes} />
    </div>
  );
};

export default AllQuotes;
