import Footer from "../assets/FOOTER/Footer";
import HEADER from "../assets/HEADER/Header";
 import {Outlet} from 'react-router-dom';
export default function Sap() {
  return (
    <div>
        <HEADER/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

