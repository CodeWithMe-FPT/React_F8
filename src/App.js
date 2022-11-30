import { useState } from "react";
import Content1 from "./components/Content1";
import Content10 from "./components/Content10";
import Content11 from "./components/Content11";
import Content12 from "./components/Content12";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";
import Content5 from "./components/Content5";
import Content6 from "./components/Content6";
import Content7 from "./components/Content7";
import Content8 from "./components/Content8";
import Content9 from "./components/Content9";
function App() {

  const [show, setShow] = useState(false);

  return (

    <div style={{ padding: 20 }}>
      <button onClick={() => { setShow(!show) }}>Toggle</button>
      {show && <Content1 />}
      {/* {show && <Content2 />} */}
      {/* {show && <Content3 />} */}
      {/* {show && <Content4 />} */}
      {/* {show && <Content5 />} */}
      {/* {show && <Content6 />} */}
      {/* {show && <Content7 />} */}
      {/* {show && <Content8 />} */}
      {/* {show && <Content9 />} */}
      {/* {show && <Content10 />} */}
      {/* {show && <Content11 />} */}
      {show && <Content12 />}
    </div>

  );
}

export default App;
