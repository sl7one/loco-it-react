import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from './page/Home';

export const App = () => {
  return (
    <Routes>
      <Route to="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<div>No page</div>} />
    </Routes>
  );
};
