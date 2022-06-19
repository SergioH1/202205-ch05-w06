import { products } from '../../data/products';
import { RecipeReviewCard } from './card';

export function ProductsCard() {
  return (
    <>
      {products.map((product) => (
        <RecipeReviewCard key={product.id} product={product} />
      ))}
    </>
  );
}
