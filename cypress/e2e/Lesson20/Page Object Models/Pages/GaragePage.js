class AddCarPage {
  getAddCarButton() {
    return cy.contains("button", "Add car");
  }

  getBrandDropdown() {
    return cy.get("select#addCarBrand");
  }

  getModelDropdown() {
    return cy.get("select#addCarModel");
  }

  getMileageInput() {
    return cy.get("input#addCarMileage");
  }

  getSubmitButton() {
    return cy.get(".modal-footer > .btn-primary");
  }

  getAlert() {
    return cy.get("div.alert");
  }

  clickAddCarButton() {
    this.getAddCarButton().click();
  }

  selectBrand(brand) {
    this.getBrandDropdown().select(brand);
  }

  selectModel(model) {
    this.getModelDropdown().select(model);
  }

  typeMileage(mileage) {
    this.getMileageInput().type(mileage);
  }

  clickSubmitButton() {
    this.getSubmitButton().click();
  }

  verifyAlertText(expectedText) {
    this.getAlert().should("have.text", expectedText);
  }
}

export default new AddCarPage();
