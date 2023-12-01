class HomePage {
    visit(){
        cy.visit('https://www.hsbc.co.in/')
        //logon button should be visible
    }

    clickLogonButton(){
        cy.get('.selected-item').contains(" Log On ").click({force: true});
}
Validatetitle(){
    cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit')
}
checkLogonButton(){
    cy.get('.selected-item').contains(" Log On ");
    return true;
}
}
export default HomePage;
