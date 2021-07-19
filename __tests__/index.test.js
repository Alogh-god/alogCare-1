import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Index from "../pages/index";


it("should render", () => {
    render( < Index /> );
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
});