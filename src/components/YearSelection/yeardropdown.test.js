import YearSelection from "./YearSelection";
import {render, screen, fireEvent} from "@testing-library/react"

describe("Feature testing for viewing different MLB seasons(years)", () =>{
    
    it("should display a numeric input for choosing a year", () => {
        render(<YearSelection />)
        expect(Number(screen.getByTestId("year-select").value)).toBe(new Date().getFullYear())
    })
    it("should increment number on clicking increment button", ()=> {
        render(<YearSelection />)
        let valup = Number(document.getElementsByTagName('input')[0].value)
        valup += 1
        expect(valup).toBe(2023)
    })
    it("should decrement number on clicking decerment button", ()=>{
        render(<YearSelection />)
        let valup = Number(document.getElementsByTagName('input')[0].value)
        valup -= 1
        expect(valup).toBe(2021)
    })
})

