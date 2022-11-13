import { useSelector } from "react-redux"

import { ProductComponent } from "./ProductComponent"

const ProductListing = () => {
    const products = useSelector((state) => state)
    console.log(products)
    return (
        <div className="ui grid container">
            <h1>ProductListing</h1>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing