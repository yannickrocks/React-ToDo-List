import React from "react";
import ReactDOM from 'react-dom'
import { render, fireEvent } from "@testing-library/react";
import Form from "../Form";

it("renders correctly", () => {
    const { queryByPlaceholderText } = render(<Form />);
    expect(queryByPlaceholderText('Add a new task')).toBeTruthy()
})