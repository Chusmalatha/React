import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should Search Res List for Big Bowl Input ", () => {
    render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
    );
    
    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(7);

    const SearchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Big Bowl" } });
    fireEvent.click(SearchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);
});


it("Should filter Top Rated Restaurant ", () => {
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    )

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(7);

    const topRatedButton = screen.getByRole("button", { name: "Top Rated Restaurants"});
    fireEvent.click(topRatedButton);
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(4);
    
});



