import { Link, Outlet } from 'react-router';

function MainLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Main</Link>
          <Link to="/search">Search</Link>
          <Link to="/favorite">Favorite</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
