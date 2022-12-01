import { Routes, Route, BrowserRouter } from "react-router-dom";

import GridHeader from "../GridHeader/GridHeader.component";
import GridMain from "../GridMain/GridMain.component";
import GridLayout from "../GridLayout/GridLayout.component";
import ComponentExplorer from "../ComponentExplorer/ComponentExplorer.component";

function App(props) {
  return (
    <GridLayout>
      <BrowserRouter>
        <GridHeader />
        <GridMain>
          <Routes>
            <Route path="/" element={<div>Main</div>} />
            <Route path="/blog" element={<div>Blog</div>} />
            <Route path="/components" element={<ComponentExplorer />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </GridMain>
      </BrowserRouter>
    </GridLayout>
  );
}

export default App;
