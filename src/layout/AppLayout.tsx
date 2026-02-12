import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

const AppLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navigation />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
