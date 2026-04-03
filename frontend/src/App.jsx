import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'sans-serif' }}>
        <nav style={{ padding: '10px 20px', background: '#f0f0f0', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Trang Chủ</Link>
          <Link to="/about">Thông Tin Sinh Viên</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
