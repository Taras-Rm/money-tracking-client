import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="h-16 flex items-center justify-between px-8 bg-white border-b border-slate-200 shrink-0">
      <div className="flex items-center gap-4 flex-1">
        <h2 className="text-xl font-bold">Dashboard Overview</h2>
        <div className="relative w-64 max-w-xs">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">
            search
          </span>
          <Input
            className="w-full pl-10 pr-4 py-1.5 bg-slate-100 border-none text-sm focus:ring-2 focus:ring-primary"
            placeholder="Search transactions..."
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-slate-900 font-bold hover:brightness-95 shadow-sm shadow-primary/20"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          Add Transaction
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
        </Button>
        <div className="h-8 w-8 rounded-full overflow-hidden border border-slate-200">
          <img
            alt="Profile"
            className="size-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxNYPMEhP3L03NMv2XqRgh04pTOHff0fZ8tbEgz_eUfp5iXUZT0XmTayZ1BFqoJhT3Go8xBCnPM8RmEHsS03kRPnk56wOrR44tDScHHcUggsNYLzB2UHib3mW1fJJQINwVrBbFADuQ6DnwxkZD8WKYxlnm4khwvMP_xn8mxSSQwKisn1nruI-N_t-K5ElIIoZkh6Ago1-a3rrSLrZIbMgnhRpWigDIIeocqJftgvnqoktwYncmz1m_7iDzjPREk-TJnqZnLNyCSJ7Z"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
