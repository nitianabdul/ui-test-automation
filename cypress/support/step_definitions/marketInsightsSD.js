import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import MarketInsightsPage from '../../e2e/pages/marketInsightsPage'
import Variables from '../../e2e/utilities/variables'


// SD for Searching Latest Song - Abdul - 14/10/2024
Given('user searches latest song on youtube', () => {
  MarketInsightsPage.searchLatestSongInYoutube()
});

