/// <reference types= "cypress" />
describe('Almosafer Flight Search Test', () => {
    
    it('should the departure date is set to be todays date +1', () => {
        cy.visit("https://www.almosafer.com/ar")
        cy.get('.cta__saudi').click()

        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        let departureDate = String(currentDate.getDate());
        cy.get('[data-testid="FlightSearchBox__FromDateButton"]').should('include.text',`${departureDate}`);
    });
    it('should the return date is set to be todays date +2', () => {
        cy.visit("https://www.almosafer.com/ar")
        cy.get('.cta__saudi').click()

        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 2);
        let returnDate = String(currentDate.getDate());
        cy.get('[data-testid="FlightSearchBox__ToDateButton"]').should('include.text',`${returnDate}`);
    });
    it('should that the flight class is set to be economy by default', () => {
        cy.visit("https://www.almosafer.com/ar")
        cy.get('.cta__saudi').click();
        
        cy.get('.sc-jWxkHr').should('contain.text', 'السياحية');
    });

});