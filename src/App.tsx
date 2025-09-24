import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import WireframeBG from './components/WireframeIcosahedron'

function App() {
  return (
    <BrowserRouter>
      <div className="flex-container">
        <WireframeBG className="bg-canvas" />
        
        <section className="nav">
          <h1>Welcome.</h1>
          <ul>
            <Link className="linkClass" to="/"><li>&lt;&gt; Home</li></Link>
            <Link className="linkClass" to="/resume"><li>&lt;&gt; Resume</li></Link>
            <Link className="linkClass" to="/contact"><li>&lt;&gt; Contact Me</li></Link>
          </ul>
        </section>
        
        <section className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  )
}

export default App
