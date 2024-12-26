const generateRandomString = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const generateSecurePassword = () => {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const allCharacters = lowerCase + upperCase + digits;

  const minLength = 8;
  const maxLength = 15;
  const passwordLength =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  let password = "";

  password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
  password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
  password += digits.charAt(Math.floor(Math.random() * digits.length));

  for (let i = password.length; i < passwordLength; i++) {
    password += allCharacters.charAt(
      Math.floor(Math.random() * allCharacters.length)
    );
  }

  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

describe("Registration Tests for Lesson 19", () => {
  beforeEach(() => {
    cy.visit("", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.contains("button", "Sign In").click();
    cy.contains("button", "Registration").click();
  });

  describe("Registration with valid data", () => {
    it("Successful registration", () => {
      const randomStringForEmail = generateRandomString(10);

      const randomPassword = generateSecurePassword();

      cy.get("input#signupName").type("Oleksandr");
      cy.get("input#signupLastName").type("Osadchuk");
      cy.get("input#signupEmail")
        .click()
        .type(`karakurtiara+${randomStringForEmail}@gmail.com`);
      cy.get("input#signupPassword").type(randomPassword);
      cy.get("input#signupRepeatPassword").type(randomPassword);
      cy.contains("button", "Register").click();
      cy.url().should("eq", "https://qauto.forstudy.space/panel/garage");
    });
  });

  describe("Registration with invalid data", () => {
    afterEach(() => {
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration with an empty Name", () => {
      cy.get("input#signupName").click().blur();
      cy.contains("p", "Name required")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with invalid Name", () => {
      cy.get("input#signupName").type("%$$#@@##$").blur();
      cy.contains("p", "Name is invalid")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with one letter in the Name", () => {
      cy.get("input#signupName").type("O").blur();
      cy.contains("p", "Name has to be from 2 to 20 characters long")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with 22 letters in the Name", () => {
      const longName = generateRandomString(22);

      cy.get("input#signupName").type(longName).blur();
      cy.contains("p", "Name has to be from 2 to 20 characters long")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with an empty LastName", () => {
      cy.get("input#signupLastName").click().blur();
      cy.contains("p", "Last name required")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupLastName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with invalid LastName", () => {
      cy.get("input#signupLastName").type("%$$#@@##$").blur();
      cy.contains("p", "Last name is invalid")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupLastName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with one letter in the LastName", () => {
      cy.get("input#signupLastName").type("O").blur();
      cy.contains("p", "Last name has to be from 2 to 20 characters long")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupLastName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with 22 letters in the LastName", () => {
      const longLastName = generateRandomString(22);

      cy.get("input#signupLastName").type(longLastName).blur();
      cy.contains("p", "Last name has to be from 2 to 20 characters long")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupLastName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with an empty Email", () => {
      cy.get("input#signupEmail").click().blur();
      cy.contains("p", "Email required")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupEmail").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with invalid Email", () => {
      cy.get("input#signupEmail").type("assadwwqasdsdas@.com").blur();
      cy.contains("p", "Email is incorrect")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupEmail").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with an empty Password", () => {
      cy.get("input#signupPassword").click().blur();
      cy.get("input#signupRepeatPassword").click().blur();
      cy.contains("p", "Password required")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.contains("p", "Re-enter password required")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.get("input#signupRepeatPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration where Password have 1 symbol", () => {
      cy.get("input#signupPassword").click().type("P");
      cy.get("input#signupRepeatPassword").click().type("P").blur();
      cy.contains(
        "p",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      )
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.contains(
        "p",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      )
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.get("input#signupRepeatPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration where Password have 16 symbols", () => {
      const randomPassword = generateRandomString(16);

      cy.get("input#signupPassword").click().type(randomPassword);
      cy.get("input#signupRepeatPassword").click().type(randomPassword).blur();
      cy.contains(
        "p",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      )
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.contains(
        "p",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      )
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.get("input#signupRepeatPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with Password have small letters", () => {
      cy.get("input#signupPassword").click().type("asasasasas");
      cy.get("input#signupRepeatPassword").click().type("asasasasas").blur();
      cy.contains(
        "p",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      )
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.contains(
        "p",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      )
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.get("input#signupRepeatPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration where the passwords in the fields do not match", () => {
      cy.get("input#signupPassword").click().type("A1sasasasas");
      cy.get("input#signupRepeatPassword").click().type("A1asasasasas1").blur();
      cy.contains("p", "Passwords do not match")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupRepeatPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration where the passwords empty in the second field", () => {
      cy.get("input#signupPassword").click().type("A1sasasasas");
      cy.get("input#signupRepeatPassword").click().blur();
      cy.contains("p", "Re-enter password required")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupRepeatPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });
});
