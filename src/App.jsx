import "./App.css";
import Layout from "./Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Options from "./components/Options";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/path" element={<Options />} />
            {/* <Route path="/popd" element={<POPD />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
