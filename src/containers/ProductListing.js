import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";


const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch()

  const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    dispatch(setProducts(response.data))
}

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <div style={{ marginTop: "100px" }} className="ui grid container">
        {products.map((product) => {
            return (
                <h2>{product.title}</h2>
            )
        })}
      <h1>ProductListing</h1>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
