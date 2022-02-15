import 'dotenv/config'

function fetchNews() {
    require('dotenv').config()
    const apiKey = process.env.NEWS_API_KEY
    console.log(apiKey);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`
    let request = new XMLHttpRequest()
    request.addEventListener("load", responseReceivedHandler)
    request.responseType = "json"
    request.open("GET", url)
    request.send()
}

function responseReceivedHandler() {
    console.log(this.status);
    if (this.status === 200) {
        displayNews(this.response)
    }
}

function displayNews() {

}

fetchNews()