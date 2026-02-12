import { ReactNode } from 'react';
import Header from './Header';
import Navigation from './Navigation';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navigation />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8 space-y-8">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
