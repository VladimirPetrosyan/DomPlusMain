import Main from "./components/MainPage/Main/main.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainProjects from "./components/Projects/Main/MainProjects.tsx";
import Services from "./components/ServicesPage/Services/Services.tsx";
import ReviewsPage from "./components/Reviews/ReviewsPage/ReviewsPage.tsx";
import ConstructorPage from "./components/Constructor/ConstructorPage/ConstructorPage.tsx";

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/projects" element={<MainProjects/>}/>
            <Route path="/reviews" element={<ReviewsPage/>}/>
            <Route path="/constructor" element={<ConstructorPage/>}/>
        </Routes>

    </Router>
  )
}

export default App
