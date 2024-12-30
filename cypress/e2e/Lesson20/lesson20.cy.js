import AddCarPage from "./Page Object Models/Pages/GaragePage";
import AddExpensePage from "./Page Object Models/Pages/ExpensesPage";

describe("Lesson20", () => {
  beforeEach(() => {
    cy.login();
  });
  after(() => {
    cy.get('a[routerlink="garage"]').click();
    cy.get(".car_edit > .icon").click();
    cy.contains("button", "Remove car").click();
    cy.get(".btn-danger").click();
  });

  it("Adding a car", () => {
    AddCarPage.clickAddCarButton();
    AddCarPage.selectBrand("BMW");
    AddCarPage.selectModel("X5");
    AddCarPage.typeMileage("10");
    AddCarPage.clickSubmitButton();
  });

  it("Adding fuel expenses", () => {
    AddExpensePage.navigateToExpenses();
    AddExpensePage.clickAddExpenseButton();
    AddExpensePage.typeMileage("200");
    AddExpensePage.typeLiters("200");
    AddExpensePage.typeTotalCost("200");
    AddExpensePage.clickSubmitButton();
    AddExpensePage.verifyAlertText("Fuel expense added");
  });
});
