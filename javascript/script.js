function fetchNews() {
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
        document.querySelector(".test").innerHTML = this.response
        displayNews(this.response["articles"])

    }
}

function displayNews(articles) {
    for (let i = 0; i < articles; i++) {
        console.log(articles[i]);
        articles[i]["title"]
    }
}

fetchNews()
