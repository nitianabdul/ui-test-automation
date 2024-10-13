import '../../support/commands'
import JsUtils from '../utilities/jsUtils'
import Variables from '../utilities/variables'

const amazonURL = 'https://www.amazon.in/';
const searchInput = '//input[contains(@id,"twotabsearchtextbox")]'

const waitOneSecond = 1000

class campaignManagementPage {

    // Method for Searching Iphone 15 - Abdul - 14/10/2024
    static searchIphone(){
        cy.visit(amazonURL);
        cy.xpath(searchInput).type('Iphone15').type('{enter}')
    }

}

export default campaignManagementPage