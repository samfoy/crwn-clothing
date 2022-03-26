import { FC } from 'react';
import { Route, Routes } from 'react-router';

import './App.scss';

import Home from './routes/home/home.component';
import ShopPage from './routes/shop/shop.component';
import CheckoutPage from './components/checkout/checkout.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
