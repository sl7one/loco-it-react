import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Design } from './page/Design';
import { Home } from './page/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="design" element={<Design />} />
      </Route>
      <Route path="*" element={<div>No page</div>} />
    </Routes>
  );
};
