import Footer from "../features/common/Footer";
import NavBar from "../features/navbar/Navbar";

const {
  default: ProductDetail,
} = require("../features/product/components/ProductDetail");

function ProductDetailPage() {
  return (
    <div>
      <NavBar>
        <ProductDetail></ProductDetail>
      </NavBar>
      <Footer></Footer>
    </div>
  );
}

export default ProductDetailPage;
