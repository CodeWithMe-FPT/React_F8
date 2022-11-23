import { useState } from "react";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";
function App() {

  const [show, setShow] = useState(false);

  return (

    <div style={{ padding: 20 }}>
      <button onClick={() => { setShow(!show) }}>Toggle</button>
      {show && <Content1 />}
      {/* {show && <Content2 />} */}
      {/* {show && <Content3 />} */}
      {show && <Content4 />}
    </div>

  );
}

export default App;
