import Main from "./components/MainPage/Main/main.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainProjects from "./components/Projects/Main/MainProjects.tsx";

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/projects" element={<MainProjects/>}/>
        </Routes>

    </Router>
  )
}

export default App
