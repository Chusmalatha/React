import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import resObj from "../../utils/mockData";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


it("Should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resData={resObj[0]} />);

    const name = screen.getByText("Big Bowl");

    expect(name).toBeInTheDocument();
});


it("Should rended promoted resCard", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={resObj[0]} />);

    const name = screen.getByText("Promoted");

    expect(name).toBeInTheDocument();
});