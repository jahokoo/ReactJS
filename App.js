import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import styles from "./css/Movie.moduel.css"
import "swiper/css/bundle";
import Header from "./Header";

function App() {
  return (
  <Router>
    <Routes>
      <Route element={<Header/>}/>
      <Route path="/" element={<Home/>} />
      <Route path="/movie/:id" element={<Detail/>}/>
    </Routes>
  </Router>
)}

export default App;
