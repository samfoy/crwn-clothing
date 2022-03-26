import { FC, useContext } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { ProductsContext } from '../../contexts/products.context';

const Shop: FC = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop-page">
      {products.map(collection => {
        return (
          <CollectionPreview key={collection.id} collection={collection} />
        );
      })}
    </div>
  );
};

export default Shop;
