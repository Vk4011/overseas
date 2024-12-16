import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Universities } from './pages/Universities';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import Basic from './pages/Basic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="universities" element={<Universities />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="basic" element={<Basic />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;