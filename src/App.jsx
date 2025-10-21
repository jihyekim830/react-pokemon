import MainLayout from '@layouts/MainLayout';
import { Detail, Favorite, Main, Search } from '@pages';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
}

export default App;
