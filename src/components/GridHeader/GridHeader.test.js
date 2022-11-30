import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GridHeader from "./GridHeader.component";

describe("GridHeader Component", () => {
  test("[UNIT] Renders", () => {
    render(
      <BrowserRouter>
        <GridHeader />
      </BrowserRouter>
    );
  });
});
