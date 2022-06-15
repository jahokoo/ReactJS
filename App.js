import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from "./routes/MovieDetail";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import TV from "./routes/TV";
import TvDetail from "./routes/TvDetail";

function App() {
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie/:id" element={<MovieDetail/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/tv" element={<TV/>}/>
      <Route path="/tv/:id" element={<TvDetail/>}/>
    </Routes>
  </Router>
)}

export default App;