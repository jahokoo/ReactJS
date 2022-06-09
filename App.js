import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Header from "./components/Header";
import useTitle from './hooks/useTitle';

function App() {
  useTitle("The Movies");
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route element={<Header/>}/>
      <Route path="/" element={<Home/>} />
      <Route path="/movie/:id" element={<Detail/>}/>
    </Routes>
  </Router>
)}

export default App;