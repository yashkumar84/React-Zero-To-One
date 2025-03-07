import { useParams } from "react-router-dom";

const ProductListing = () => {
  const { id, id1 } = useParams();
  return (
    <div>
      ProductListing {id} {id1}
    </div>
  );
};

export default ProductListing;
