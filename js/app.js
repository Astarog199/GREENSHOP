"use strict";

/**
* Функция назначает обработку клика на card-pictures
*/
function addEvenForProduct_item() {
    let product_item = document.querySelectorAll('.card-pictures');
    product_item.forEach(element => element.addEventListener('click', list_products_block));
}

/**
 * Функция при событии клика по card-pictures получает родителя и обращается к
 * list_products изменяет стиль display = "none" => display = "flex"
 * @param {*} event 'click' 
 * @param {} elem получение list_products
 */

function list_products_block(event) {
    const elem = event.currentTarget.parentNode.querySelector('.list_products');
    elem.style.display = "flex";
};

addEvenForProduct_item();