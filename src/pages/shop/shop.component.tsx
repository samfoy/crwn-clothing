import { Component } from 'react';
import { Collection, Item } from '../../types';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import shopData from './shop.data';

type ShopProps = {};

type ShopState = {
  collections: Collection[];
};

class ShopPage extends Component<ShopProps, ShopState> {
  state: ShopState = {
    collections: shopData
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(collection => {
          return (
            <CollectionPreview key={collection.id} collection={collection} />
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
