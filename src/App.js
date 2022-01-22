import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Imggallery from "./Components/Imggallery";
import Whyus from "./Components/Whyus";
import Cards from "./Components/Cards";
import Testimonials from "./Components/Testimonials";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Imggallery />
      <Whyus />
      <Cards />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
