import { products } from '../../data/products';
import { RecipeReviewCard } from './card';
import './productCard.css';
export function ProductsCard() {
  return (
    <div className="container-card">
      {products.map((product) => (
        <RecipeReviewCard key={product.id} product={product} />
      ))}
    </div>
  );
}
