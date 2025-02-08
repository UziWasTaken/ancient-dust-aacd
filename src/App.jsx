import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import OAuthCallback from './components/OAuthCallback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/callback" element={<OAuthCallback />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App; 