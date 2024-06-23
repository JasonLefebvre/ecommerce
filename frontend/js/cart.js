const cameras = fetch("http://localhost:3000/api/cameras");

const home = document.querySelector(".navbar").querySelector("img");
home.addEventListener("click", function toHome() {
    location.replace("/frontend/index.html");
})

const storage = JSON.parse(localStorage.getItem("cart"));

let articles = document.querySelector(".articles");

if (storage.length > 0) {
    
    storage.forEach(item => {
        let article = document.createElement("div");
        article.classList.add("article");

        let articleName = document.createElement("div");
        articleName.classList.add("article-name");
        articleName.innerHTML = item.name + " - " + (item.price).toLocaleString() + " €";

        let articleImage = document.createElement("img");
        articleImage.src = item.image;

        let articleQuantity = document.createElement("div");
        articleQuantity.classList.add("article-quantity");
        articleQuantity.innerHTML = "quantité : " + item.quantity;

        let articlePrice = document.createElement("div");
        articlePrice.classList.add("article-price");
        let priceToDisplay = parseInt(item.quantity) * parseInt(item.price)
        articlePrice.innerHTML = priceToDisplay.toLocaleString() + " €"

        article.appendChild(articleName);
        article.appendChild(articleImage);
        article.appendChild(articleQuantity);
        article.appendChild(articlePrice);

        // Faire pour changer la quantité et supprimer ????

        articles.appendChild(article);
    })
}

// cameras.then((response) => response.json()).then((camerasList) => {
// });