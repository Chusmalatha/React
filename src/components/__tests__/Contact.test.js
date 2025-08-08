import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("Contact us page test cases", () => {


    beforeAll(() => {               //it runs before all tests
        console.log("Before All");      //beforeAll is also there
    });


    beforeEach(() => {              //it runs before each test
        console.log("Berfore Each");     //afterEach is also there
    })


    afterAll(() => {               //it runs before all tests
        console.log("After All");      //beforeAll is also there
    });


    afterEach(() => {              //it runs before each test
        console.log("After Each");     //afterEach is also there
    })

    test("Should load contact us component", () => {

    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();

});

it("Should load button inside contact component", () => {               //it is alias of test. both are same

    render(<Contact />);

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();

});

test("Should load inpt name inside contact component", () => {

    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();

});

test("Should load 2 input boxex onthe contact component", () => {

    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);

});
});

