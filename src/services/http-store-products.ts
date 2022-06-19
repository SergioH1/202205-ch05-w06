import { ProductModel } from '../model/productModel';

export class HttpStoreProduct {
  url: string;
  constructor() {
    this.url = 'http://localhost:4500';
  }
  getproducts(): Promise<Array<ProductModel>> {
    return fetch('http://localhost:4500').then((resp) => {
      return resp.json();
    });
  }
  addproduct(product: ProductModel): Promise<ProductModel> {
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => resp.json());
  }
  updateproduct(product: ProductModel): Promise<Partial<ProductModel>> {
    return fetch(this.url + `/${product.id}`, {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => resp.json());
  }
  deleteproduct(id: string): Promise<number> {
    return fetch(this.url + `/${id}`, {
      method: 'DELETE',
    }).then((resp) => resp.status);
  }
}
