import { IProduct } from "../model/Product";
interface Iprops {
  product: IProduct;
}
const SingleProduct = ({ product }: Iprops) => {
  return (
    <div className="w-80 h-96 rounded-lg border-2 border-gray-600  flex flex-col">
      <div className="h-60  ">
        <img
          className="h-full w-full mt-4"
          src={product.image}
          alt="No image"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl m-4 text-blue-300">
          {product.title.substring(0, 20)}
        </h1>
        <p className="font-normal m-4 text-black">
          {product.description.substring(0, 15)}
        </p>
        <h1 className="font-bold text-2xl m-4 text-blue-300">
          {product.price}
        </h1>
      </div>
    </div>
  );
};

export default SingleProduct;
