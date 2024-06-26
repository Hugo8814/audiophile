import NavBar from "../components/Nav.jsx";
import ProductCard from "../components/ProductCard.jsx";

import AudioProducts from "../components/AuidoProducts.jsx";
import AudioProductsV2 from "../components/AudioProductsV2.jsx";

import XX99MARKIcard from "../components/XX99MARKIcard.jsx";
import XX59card from "../components/XX59card.jsx";

import AddToCart from "../components/AddToCart.jsx";

import ZX7SPEAKER from "../components/ZX7SPEAKER.jsx";
import ZX9card from "../components/ZX9card.jsx";
import ProductFeatures from "../components/ProductFeatures.jsx";
import Gallery from "../components/Gallery.jsx";
function ZX7Page() {
  return (
    <div className="box">
      <NavBar />
      <ZX7SPEAKER>
        <AddToCart price="3,500" productName={"ZX7 Speaker"} />
      </ZX7SPEAKER>
      <ProductFeatures index={4} />
      <Gallery index={4} />
      <AudioProductsV2>
        <ZX9card />
        <XX99MARKIcard />
        <XX59card />
      </AudioProductsV2>
      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default ZX7Page;
