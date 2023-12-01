class LogonPage{

    clickLogonButton(){
    }
    checkContinueButtonStatus(){
        cy.get('button[name="continue"]').should('be.disabled');
    }

    checkUserNameIsBlank(){
       const un =  this.getUserName();
        un.should('have.value','');
    }
    checkRemCBIsUnchecked(){
        cy.get('[type="checkbox"]').should('not.be.checked');
    }
   getUserName(){
        return cy.get('input[name="name"]');
    }
    enterUserName(username:any){
        const un =this.getUserName();
        un.type(username);
    }


    clearUserName(){
        const un = this.getUserName();
        un.clear();
    }
    
   Clickicon(){
        cy.get('span[class="sr-only"]').click({force: true});
    }
    Clickdeleteicon(){
        cy.get('span[class="icon icon-delete"]').click();
    }
    checkRemCBIclick(){
        cy.get('[type="checkbox"]').click();
    }
    checkRemCBIischecked(){
        cy.get('[type="checkbox"]').should('be.checked')
    }
    
   


}



export default LogonPage;