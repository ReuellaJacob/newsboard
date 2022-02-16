import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express'

require('dotenv').config()
console.log(process.env)

function fetchNews() {
    require('dotenv').config()
    const result = dotenv.config()
    console.log(result.parsed);
    const apiKey = process.env.NEWS_API_KEY
    // console.log(apiKey);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`;
    let request = new XMLHttpRequest()
    request.addEventListener("load", responseReceivedHandler)
    request.responseType = "json"
    request.open("GET", url)
    request.send()
}

function responseReceivedHandler() {
    console.log(this.status);
    if (this.status === 200) {
        displayNews(this.response["articles"])
    }
}

function displayNews(articles) {
    console.log(articles);
    for (let i = 0; i < articles.length; i++) {
        document.querySelector(".test").innerHTML += articles[i]["title"] + "<br>";
    }
}

fetchNews()
