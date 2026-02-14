import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { authService } from './services/auth';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

if (!clientId) {
  throw new Error('VITE_GOOGLE_CLIENT_ID environment variable is not set');
}

function App() {
  const isAuthenticated = authService.isAuthenticated();

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
            </Route>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Login />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>

  );
}

export default App
