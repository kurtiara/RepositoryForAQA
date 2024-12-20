describe("Preliminary test suite", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  describe("All buttons in header", () => {
    it("Checking the 'Home' button", () => {
      cy.get(".header-link").eq(0).should("have.text", "Home");
    });

    it("Checking the 'About' button", () => {
      cy.get(".header-link").eq(1).should("have.text", "About");
    });

    it("Checking the 'Contacts' button", () => {
      cy.get(".header-link").eq(2).should("have.text", "Contacts");
    });

    it("Checking the 'Guest log in button' ", () => {
      cy.get(".header-link").eq(3).should("have.text", "Guest log in");
    });
  });

  describe("All socials links in footer", () => {
    it("Checking the 'Facebook' link", () => {
      cy.get(".socials_link")
        .eq(0)
        .should(
          "have.attr",
          "href",
          "https://www.facebook.com/Hillel.IT.School"
        );
    });

    it("Checking the 'Telegram' link", () => {
      cy.get(".socials_link")
        .eq(1)
        .should("have.attr", "href", "https://t.me/ithillel_kyiv");
    });

    it("Checking the 'YouTube' link", () => {
      cy.get(".socials_link")
        .eq(2)
        .should(
          "have.attr",
          "href",
          "https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"
        );
    });

    it("Checking the 'Instagram' link", () => {
      cy.get(".socials_link")
        .eq(3)
        .should(
          "have.attr",
          "href",
          "https://www.instagram.com/hillel_itschool/"
        );
    });

    it("Checking the 'LinkedIn' link", () => {
      cy.get(".socials_link")
        .eq(4)
        .should(
          "have.attr",
          "href",
          "https://www.linkedin.com/school/ithillel/"
        );
    });

    it("Checking site link", () => {
      cy.get(".contacts_link")
        .eq(0)
        .should("have.attr", "href", "https://ithillel.ua");
    });

    it("Checking email link", () => {
      cy.get(".contacts_link")
        .eq(1)
        .should("have.attr", "href", "mailto:developer@ithillel.ua");
    });
  });
});
