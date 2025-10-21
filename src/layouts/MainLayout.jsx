import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Header } from '@components';
import { Indicator } from '@components';

function MainLayout() {
  return (
    <>
      <Header />
      <main className="py-2">
        <Suspense fallback={<Indicator />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default MainLayout;
