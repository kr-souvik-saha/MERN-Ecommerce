import NavBar from "../features/navbar/Navbar";

const {
  default: ProductDetail,
} = require("../features/product/components/ProductDetail");

function ProductDetailPage() {
  return (
    <>
      <NavBar></NavBar>
      <ProductDetail></ProductDetail>
    </>
  );
}

export default ProductDetailPage;
