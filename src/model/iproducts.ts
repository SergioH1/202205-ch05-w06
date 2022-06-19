export interface iProduct {
  id: number;
  name: string;
  productType: string;
  price: number;
  rating: number;
  img: string;
  content: string;
  description: string;
}
export type aProduct = Array<iProduct>;

export class ProductModel implements iProduct {
  id: number;
  constructor(
    public name: string,
    public productType: string,
    public price: number,
    public rating: number,
    public img: string,
    public content: string,
    public description: string
  ) {
    this.id = 0;
  }
}
