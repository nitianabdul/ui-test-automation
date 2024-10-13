
import '../../support/commands'
import JsUtils from '../utilities/jsUtils'
import Variables from '../utilities/variables'

const youtubeURL = 'https://www.youtube.com/';
const searchInput = '//input[contains(@id,"search")]'
const searchIcon = '//button[contains(@id,"search-icon-legacy")]//*[local-name()="svg"]'

class manageInsightPage {

    // Method for Searching Latest Song - Abdul - 14/10/2024
    static searchLatestSongInYoutube(){
        cy.visit(youtubeURL);
        cy.xpath(searchInput).type('Latest song 2024')
        cy.wait(1000)
        cy.xpath(searchIcon).click({ force: true })
    }

}

export default manageInsightPage