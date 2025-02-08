import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OAuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Parse the callback parameters
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        const state = params.get('state');

        if (code) {
          // You might want to store the auth state in your app
          localStorage.setItem('isAuthenticated', 'true');
          
          // Redirect to welcome page
          navigate('/welcome', { replace: true });
        }
      } catch (error) {
        console.error('Error handling OAuth callback:', error);
        // Handle error appropriately
        navigate('/login', { replace: true });
      }
    };

    handleCallback();
  }, [navigate, location]);

  return (
    <div className="callback-container" style={{ 
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div>Processing login...</div>
    </div>
  );
};

export default OAuthCallback; 