import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import CreateCard from "./components/form/CreateCard";
import NotFound from "./components/pages/notFound/NotFound";
import { CardProvider } from "./context/CardContext";


function App() {
  

  return (
    <CardProvider>

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/createCard" element={<CreateCard/>}/>
    <Route path="/*" element={<NotFound/>}/>

  </Routes>
  </BrowserRouter>
    </CardProvider>
  )
}

export default App
