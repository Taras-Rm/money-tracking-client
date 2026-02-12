import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt:', formData);
  };

  return (
    <div className="bg-background-light min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decoration Elements */}
      <div className="fixed top-0 right-0 -z-10 w-1/3 h-1/3 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-primary to-transparent blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="fixed bottom-0 left-0 -z-10 w-1/4 h-1/4 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-primary to-transparent blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Login Container */}
      <div className="w-full max-w-[440px]">
        {/* Logo/Brand Icon Section */}
        <div className="flex justify-center mb-8">
          <div className="bg-primary/10 p-3 rounded-xl">
            <span className="material-symbols-outlined text-primary text-3xl">
              account_balance_wallet
            </span>
          </div>
        </div>

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

              {/* Sign In Button */}
              <Button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-sm shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]"
              >
                Sign In
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
                className="flex items-center justify-center py-2.5 border-slate-200 hover:bg-slate-50 transition-colors w-full"
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
