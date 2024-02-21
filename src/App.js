import { Slide } from "@progress/kendo-react-animation";
import Navbar from "./Component/header/Navbar";
import PartNav from "./Component/header/PartNav";
import '@progress/kendo-theme-default/dist/all.css';
import Sliderr from "./Component/sliderr/Sliderr";
import Tablee from "./Component/tabels/Tablee";
import Cards from "./Component/Card/Cards";

function App() {
  return (
    <div className="App">
<Navbar/>
<PartNav/>
<Sliderr/>
<Tablee/>
<Cards/>
    </div>
  );
}

export default App;
