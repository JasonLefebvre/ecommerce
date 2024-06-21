let params = new URLSearchParams(document.location.search);
let idProduct = params.get("id");

const home = document.querySelector(".navbar").querySelector("img");
home.addEventListener("click", function toHome() {
    location.replace("/frontend/index.html");
})

const camera = fetch("http://localhost:3000/api/cameras/" + idProduct);

camera.then( (response) => response.json()).then( (element) =>{

    document.querySelector("title").innerHTML = "Orinoco - " + element.name;

    let titleProduct = document.createElement("h1");
    titleProduct.innerHTML = element.name;

    let imageProduct = document.createElement("img");
    imageProduct.src = element.imageUrl;

    let divDescription = document.createElement("div");
    divDescription.classList.add("description");
    divDescription.innerHTML = element.description;

    let divParameters = document.createElement("from");
    divParameters.classList.add("parameters");

    let chooseLense = document.createElement("label");
    chooseLense.setAttribute("for", "lense-select");
    chooseLense.innerHTML = "Choisi ta lentille";

    let selector = document.createElement("select");
    selector.setAttribute("name", "lense");
    selector.setAttribute("id", "lense-select");

    let lenses = element.lenses;

    lenses.forEach(element => {
        let lense = document.createElement("option");
        lense.innerHTML = element;
        lense.value = element;
        selector.appendChild(lense);
    });

    let quantity = document.createElement('div');
    quantity.innerHTML = "Quantité : ";
    quantity.setAttribute("for", "quantity");

    let inputQuantity = document.createElement('input');
    inputQuantity.type = "number";
    inputQuantity.required = true;
    inputQuantity.setAttribute("id", "quantity");

    divParameters.appendChild(chooseLense);
    divParameters.appendChild(selector);
    divParameters.appendChild(quantity);
    divParameters.appendChild(inputQuantity);

    let price = document.createElement("div");
    price.innerHTML = "Prix : " + element.price + " €";

    let buyButton = document.createElement("button");
    buyButton.innerHTML = "Ajouter au panier"

    let main = document.querySelector('.main_product');

    main.appendChild(titleProduct);
    main.appendChild(imageProduct);
    main.appendChild(divDescription);
    main.appendChild(divParameters);
    main.appendChild(price);
    main.appendChild(buyButton);

    buyButton.addEventListener("click", () => {
        let chosenLense = selector.value;
        let chosenQuantity = inputQuantity.value;

        if (chosenQuantity !== "") {

            let cart = JSON.parse(localStorage.getItem("cart"));

            let order = {
                name: element.name,
                image : element.imageUrl,
                lense: chosenLense,
                quantity: chosenQuantity,
                price : element.price * parseInt(chosenQuantity)
            }

            if (cart === null) {
                cart = [];
            }

            cart.push(order);

            localStorage.setItem("cart", JSON.stringify(cart));

        } else {
            alert("Quantité invalide");
        }
    })
});