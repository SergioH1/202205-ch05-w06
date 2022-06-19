import { products } from '../../data/products';
import { RecipeReviewCard } from './card';

export function CategoryPack() {
  const productsPack = products.filter(
    (product) => product.productType === 'Pack'
  );
  return (
    <div className="container-card">
      {productsPack.map((product) => (
        <RecipeReviewCard key={product.id} product={product} />
      ))}
    </div>
  );
}
