import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // TODO: Implement registration logic
        console.log('Registration attempt:', {
            name: formData.name,
            email: formData.email,
            password: formData.password,
        });
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

            {/* Registration Container */}
            <div className="w-full max-w-[440px]">
                {/* Logo/Brand Icon Section */}
                <div className="flex justify-center mb-8">
                    <div className="bg-primary/10 p-3 rounded-xl">
                        <span className="material-symbols-outlined text-primary text-3xl">
                            account_balance_wallet
                        </span>
                    </div>
                </div>

                {/* Main Registration Card */}
                <Card className="shadow-xl shadow-primary/5 border-primary/5">
                    <CardContent className="p-8 md:p-10">
                        {/* Header Text */}
                        <div className="text-center mb-6">
                            <h1 className="text-2xl font-bold text-slate-800 mb-2 tracking-tight">
                                Create Account
                            </h1>
                        </div>

                        {/* Registration Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Field */}
                            <div>
                                <Label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Name
                                </Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-slate-400 text-[20px]">
                                            person_outline
                                        </span>
                                    </div>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="pl-11 pr-4 py-2.5 bg-background-light/50 border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        required
                                    />
                                </div>
                            </div>

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
                                <Label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Password
                                </Label>
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

                            {/* Confirm Password Field */}
                            <div>
                                <Label htmlFor="confirm-password" className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Confirm Password
                                </Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-slate-400 text-[20px]">
                                            lock_outline
                                        </span>
                                    </div>
                                    <Input
                                        id="confirm-password"
                                        name="confirm-password"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        value={formData.confirmPassword}
                                        onChange={(e) =>
                                            setFormData({ ...formData, confirmPassword: e.target.value })
                                        }
                                        className="pl-11 pr-11 py-2.5 bg-background-light/50 border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">
                                            {showConfirmPassword ? 'visibility' : 'visibility_off'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Sign Up Button */}
                            <Button
                                type="submit"
                                className="w-full py-3 px-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-sm shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]"
                            >
                                Sign Up
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
                                <span className="text-sm font-medium text-slate-700">Sign up with Google</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Login Link */}
                <p className="mt-8 text-center text-sm text-slate-500">
                    Already have an account?{' '}
                    <Link to="/login" className="font-bold text-primary hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
