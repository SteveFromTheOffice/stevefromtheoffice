import { Routes, Route, BrowserRouter } from "react-router-dom";

import GridHeader from "../GridHeader/GridHeader.component";
import GridMain from "../GridMain/GridMain.component";
import GridLayout from "../GridLayout/GridLayout.component";

import HomePage from "../HomePage/HomePage.component";
import BlogPage from "../BlogPage/BlogPage.component";
import ComponentPage from "../ComponentPage/ComponentPage.component";

function App(props) {
  return (
    <GridLayout>
      <BrowserRouter>
        <GridHeader />
        <GridMain>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/components" element={<ComponentPage />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </GridMain>
      </BrowserRouter>
    </GridLayout>
  );
}

export default App;
