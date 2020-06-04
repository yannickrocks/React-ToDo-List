import React from "react";
import ReactDOM from 'react-dom'
import { render, fireEvent, cleanup } from "@testing-library/react";
import Form from "../Form";

afterEach(cleanup)

it("renders without crashing", () => {
    const div = document.createElement('div')
    ReactDOM.render(<Form />, div)
})

it("checks the placeholder text is there", () => {
    const { queryByPlaceholderText,  } = render(<Form />);
    expect(queryByPlaceholderText('Add a new task')).toBeTruthy()
})

it("checks the button is there", () => {
    const { queryAllByTestId,  } = render(<Form />);
    expect(queryAllByTestId('app__button')).toBeTruthy()
})