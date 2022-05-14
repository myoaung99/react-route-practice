import Home from "./screens/Home";
import AllQuotes from "./screens/AllQuotes";
import AddQuote from "./screens/AddQuote";
import QuoteDetail from "./screens/QuoteDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/quotes" element={<AllQuotes />} />
      <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
      <Route path="/new-quote" element={<AddQuote />} />
    </Routes>
  );
}

export default App;
