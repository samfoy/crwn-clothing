import { FC } from 'react';
import './home.style.scss';
import Directory from '../../components/directory/directory.component';

const Home: FC = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default Home;
