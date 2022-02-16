function fetchNews() {
    const apiKey = '6ceb3e705a004d81b3e940276efefd61'
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
    } else {
        console.log(this.status);
    }
}

function displayNews(response) {
    // check response
    console.log(response);

    // properties
    const articles = response['articles']

    // tags
    const articleTag = document.querySelector("#news")

    // keys
    const author = 'author'
    const content = 'content'
    const description = 'description'
    const publishedAt = 'publishedAt'
    const source = 'source'
    const title = 'title'
    const url = 'url'
    const imageUrl = 'urlToImage'

    // parse news data
    let newsContent
    for (const article of articles) {
        newsContent += `${article[title]} <br>`
    }

    articleTag.innerHTML = newsContent
}

fetchNews()
