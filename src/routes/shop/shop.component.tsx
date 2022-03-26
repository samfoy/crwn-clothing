import { FC } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

import { Collection } from '../../types';

const collections: Collection[] = SHOP_DATA;

const Shop: FC = () => {
  return (
    <div className="shop-page">
      {collections.map(collection => {
        return (
          <CollectionPreview key={collection.id} collection={collection} />
        );
      })}
    </div>
  );
};

export default Shop;
