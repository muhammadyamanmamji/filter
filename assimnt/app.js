let prouducts = {
    data: [
        {
            productsName: "Regular White t-Shirt",
            category: "Topwear",
            price: "30",
            image: "white-tshrit-.jpg",
        },
        {
            productsName: "Beinge Short Skirt",
            category: "Bottomware",
            price: "49",
            image: "short-skirt.jpg",
        },
        {
            productsName: "Sporty SmartWatch ",
            category: "Watch",
            price: "99",
            image: "sport-smartwatch.jpg",
        },
        {
            productsName: "Basic knitted top",
            category: "Topware",
            price: "29",
            image: "knit-top.jpg",
        },
        {
            productsName: "black leather Jacket",
            category: "Jacket",
            price: "129",
            image: "Black-leather-Jacket.jpg",
        },
        {
            productsName: "styles pink trousers",
            category: "Bottomware",
            price: "89",
            image: "styles-pink-trousers.jpg",
        },
        {
            productsName: "brown men's jacket",
            category: "Jacket",
            price: "189",
            image: "brown- jacket.jpg",
        },
        {
            productsName: "comfy gray pants",
            category: "Bottomware",
            price: "49",
            image: "comfy-gra-pants.jpg",
        },

    ]
}

for (let i of prouducts.data) {
    // create Cade
    // console.log(i)
    let card = document.createElement("div");
    // Cade Should have category and should stay hidden initially 
    card.classList.add("Card", i.category, "hide");
    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // Container
    let container = document.createElement("div");
    container.classList.add("container")
    // product name
    let name = document.createElement("h5")
    name.classList.add("product-name")
    name.innerText = i.productsName.toUpperCase()
    container.appendChild(name);

    // price
    let price = document.createElement("h6")
    price.innerText = "$" + i.price;
    container.appendChild(price)




    card.appendChild(container)

    document.getElementById("products").appendChild(card)
}

//parameter passed from button (parameter same as category)

function filterProduct(value) {

    // button class  node
    let buttons = document.querySelectorAll(".button-value");


    buttons.forEach(button => {
        //check if value equals innerText 
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active")
        }
        else { button.classList.remove("active") }

    });

    // select all card

    let elements = document.querySelectorAll(".Card")
    // loop thought all cards
    elements.forEach(element => {
        //display all card on 'all' button click
        if (value == "all") {
            element.classList.remove("hide")
        }
        else{
            // chack if element contains category class
            if(element.classList.contains(value)){
                // display element based on category
                element.classList.remove("hide")
            }
            else{
                // hide other elements
                element.classList.add("hide")
            }


        }
    
    });


}

// search button click

document.getElementById("search").addEventListener("click",() => {

    // initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name")
    let cards = document.querySelectorAll(".Card")
    
    // loop through all elements
    elements.forEach((element,index) =>{

        // check if text includes the search value

        if(element.innerText.includes(searchInput.toUpperCase())){

            // display matching cards
            cards[index].classList.remove("hide")
        }
        else{
            // hide other
            cards[index].classList.add("hide")
        }
    }
        )
})

// intially display all prouducts

window.onload = () => {

    filterProduct("all")
}