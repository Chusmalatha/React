import RestaurantMenu from "../RestaurantMenu";
import { render, screen, fireEvent} from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { appStore } from "../../utils/appStore.js";
import { MemoryRouter  } from "react-router-dom";

//mock the useParams hook
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        resId: "953024",
    }),
}));


it("Should Load Restaurant Menu component ", () => {
    render(
        <MemoryRouter>
        <Provider store={appStore}>
            <RestaurantMenu />
        </Provider>
        </MemoryRouter>
    );

        const accordianHeader =  screen.getByText("Big Bowl (8)");
        
        expect(accordianHeader).toBeInTheDocument();

});