import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import ManageInsightPage from '../../e2e/pages/manageInsightPage'
import Variables from '../../e2e/utilities/variables'


// SD for Searching Latest Song - Abdul - 14/10/2024
Given('user searches latest song on youtube', () => {
  ManageInsightPage.searchLatestSongInYoutube()
});
