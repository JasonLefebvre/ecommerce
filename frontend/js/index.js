const cameras = fetch("http://localhost:3000/api/cameras")

const home = document.querySelector(".navbar").querySelector("img");
home.addEventListener("click", function toHome() {
    location.replace("/frontend/index.html")
})

cameras.then(
    (response) => response.json()
).then( (camerasList) => {

    let ids = [];

    camerasList.forEach(element => {

        let divProduct = document.createElement('div');
        divProduct.className = 'product';

        ids.push(`${element._id}`);

        let linkProduct = document.createElement('a');
        linkProduct.href = "/frontend/product.html?id="+ `${element._id}`

        let imgProduct = document.createElement('img');
        imgProduct.src = element.imageUrl;
        imgProduct.setAttribute("id", `${element._id}`)

        let nameProduct = document.createElement('div');
        nameProduct.className = 'nameProduct';
        nameProduct.innerHTML = element.name;

        let priceProduct = document.createElement('div');
        priceProduct.className = 'priceProduct';
        priceProduct.innerHTML = element.price + " €";

        linkProduct.appendChild(imgProduct);
        divProduct.appendChild(linkProduct);
        divProduct.appendChild(nameProduct);
        divProduct.appendChild(priceProduct);

        document.querySelector(".main").appendChild(divProduct);

    })
})