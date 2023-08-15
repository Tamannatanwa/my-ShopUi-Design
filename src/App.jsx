import { BrowserRouter, Route, Routes } from "react-router-dom";
import MianLaout from "./pages/MianLaout";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MianLaout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Product />} />
            <Route path="products/:productId" element={<SingleProduct />} />
            <Route path="posts" element={<Posts />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
