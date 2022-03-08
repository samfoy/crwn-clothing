import { FC } from 'react';
import { Item } from '../../types';
import './collection-item.style.scss';

export type CollectionItemProps = {
  item: Item;
};

const CollectionItem: FC<CollectionItemProps> = ({ item }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
