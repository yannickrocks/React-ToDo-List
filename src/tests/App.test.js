import React from "react";
import ReactDOM from 'react-dom'
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(cleanup)

describe("when input value is ", () => {
    it("updated it triggers on change", () => {
        const { queryByTestId } = render(<App />)
        const taskInput = queryByTestId('app__input')
        
        fireEvent.change(taskInput, {target: {value:"test"}})

        expect(taskInput.value).toBe("test")
    })

    describe("empty value", () =>
        it("no item appears in list", () => {
            const requestAddItem = jest.fn()
            
            const { queryByTestId } = render(<App requestAddItem = {requestAddItem} />)
            const listitems = queryByTestId('app__list')
        
            fireEvent.click(queryByTestId('app__button'))
            expect(requestAddItem).not.toHaveBeenCalled()
            expect(listitems).toBe(null)
        })
    )

    describe("entered", () =>
        it("item appears in list", () => {
            const requestAddItem = jest.fn()
            const { queryByTestId } = render(<App />)
            const taskInput = queryByTestId('app__input')
            const listitems = queryByTestId('app__list')
        
            fireEvent.change(taskInput, {target: {value:"test"}})
            fireEvent.click(queryByTestId('app__button'))
          
            expect(requestAddItem).toHaveBeenCalled()
        })
    )
})

