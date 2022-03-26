import { FC, useContext } from 'react';
import { CartContext, Item } from '../../contexts/cart.context';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.style.scss';

const CollectionItem: FC<CollectionItemProps> = ({ item }) => {
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(item);
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
      <CustomButton inverted onClick={addProductToCart}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

type CollectionItemProps = {
  item: Item;
};

export default CollectionItem;
