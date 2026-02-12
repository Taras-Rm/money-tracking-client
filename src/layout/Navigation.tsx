import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: 'dashboard' },
    { path: '/transactions', label: 'Transactions', icon: 'receipt_long' },
    { path: '/reports', label: 'Reports', icon: 'bar_chart' },
    { path: '/settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <aside className="w-64 shrink-0 border-r border-slate-200 bg-white flex flex-col">
      {/* Header with Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined">payments</span>
        </div>
        <div>
          <h1 className="text-lg font-bold leading-none">MoneyTracker</h1>
          <p className="text-xs text-slate-500">Personal Finance</p>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              location.pathname === item.path
                ? 'bg-primary/10 text-primary font-medium'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Support Button */}
      <div className="p-4 border-t border-slate-200">
        <Button variant="ghost" className="w-full justify-center">
          <span className="material-symbols-outlined text-sm">help</span>
          Support
        </Button>
      </div>
    </aside>
  );
};

export default Navigation;
