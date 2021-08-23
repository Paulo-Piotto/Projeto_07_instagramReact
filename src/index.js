import ReactDOM from "react-dom";
import Topo from "./topo";
import Corpo from "./corpo";
import Fundo from "./fundo-mobile";

function App() {
  return (
    <div>
      <Topo />
      <Corpo />
      <Fundo />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
