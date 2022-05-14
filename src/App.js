import AllQuotes from "./screens/AllQuotes";
import AddQuote from "./screens/AddQuote";
import QuoteDetail from "./screens/QuoteDetail";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<AllQuotes />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="/new-quote" element={<AddQuote />} />
      </Routes>
    </Layout>
  );
}

export default App;
