import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import OAuthCallback from './components/OAuthCallback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/callback" element={<OAuthCallback />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App; 