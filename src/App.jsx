import { Route, Routes, BrowserRouter } from "react-router-dom";
import SelectOptions from "./components/Options";
import Layout from "./Layout";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/:option" element={<SelectOptions />} />
            {/* <Route path="/popd" element={<POPD />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
