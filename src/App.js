import React ,{useEffect,useState} from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage";
import Mobile from "./Mobile";
import Laptop from "./Laptop";
import Fridge from "./Fridge";
import Acunit from "./Acunit";
import InstantFood from "./InstantFood";
import Drink from "./Drink";
import TV from "./Tv";
import WashingMachine from "./WashingMachine";
import ProductDetailsTV from "./ProductDetailsTV";
import ProductDetailsAC from "./ProductDetailsAC";
import ProductDetailsFridge from "./ProductDetailsFridge";
import ProductDetailsWash from "./ProductDetailsWash";
import ProductDetailsLaptop from "./ProductDetailsLaptop";
import ProductDetailsMobile from "./ProductDetailsMobile";
import TwoCompare from "./components/TwoCompare";
import CompareFeature from "./components/CompareFeature";
import NewArrival from "./newArrival/NewArrival";

export function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
          setWidth(window.innerWidth);
      }

let secondProductScreen = window.sessionStorage.getItem("secondProductScreen");

  useEffect(() => {

          window.addEventListener('resize', handleWindowSizeChange);
          return () => {
              window.removeEventListener('resize', handleWindowSizeChange);
          }
          console.log('isMobile = ' +isMobile)

      }, [width]);

  let isMobile = (width <= 768);
   console.log('isMobile = ' +isMobile)


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/search/mobile">
          <Navbar />
          <Mobile />
        </Route>
        <Route exact path="/search/tv">
          <Navbar />
          <TV />
        </Route>
        <Route exact path="/search/laptop">
          <Navbar />
          <Laptop />
        </Route>
        <Route exact path="/search/ac">
          <Navbar />
          <Acunit />
        </Route>
        <Route exact path="/search/refrigerator">
          <Navbar />
          <Fridge />
        </Route>
        <Route exact path="/search/washingmachine">
          <Navbar />
          <WashingMachine />
        </Route>
        <Route exact path="/search/InstantFood">
          <Navbar />
          <InstantFood />
        </Route>
        <Route exact path="/search/Drink">
          <Navbar />
          <Drink />
        </Route>
        <Route exact path="/search/compare">
          <Navbar />
          {/* <TwoCompare /> */}
          {isMobile?
          <CompareFeature /> : <TwoCompare />
          }
          
          
        </Route>
        <Route path="/search/refrigerator/product">
          <Navbar />
          <ProductDetailsFridge />
        </Route>
        <Route path="/search/washing_machine/product">
          <Navbar />
          <ProductDetailsWash />
        </Route>
        <Route path="/search/tv/product">
          <Navbar />
          <ProductDetailsTV />
        </Route>
        <Route path="/search/ac/product">
          <Navbar />
          <ProductDetailsAC />
        </Route>
        <Route path="/search/laptop/product">
          <Navbar />
          <ProductDetailsLaptop />
        </Route>
        <Route path="/search/mobile/product">
          <Navbar />
         
          {/* {alert(typeof secondProductScreen)} */}
          {secondProductScreen==1?
           <TwoCompare /> : <ProductDetailsMobile />
          }
          
        </Route>
        <Route path="/search/compare/compare-features">
          <Navbar />
          <CompareFeature />
        </Route>
        <Route path="/search/new-arrival-product">
          <Navbar />
          <NewArrival />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
