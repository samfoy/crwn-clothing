import { FC } from 'react';
import { Section } from '../../types';
import { useLocation, useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';

export interface MenuItemProps {
  section: Section;
}

const MenuItem: FC<MenuItemProps> = ({ section }) => {
  let navigate = useNavigate();

  const { pathname } = useLocation();
  return (
    <div
      className={`menu-item ${section.size}`}
      onClick={() => navigate(`${pathname}${section.linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${section.imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{section.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
