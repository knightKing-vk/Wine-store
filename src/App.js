import "./App.css";
import WineData from "./Wine-Data.json";
import Flavanoids from "./component/Flavanoids";
import Gama from "./component/Gamma/Gama";

function App() {
  return (
    <div className="App">
      <div>
        <Flavanoids WineData={WineData} />
        <Gama WineData={WineData} />
      </div>
    </div>
  );
}

export default App;
