import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import {Form} from '../App';

it("renders correctly", () => {
    const { queryByClassName, queryByPlaceholderText} = render(<Form />)

    // expect(queryByClassName("app__button")).toBeTruthy()
    expect(queryByPlaceholderText("Add a new task")).toBeTruthy()
  })