import AccordionList from "./components/accordian/accordionList/AccordionList";
import Header from "./components/header/Header";
import Memes from "./components/memes/Memes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AccordionPage from "./pages/AccordionPage";
import CommentsPage from "./pages/CommentsPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accordian" element={<AccordionPage />} />
          <Route path="/comments" element={<CommentsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
