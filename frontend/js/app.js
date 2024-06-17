const cameras = fetch("http://localhost:3000/api/cameras")

const home = document.querySelector(".navbar").querySelector("img");
home.addEventListener("click", function toHome() {
    location.replace("/frontend/index.html")
})

cameras.then(
    (response) => response.json()
).then( (camerasList) => {

    camerasList.forEach(element => {

        let divProduct = document.createElement('div');
        divProduct.className = 'product';

        let imgProduct = document.createElement('img');
        imgProduct.src = element.imageUrl;

        let nameProduct = document.createElement('div');
        nameProduct.className = 'nameProduct';
        nameProduct.innerHTML = element.name;

        let priceProduct = document.createElement('div');
        priceProduct.className = 'priceProduct';
        priceProduct.innerHTML = element.price + " €";

        divProduct.appendChild(imgProduct);
        divProduct.appendChild(nameProduct);
        divProduct.appendChild(priceProduct);

        divProduct.addEventListener('click', function redirectionProduct() {
            location.replace("/frontend/cart.html")
        });

        document.querySelector(".main").appendChild(divProduct);
    })
})