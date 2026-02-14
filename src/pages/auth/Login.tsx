import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useGoogleLogin } from '@react-oauth/google';
import { api } from '@/services/api';
import { authService } from '@/services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.login({
        email: formData.email,
        password: formData.password,
      });
      
      authService.setToken(response.token);
      navigate('/');
      window.location.reload(); // Reload to update auth state
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await api.loginWithGoogle({
          access_token: tokenResponse.access_token,
        });
        
        authService.setToken(response.token);
        navigate('/');
        window.location.reload();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Google login failed');
      } finally {
        setIsLoading(false);
      }
    },
    onError: (error) => {
      setError('Google login failed. Please try again.');
      console.error('Google login error:', error);
    },
  });

  return (
    <div className="bg-background-light min-h-screen flex items-center justify-center p-4 relative overflow-hidden">

      {/* Login Container */}
      <div className="w-full max-w-[440px]">

        {/* Main Login Card */}
        <Card className="shadow-xl shadow-primary/5 border-primary/5">
          <CardContent className="p-8 md:p-10">
            {/* Header Text */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-slate-800 mb-2 tracking-tight">
                Welcome Back
              </h1>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400 text-[20px]">
                      mail_outline
                    </span>
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="pl-11 pr-4 py-2.5 bg-background-light/50 border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label htmlFor="password" className="block text-sm font-medium text-slate-700">
                    Password
                  </Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-semibold text-primary hover:underline transition-all"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400 text-[20px]">
                      lock_outline
                    </span>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="pl-11 pr-11 py-2.5 bg-background-light/50 border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility' : 'visibility_off'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Sign In Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-sm shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Social Login Divider */}
            <div className="mt-8 relative">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-slate-400 font-medium tracking-wider">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Options */}
            <div className="mt-6">
              <Button
                type="button"
                variant="outline"
                disabled={isLoading}
                className="flex items-center justify-center py-2.5 border-slate-200 hover:bg-slate-50 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => loginWithGoogle()}
              >
                <img
                  alt="Google Logo"
                  className="w-5 h-5 mr-2"
                  src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/06/Logo-google-icon-PNG.png"
                />
                <span className="text-sm font-medium text-slate-700">Login with Google</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Signup Link */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold text-primary hover:underline">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
