import { Dispatch, FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import { Item } from '../../types';

import './collection-item.style.scss';
import { AnyAction } from 'redux';

const CollectionItem: FC<CollectionItemProps> = ({ item, addItem }) => {
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
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  addItem: (item: Item) => dispatch(addItem(item))
});

const connector = connect(null, mapDispatchToProps);
type CollectionItemProps = ConnectedProps<typeof connector> & {
  item: Item;
};

export default connector(CollectionItem);
