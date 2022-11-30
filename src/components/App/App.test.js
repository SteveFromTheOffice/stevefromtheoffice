import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.component";

describe("App Component", () => {
  test("[UNIT] Renders", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
