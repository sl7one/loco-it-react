import { Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';

export const App = () => {
  return (
    <Routes>
      <Route to="/" />
      <Route index element={<Home />} />
      <Route path="*" element={<div>No page</div>} />
    </Routes>
  );
};
