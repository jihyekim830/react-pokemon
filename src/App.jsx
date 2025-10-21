import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from '@layouts/MainLayout';

const Main = lazy(() => import('@pages/Main'));
const Detail = lazy(() => import('@pages/Detail'));
const Search = lazy(() => import('@pages/Search'));
const Favorite = lazy(() => import('@pages/Favorite'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
}

export default App;
