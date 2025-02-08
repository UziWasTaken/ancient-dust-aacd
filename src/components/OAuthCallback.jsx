import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OAuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Parse the callback parameters
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const state = params.get('state');

    if (code) {
      // Here you can handle the OAuth code if needed
      console.log('OAuth code received:', code);
      
      // Redirect to welcome page
      navigate('/welcome');
    }
  }, [navigate, location]);

  return (
    <div>
      Processing login...
    </div>
  );
};

export default OAuthCallback; 