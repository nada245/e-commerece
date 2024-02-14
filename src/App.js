import { Slide } from "@progress/kendo-react-animation";
import Navbar from "./Component/Navbar";
import PartNav from "./Component/PartNav";
import '@progress/kendo-theme-default/dist/all.css';
import Sliderr from "./Component/Sliderr";
import Tablee from "./Component/Tablee";

function App() {
  return (
    <div className="App">
<Navbar/>
<PartNav/>
<Sliderr/>
<Tablee/>
    </div>
  );
}

export default App;
