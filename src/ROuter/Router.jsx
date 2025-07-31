import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Sap from "../Main/Sap";
export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Sap/>}>
            <Route path="/" element={<Home />} />
            <Route path="/About us" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
