const cron = require('node-cron');

const { fetchingDribbbleData,  fetchingGithubData } = require('./fetchapi')

cron.schedule ('* * * * *', () => {
    fetchingDribbbleData()
    fetchingGithubData()
})
