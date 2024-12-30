class AddExpensePage {
  getExpensesLink() {
    return cy.get('a[routerlink="expenses"]');
  }

  getAddExpenseButton() {
    return cy.contains("button", "Add an expense");
  }

  getMileageInput() {
    return cy.get("input#addExpenseMileage");
  }

  getLitersInput() {
    return cy.get("input#addExpenseLiters");
  }

  getTotalCostInput() {
    return cy.get("input#addExpenseTotalCost");
  }

  getSubmitButton() {
    return cy.get(".modal-footer > .btn-primary");
  }

  getAlert() {
    return cy.get(".alert");
  }

  navigateToExpenses() {
    this.getExpensesLink().click();
  }

  clickAddExpenseButton() {
    this.getAddExpenseButton().click();
  }

  typeMileage(mileage) {
    this.getMileageInput().click().clear().type(mileage);
  }

  typeLiters(liters) {
    this.getLitersInput().type(liters);
  }

  typeTotalCost(totalCost) {
    this.getTotalCostInput().type(totalCost);
  }

  clickSubmitButton() {
    this.getSubmitButton().click();
  }

  verifyAlertText(expectedText) {
    this.getAlert().should("have.text", expectedText);
  }
}

export default new AddExpensePage();
