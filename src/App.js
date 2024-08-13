import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginPage from './LoginPage/GoogleLoginPage';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="805609818673-8tnj0oufbpn834mbi2db3v3pkpr7kecn.apps.googleusercontent.com">
      <div>
        <GoogleLoginPage />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;

