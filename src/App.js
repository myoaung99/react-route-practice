import react, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AllQuotes = react.lazy(() => import("./screens/AllQuotes"));
const QuoteDetail = react.lazy(() => import("./screens/QuoteDetail"));
const AddQuote = react.lazy(() => import("./screens/AddQuote"));
const NotFound = react.lazy(() => import("./screens/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<AllQuotes />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
          <Route path="/new-quote" element={<AddQuote />} />
        </Routes>{" "}
      </Suspense>
    </Layout>
  );
}

export default App;
