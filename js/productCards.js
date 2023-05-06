'use strict';

const product_item = document.querySelector('.products_catalog');

/**
 * Эта функция принимает один из объектов из массива products в файле products.js.
 * @param {Product} product объект с информацией о продукте
 * @returns {string} html-разметка карточки товара
 */

function renderProducts(product) {
    return ` 
    <div class="product-item">
        <img class="card-pictures" ${product.foto} alt="foto">     
        
        <ul  class="list_products">
        <li> <button data-productId="${product.id}" class="add_basket button_products"> <img src="style/pictures/basket.png" alt="basket"></button> </li>
        <li> <button class="dont like button_products"> <img src="style/pictures/like.png" alt="like"> </button> </li>
        <li > <button class="search button_products"> <img src="style/pictures/search.png" alt="search"></button> </li>
        </ul>    

        <h3>${product.title}</h3>
        <p class="">price: <span class="cardPrice"> ${product.price} </span> $</p>
     </div>
    `;
};

/**
* Функция вставляет карточки товаров в страницу.
* @param {Product[]} products массив товаров из файла products.js
* @param {HTMLDivElement} product_item элемент с классом .products
*/

function add_product(products, product_item) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += renderProducts(product);
    }
    product_item.insertAdjacentHTML('afterbegin', productsMarkup);
}

/**
* Функция назначает обработку клика на все кнопки добавления товара в корзину
*/

function addEventListenersForAddToCartButtons() {
    const product_btn = document.querySelectorAll('button[data-productId]');
    product_btn.forEach(element => element.addEventListener('click', add_product_to_cart));
}

function add_product_to_cart(event) {
    // const elem = event.currentTarget.parentNode.parentNode.parentNode.querySelector('h3');
    // const productName = elem.textContent;
    // alert(productName + " добавлен в корзину.");

    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
};


add_product(products, product_item);
addEventListenersForAddToCartButtons()
