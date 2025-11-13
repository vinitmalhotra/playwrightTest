import BasePage from "../pages/base.page";
import Inventory from "../pages/inventory.page";
import Login from "../pages/login.page";

export interface ISwagLabsApp {

    basePage: BasePage,
    inventoryPage: Inventory,
    loginPage: Login

}