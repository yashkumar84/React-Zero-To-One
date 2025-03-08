export interface IProduct {
  title: string;
  description: string;
  id: number;
  image: string;
  price: number;
}

export class Product implements IProduct {
  title: string;
  description: string;
  id: number;
  image: string;
  price: number;
  constructor(product: IProduct) {
    this.title = product.title;
    this.description = product.description;
    this.id = product.id;
    this.image = product.image;
    this.price = product.price;
  }
}
