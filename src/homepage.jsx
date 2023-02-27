import Navbar from "./components/navbar";
import Category from "./components/category";
import Carousel from "./components/carousel";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Category />
      <div className="mt-60 max-md:m-5"></div>
      <Carousel />
    </div>
  );
}

export default HomePage;
