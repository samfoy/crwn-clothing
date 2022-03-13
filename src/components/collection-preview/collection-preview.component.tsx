import { FC } from 'react';
import { Collection } from '../../types';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';

export type CollectionPreviewProps = {
  collection: Collection;
};

const CollectionPreview: FC<CollectionPreviewProps> = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(item => {
          return <CollectionItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
