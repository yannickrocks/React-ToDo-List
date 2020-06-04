import React from "react";
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

    describe("empty value", () =>  {
        it("no item appears in list", () => {            
            const { queryByTestId } = render(<App />)
            const listitems = queryByTestId('app__list')
        
            fireEvent.click(queryByTestId('app__button'))
            
            expect(listitems).toBe(null)
        })
    })


    describe("entered", () => {
        it("item appears in list", () => {
            const { queryByTestId, queryByText } = render(<App />)
            const taskInput = queryByTestId('app__input')
                    
            fireEvent.change(taskInput, {target: {value:"King stewie"}})
            fireEvent.click(queryByTestId('app__button'))

            // const listItem = queryByText('King stewie')
            console.log(listItem)
            expect(listItem).toBeInTheDocument()
        })
    })
})

