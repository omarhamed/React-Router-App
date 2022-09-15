import React, { useReducer } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetails from "./pages/QuoteDetails";

const initialState = {
  DUMMY_QUOTES: [
    { id: 1, author: "Omar Hamed", text: "Learning React is fun!" },
    { id: 2, author: "Ahmed Hamed", text: "Programming is amazing!" },
  ],
};

const reducer = (state, { type, value }) => {
  switch (type) {
    case "ADD_QUOTE":
      return { ...state, DUMMY_QUOTES: [...state.DUMMY_QUOTES, value] };
    default:
      return state;
  }
};

export const quotesContext = React.createContext();
function App() {
  const [quotes, dispatch] = useReducer(reducer, initialState);
  const addQuote = (newQuote) => {
    dispatch({ type: "ADD_QUOTE", value: newQuote });
  };
  return (
    <quotesContext.Provider value={quotes.DUMMY_QUOTES}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetails />
          </Route>
          <Route path="/new-quote">
            <NewQuote onAddNewQuote={addQuote} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </quotesContext.Provider>
  );
}

export default App;
