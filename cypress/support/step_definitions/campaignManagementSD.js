import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import CampaignManagementPage from '../../e2e/pages/campaignManagementPage'
import Variables from '../../e2e/utilities/variables'


// SD for Searching Iphone 15 - Abdul - 14/10/2024
Given('user searches iphone15 on amazon', () => {
    CampaignManagementPage.searchIphone()
});
