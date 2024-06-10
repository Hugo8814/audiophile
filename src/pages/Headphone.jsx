import NavBar from "../components/Nav";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import XX99MARKII from "../components/XX99MARKII";
import XX99MARKI from "../components/XX99MARKI";
import XX59 from "../components/XX59";
import AudioProducts from "../components/AuidoPoducts";

function Headphone() {
  return (
    <div className="box">
      <NavBar />
      <Header text="HEADPHONES" />
      <XX99MARKII />
      <XX99MARKI />
      <XX59 />
      <AudioProducts />

      <ProductCard />
    </div>
  );
}

export default Headphone;
