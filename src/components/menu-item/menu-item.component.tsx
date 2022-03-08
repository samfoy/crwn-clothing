import { FC } from 'react';
import { Section } from '../../types';
import { RouteComponentProps, withRouter } from 'react-router';
import './menu-item.styles.scss';

export interface MenuItemProps extends RouteComponentProps {
  section: Section;
}

const MenuItem: FC<MenuItemProps> = ({ section, history, match }) => {
  return (
    <div
      className={`menu-item ${section.size}`}
      onClick={() => history.push(`${match.url}${section.linkUrl}`)}
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

export default withRouter(MenuItem);
