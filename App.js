import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Header from "./components/Header";
import useTitle from './hooks/useTitle';

function App() {
  useTitle("PopMovie");
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route element={<Header/>}/>
      <Route path="/" element={<Home/>} />
      <Route path="/movie/:id" element={<Detail/>}/>
      <Route path="/Search" element={<Search/>}/>
    </Routes>
  </Router>
)}

export default App;