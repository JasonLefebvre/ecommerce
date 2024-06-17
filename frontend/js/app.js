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

        let imgProduct = document.createElement('img');
        imgProduct.src = element.imageUrl;
        imgProduct.setAttribute("id", `${element._id}`)

        let nameProduct = document.createElement('div');
        nameProduct.className = 'nameProduct';
        nameProduct.innerHTML = element.name;

        let priceProduct = document.createElement('div');
        priceProduct.className = 'priceProduct';
        priceProduct.innerHTML = element.price + " €";

        divProduct.appendChild(imgProduct);
        divProduct.appendChild(nameProduct);
        divProduct.appendChild(priceProduct);

        imgProduct.addEventListener('click', function redirectionProduct(e) {
            // location.replace("/frontend/product.html");
            let idProduct = e.currentTarget.getAttribute("id");
            
            switch (idProduct) {
                case ids[0]:
                    // check pathname, si c'est product, create elements, sinon caca
                    location.pathname
                    console.log(camerasList[0].name);
                    break;
                case ids[1]:
                    console.log(camerasList[1].name);
                    break;
                case ids[2]:
                    console.log(camerasList[2].name);
                    break;
                case ids[3]:
                    console.log(camerasList[3].name);
                    break;
                case ids[4]:
                    console.log(camerasList[4].name);
                    break;
                default:
                    break;
            }
        });

        document.querySelector(".main").appendChild(divProduct);
    })
})