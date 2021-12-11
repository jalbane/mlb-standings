
import {render, screen} from '@testing-library/react'
//import {Button} from './components/Button'
import Testsomething from './components/Testsomething'

describe('Test a few ways to write jest tests', () => {
  it("should load and display hello world", () => {
    let {getByText} = render(<Testsomething />)
    expect(getByText("Hello World")).toMatchInlineSnapshot(`
        <div>
          Hello World
        </div>
  `);
  })

  it("should also load and display the same test rewritten this way", () => {
    let {getByText} = render(<Testsomething />)
    expect(getByText(/Hello/i)).toBeTruthy()

    /*
    *   render(<Testsomething />)
    *    const messageTextArea = screen.getByText(/Hello/i)
    *    expect(messageTextArea).toBeTruthy()
    */

})

})