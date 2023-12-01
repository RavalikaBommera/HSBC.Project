

import HomePage from "./HomePage.cy";
import LogonPage from "./LogonPage.cy";


describe('Login', () => {
  let userdata : { email : any; };

  before(function(){
    cy.fixture('example').then(function(data){
    userdata = data;
    return userdata;
      
    });
  })
  it('visits the homePagepage',() => {
    const homePage = new HomePage();
    const logonPage = new LogonPage();
    homePage.visit();
    homePage.clickLogonButton();

    logonPage.checkContinueButtonStatus();
    logonPage.checkRemCBIsUnchecked();
    logonPage.checkUserNameIsBlank();
    
    logonPage.enterUserName(userdata.email);
    logonPage.Clickicon();
    logonPage.Clickdeleteicon();
    logonPage.checkRemCBIclick();
    logonPage.checkRemCBIischecked();
   
  })
})
