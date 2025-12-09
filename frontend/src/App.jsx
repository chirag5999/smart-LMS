import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx";
import Login from "./pages/login.jsx"
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <main className="flex-grow-1">
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/courses" element = {<h1 className="text-center mt-5">Courses Page</h1>} />
      </Routes>
    </main>
    <Footer />
    </div>
  )
}

export default App
