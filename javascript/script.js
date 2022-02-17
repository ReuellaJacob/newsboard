function fetchNews() {
    const apiKey = ''
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
    for (const article of articles) {
        const pTag = document.createElement('p')
        const imgTag = document.createElement('img')

        pTag.innerHTML = article[title]
        imgTag.src = article[imageUrl]
        imgTag.classList.add('image')

        articleTag.append(pTag)
        articleTag.append(imgTag)
    }
}

fetchNews()
