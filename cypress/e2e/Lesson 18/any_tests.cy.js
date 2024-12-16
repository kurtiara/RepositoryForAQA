describe("Preliminary test suite", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it.only("All buttons in header", () => {
    cy.get(".header-link").should("have.length", 4);
    cy.get(".header-link").should("have.text", "HomeAboutContactsGuest log in");
    cy.get(".header-link").eq(0).should("have.text", "Home");
    cy.get(".header-link").eq(1).should("have.text", "About");
    cy.get(".header-link").eq(2).should("have.text", "Contacts");
    cy.get(".header-link").eq(3).should("have.text", "Guest log in");
  });

  it.only("All links in footer", () => {
    cy.get(".header-link").should("have.length", 4);
    cy.get(".header-link").should("have.text", "HomeAboutContactsGuest log in");
    cy.get(".header-link").eq(0).should("have.text", "Home");
    cy.get(".socials_link")
      .eq(0)
      .should("have.attr", "href", "https://www.facebook.com/Hillel.IT.School");
    cy.get(".socials_link")
      .eq(1)
      .should("have.attr", "href", "https://t.me/ithillel_kyiv");
    cy.get(".socials_link")
      .eq(2)
      .should(
        "have.attr",
        "href",
        "https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"
      );
    cy.get(".socials_link")
      .eq(3)
      .should(
        "have.attr",
        "href",
        "https://www.instagram.com/hillel_itschool/"
      );
    cy.get(".socials_link")
      .eq(4)
      .should("have.attr", "href", "https://www.linkedin.com/school/ithillel/");
    cy.get(".contacts_link")
      .eq(0)
      .should("have.attr", "href", "https://ithillel.ua");
    cy.get(".contacts_link")
      .eq(1)
      .should("have.attr", "href", "mailto:developer@ithillel.ua");
  });
});
