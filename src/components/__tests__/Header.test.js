import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should render header component with a login button", () => {

    render(
    <BrowserRouter>
        <Provider store={ appStore }>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    //const loginButton = screen.getByRole("button");     

    //const loginButton = screen.getByText("Login");    this is not better

    const loginButton = screen.getByRole("button",{ name: "Login"});    //this is the best


    expect(loginButton).toBeInTheDocument();

});


it("Should render header component with Cart items 0 ", () => {

    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("🛒-(0 items)");

    expect(cartItems).toBeInTheDocument();

});


it("Should login button to logout button on click", () => {

    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});      

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"}); 

    expect(logoutButton).toBeInTheDocument();

});