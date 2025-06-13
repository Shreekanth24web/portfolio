import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./components/Pages/pages";
import Navbar from "./components/Header/Navbar/Navbar";
import Footer from './components/Header/Footer/Footer';
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pages />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
