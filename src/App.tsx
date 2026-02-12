import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/auth/Login';

function App() {
  const isAuthenticated = false; // Mock authentication state

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App
