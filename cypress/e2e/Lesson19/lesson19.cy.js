describe("Registration and Login Tests for Lesson 19", () => {
  beforeEach(() => {
    cy.visit("", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  describe("Registration with invalid data", () => {
    it("Registration with an empty Name", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName").click().blur().should("have.value", "");
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.get("input#signupRepeatPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.contains("p", "Name required")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration with invalid Name", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("%$$#@@##$")
        .should("have.value", "%$$#@@##$");
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.get("input#signupRepeatPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.contains("p", "Name is invalid")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.contains("button", "Register").should("be.disabled");
      cy.get("input#signupName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with one letter in the Name", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName").type("O").should("have.value", "O");
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.get("input#signupRepeatPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.contains("p", "Name has to be from 2 to 20 characters long")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.contains("button", "Register").should("be.disabled");
      cy.get("input#signupName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });

    it("Registration with 22 letters in the Name", () => {
      const generateRandomString = (length) => {
        const characters = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        return result;
      };

      const longName = generateRandomString(22);

      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName").type(longName).should("have.value", longName);
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.get("input#signupRepeatPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.contains("p", "Name has to be from 2 to 20 characters long")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration with an empty LastName", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName").click().blur().should("have.value", "");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.get("input#signupRepeatPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.contains("p", "Last name required")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupLastName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration with invalid LastName", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName")
        .type("%$$#@@##$")
        .should("have.value", "%$$#@@##$");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.get("input#signupRepeatPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.contains("p", "Last name is invalid")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupLastName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration with one letter in the LastName", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName").type("O").should("have.value", "O");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.get("input#signupRepeatPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.contains("p", "Last name has to be from 2 to 20 characters long")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupLastName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration with 22 letters in the LastName", () => {
      const generateRandomString = (length) => {
        const characters = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        return result;
      };

      const longLastName = generateRandomString(22);

      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName")
        .type(longLastName)
        .should("have.value", longLastName);
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.get("input#signupRepeatPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.contains("p", "Last name has to be from 2 to 20 characters long")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupLastName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration with an empty Email", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail").click().blur().should("have.value", "");
      cy.get("input#signupPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.get("input#signupRepeatPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.contains("p", "Email required")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupEmail").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration with invalid Email", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail")
        .type("assadwwqasdsdas@.com")
        .should("have.value", "assadwwqasdsdas@.com");
      cy.get("input#signupPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.get("input#signupRepeatPassword")
        .type("P@$$wOrdIs1")
        .should("have.value", "P@$$wOrdIs1");
      cy.contains("p", "Email is incorrect")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupEmail").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration with an empty Password", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword").click().blur().should("have.value", "");
      cy.get("input#signupRepeatPassword")
        .click()
        .blur()
        .should("have.value", "");
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
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration where Password have 1 symbol", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .click()
        .type("P")
        .should("have.value", "P");
      cy.get("input#signupRepeatPassword")
        .click()
        .type("P")
        .should("have.value", "P")
        .blur();
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
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration where Password have 16 symbols", () => {
      const generateRandomPassword = (length) => {
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        return result;
      };

      const randomPassword = generateRandomPassword(16);

      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .click()
        .type(randomPassword)
        .should("have.value", randomPassword);
      cy.get("input#signupRepeatPassword")
        .click()
        .type(randomPassword)
        .should("have.value", randomPassword)
        .blur();
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
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration with Password have small letters", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .click()
        .type("asasasasas")
        .should("have.value", "asasasasas");
      cy.get("input#signupRepeatPassword")
        .click()
        .type("asasasasas")
        .should("have.value", "asasasasas")
        .blur();
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
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration where the passwords in the fields do not match", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .click()
        .type("A1sasasasas")
        .should("have.value", "A1sasasasas");
      cy.get("input#signupRepeatPassword")
        .click()
        .type("A1asasasasas1")
        .should("have.value", "A1asasasasas1")
        .blur();
      cy.contains("p", "Passwords do not match")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupRepeatPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.contains("button", "Register").should("be.disabled");
    });

    it("Registration where the passwords empty in the second field", () => {
      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail")
        .type("karakurtiara+test1@gmail.com")
        .should("have.value", "karakurtiara+test1@gmail.com");
      cy.get("input#signupPassword")
        .click()
        .type("A1sasasasas")
        .should("have.value", "A1sasasasas");
      cy.get("input#signupRepeatPassword")
        .click()
        .clear()
        .should("have.value", "")
        .blur();
      cy.contains("p", "Re-enter password required")
        .should("be.visible")
        .and("have.css", "color", "rgb(220, 53, 69)");
      cy.get("input#signupRepeatPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
      cy.contains("button", "Register").should("be.disabled");
    });
  });

  describe("Registration with valid data", () => {
    it("Successful registration", () => {
      const generateRandomString = (length = 10) => {
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        return result;
      };

      const randomStringForEmail = generateRandomString();

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

        password += lowerCase.charAt(
          Math.floor(Math.random() * lowerCase.length)
        );
        password += upperCase.charAt(
          Math.floor(Math.random() * upperCase.length)
        );
        password += digits.charAt(Math.floor(Math.random() * digits.length));

        for (let i = password.length; i < passwordLength; i++) {
          password += allCharacters.charAt(
            Math.floor(Math.random() * allCharacters.length)
          );
        }

        password = password
          .split("")
          .sort(() => Math.random() - 0.5)
          .join("");

        return password;
      };

      const randomPassword = generateSecurePassword();

      cy.contains("button", "Sign In").click();
      cy.contains("button", "Registration").click();
      cy.get("input#signupName")
        .type("Oleksandr")
        .should("have.value", "Oleksandr");
      cy.get("input#signupLastName")
        .type("Osadchuk")
        .should("have.value", "Osadchuk");
      cy.get("input#signupEmail")
        .click()
        .type(`karakurtiara+${randomStringForEmail}@gmail.com`)
        .should("have.value", `karakurtiara+${randomStringForEmail}@gmail.com`);
      cy.get("input#signupPassword")
        .type(randomPassword)
        .should("have.value", randomPassword);
      cy.get("input#signupRepeatPassword")
        .type(randomPassword)
        .should("have.value", randomPassword);
      cy.contains("button", "Register").click();
      cy.url().should("eq", "https://qauto.forstudy.space/panel/garage");
    });
  });
});
