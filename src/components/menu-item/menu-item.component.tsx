import { FC } from 'react';
import { Section } from '../../types';
import './menu-item.styles.scss';

export type MenuItemProps = {
  section: Section;
};

const MenuItem: FC<MenuItemProps> = ({ section }) => {
  return (
    <div className={`menu-item ${section.size}`}>
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
