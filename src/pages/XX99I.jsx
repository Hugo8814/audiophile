import NavBar from "../components/Nav";
import ProductCard from "../components/ProductCard";

import AudioProducts from "../components/AuidoProducts";
import AudioProductsV2 from "../components/AudioProductsV2";
import XX99IImgs from "../components/XX99IImgs";
import XX99MARKIIcard from "../components/XX99MARKIIcard";
import XX59card from "../components/XX59card";
import ZX9card from "../components/ZX9card";
import XX99IFeatures from "../components/XX99IFeatures";

function XX99I() {
  return (
    <div className="box">
      <NavBar />
      <XX99IFeatures />

      <XX99IImgs />
      <AudioProductsV2>
        <XX99MARKIIcard />
        <XX59card />
        <ZX9card />
      </AudioProductsV2>
      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default XX99I;