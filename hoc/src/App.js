import logo from './logo.svg';
import './App.css';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import HelloComponent from './component/HelloComponent';
import ProductCard from './features/product/ProductCard';
import data from './products.json'
import ProductList from './features/product/ProductList';

function App() {
  return (
    <div>
        {/* <ClickCounter/> */}
        {/* <HoverCounter/> */}
        {/* <HelloComponent/> */}
        {/* <ProductCard data={data.products}/> */}
        <ProductList data={data.products}/>
    </div>
  );
}

export default App;
