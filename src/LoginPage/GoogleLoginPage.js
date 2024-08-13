import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginPage = () => {
  const [token, setToken] = useState(null);

  const handleLoginSuccess = (response) => {
    const token = response.credential;
    setToken(token);
    console.log("Google Token: ", token);
  };

  const handleLoginFailure = () => {
    console.error("Google Login Failed");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login with Google</h1>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
      {token && (
        <div style={{ marginTop: '20px' }}>
          <h2>Google Token</h2>
          <textarea
            value={token}
            readOnly
            style={{ width: '80%', height: '100px' }}
          />
        </div>
      )}
    </div>
  );
};

export default GoogleLoginPage;
