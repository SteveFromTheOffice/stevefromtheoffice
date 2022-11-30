import { Routes, Route, BrowserRouter } from "react-router-dom";

import ComponentList from "../ComponentList/ComponentList.component";
import ComponentViewer from "../ComponentViewer/ComponentViewer.component";
import GridHeader from "../GridHeader/GridHeader.component";
import GridMain from "../GridMain/GridMain.component";
import GridFooter from "../GridFooter/GridFooter.component";

function App(props) {
  return (
    <BrowserRouter>
      <GridHeader />
      <GridMain>
        <Routes>
          <Route path="/" element={<div>Main</div>} />
          <Route path="/blog" element={<div>Blog</div>} />
          <Route path="/components" element={<ComponentList />}>
            <Route path=":componentId" element={<ComponentViewer />} />
          </Route>
          <Route path="/sitemap" element={<div>Sitemap</div>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </GridMain>
      <GridFooter />
    </BrowserRouter>
  );
}

export default App;
