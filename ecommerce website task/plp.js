const jsonData = {
    "products": [
        {
            "name": "dress 1",
            "price": "99$",
            "imageUrl": "designs/dress1.jpg",
            "colors": [
                "black",
                "brown",
                "blue"
            ],
            "category": "dresses"
        },
        {
            "name": "jecket 1",
            "price": "99$",
            "imageUrl": "designs/jacket1.jpg",
            "colors": [
                "black",
                "brown",
                "blue"
            ],
            "category": "jeckets"
        },
        {
            "name": "jacket 2",
            "price": "99$",
            "imageUrl": "designs/jacket2.jpg",
            "colors": [
                "black",
                "brown",
                "blue"
            ],
            "category": "jackets"
        },
        {
            "name": "jacket 3",
            "price": "99$",
            "imageUrl": "designs/jacket3.jpg",
            "colors": [
                "black",
                "brown",
                "blue"
            ],
            "category": "jackets"
        },
        {
            "name": "jacket 4",
            "price": "99$",
            "imageUrl": "designs/jacket4.jpg",
            "colors": [
                "black",
                "brown",
                "blue"
            ],
            "category": "jackets"
        },
        {
            "name": "blouse 1",
            "price": "99$",
            "imageUrl": "designs/blouse1.jpg",
            "colors": [
                "black",
                "brown",
                "blue"
            ],
            "category": "blouses"
        },
        {
            "name": "blouse 2",
            "price": "99$",
            "imageUrl": "designs/blouse2.jpg",
            "colors": [
                "black",
                "brown",
                "blue"
            ],
            "category": "blouses"
        },
        {
            "name": "dress 2",
            "price": "99$",
            "imageUrl": "designs/dress2.jpg",
            "colors": [
                "black",
                "brown",
                "blue"
            ],
            "category": "dresses"
        }
    ]
};
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById("products-cards");

    for (const product of jsonData.products) {
        container.innerHTML += `<div class="product-card">
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            <p class="product-name">${product.name}</p>
            <p class="product-price">${product.price}</p>
            <span class="product-colors">
                <span class="colors color1"></span>
                <span class="colors color2"></span>
                <span class="colors color3"></span>
                <i class="ph ph-plus"></i>
            </span>
        </div>`;
    }

});

function changeFilterState() {
    const filtersCheck = document.getElementById("filter");
    const filtersList = document.getElementById("filter-list-wide");
    const productCards = document.getElementById("products-cards");
    const filterLabel = document.getElementById("filter-label");
    if (filtersCheck.checked) {
        filtersList.style.display = "none";
        productCards.style.width = "100%"
        filterLabel.innerHTML = ` <i class="ph ph-plus-circle"></i>
        show filters`
    } else {
        filtersList.style.display = "block";
        productCards.style.width = "80%"
        filterLabel.innerHTML = ` <i class="ph ph-plus-circle"></i>
        hide filters`
    }
}

function showRefine() {
    const filterBody = document.getElementById("list-page");
    const shadow = document.getElementById("shadow-page");
    const filterList = document.getElementById("mobile-filter-list-body");
    filterBody.style.display = "flex";
    shadow.style.display = "block";
    filterList.style.display = "block";
}

function hideRefine() {
    const filterBody = document.getElementById("list-page");
    const shadow = document.getElementById("shadow-page");
    const filterList = document.getElementById("mobile-filter-list-body");
    filterBody.style.display = "none";
    shadow.style.display = "none";
    filterList.style.display = "none";
}

function showTypes() {
    const typeList = document.getElementById("type-list");
    const types = document.getElementById("types");
    const icon = document.querySelector(".filters-labels :nth-child(2)");
    if (typeList.checked) {
        types.style.display = "block";
        icon.classList.remove('ph-plus');
        icon.classList.add('ph-minus');
    }
    else {
        types.style.display = "none";
        icon.classList.remove("ph-minus");
        icon.classList.add('ph-plus');

    }
}

function clearChecks() {
    const dresses = document.getElementById('dresses');
    const blouses = document.getElementById('blouses');
    const jackets = document.getElementById('jackets');

    if (dresses.checked) {
        dresses.checked = false
    }
    if (blouses.checked) {
        blouses.checked = false
    }
    if (jackets.checked) {
        jackets.checked = false
    }
    filterProducts()
}

function filterProducts() {
    const container = document.getElementById("products-cards");
        container.innerHTML = "";
    if (dresses.checked || blouses.checked || jackets.checked) {
        if (dresses.checked) {
            for (const product of jsonData.products) {
                if (product.category == "dresses") {
                    container.innerHTML += `<div class="product-card">
                    <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                    <p class="product-name">${product.name}</p>
                    <p class="product-price">${product.price}</p>
                    <span class="product-colors">
                        <span class="colors color1"></span>
                        <span class="colors color2"></span>
                        <span class="colors color3"></span>
                        <i class="ph ph-plus"></i>
                    </span>
                </div>`;
                }
            }
        }
        if (blouses.checked) {

            for (const product of jsonData.products) {
                if (product.category == "blouses") {
                    container.innerHTML += `<div class="product-card">
                    <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                    <p class="product-name">${product.name}</p>
                    <p class="product-price">${product.price}</p>
                    <span class="product-colors">
                        <span class="colors color1"></span>
                        <span class="colors color2"></span>
                        <span class="colors color3"></span>
                        <i class="ph ph-plus"></i>
                    </span>
                </div>`;
                }
            }
        }
        if (jackets.checked) {

            for (const product of jsonData.products) {
                if (product.category == "jackets") {
                    container.innerHTML += `<div class="product-card">
                    <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                    <p class="product-name">${product.name}</p>
                    <p class="product-price">${product.price}</p>
                    <span class="product-colors">
                        <span class="colors color1"></span>
                        <span class="colors color2"></span>
                        <span class="colors color3"></span>
                        <i class="ph ph-plus"></i>
                    </span>
                </div>`;
                }
            }
        }
    }
    else {

        for (const product of jsonData.products) {
            container.innerHTML += `<div class="product-card">
                    <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                    <p class="product-name">${product.name}</p>
                    <p class="product-price">${product.price}</p>
                    <span class="product-colors">
                        <span class="colors color1"></span>
                        <span class="colors color2"></span>
                        <span class="colors color3"></span>
                        <i class="ph ph-plus"></i>
                    </span>
                </div>`;
        }
    }


}
