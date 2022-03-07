import { FC } from 'react';
import './homepage.style.scss';
import Directory from '../../components/directory/directory.component';

const HomePage: FC = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
