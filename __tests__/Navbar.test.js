import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Nav/Navbar";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    render(<Navbar />);
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toBeInTheDocument();
  });

  test("toggles menu when button is clicked", () => {
    render(<Navbar />);
    const buttonElement = screen.getByLabelText("Open Menu");
    const navElement = screen.getByRole("navigation");

    fireEvent.click(buttonElement);
    expect(navElement).toHaveClass("block");

    fireEvent.click(buttonElement);
    expect(navElement).toHaveClass("hidden");
  });
});
