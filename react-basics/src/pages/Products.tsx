import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct, Product } from "../model/Product";
import SingleProduct from "../component/SingleProduct";

interface IOriginalProduct {
  title: string;
  description: string;
  id: number;
  image: string;
  price: number;
  category: string;
  rating: {
    count: number;
    rate: number;
  };
}

const Products = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await axios.get("https://fakestoreapi.com/products");
    let data = response.data;
    console.log(data);
    data = data.map(
      (obj: IOriginalProduct) =>
        new Product({
          title: obj.title,
          description: obj.description,
          id: obj.id,
          image: obj.image,
          price: obj.price,
        })
    );

    setData(data);
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data, "Data is ");
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {data.map((obj: IProduct) => (
        <SingleProduct key={obj.id} product={obj} />
      ))}
    </div>
  );
  //Lifecycle of Components
};

export default Products;
