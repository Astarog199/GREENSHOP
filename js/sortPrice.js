'use strict'

// получение всех товаров
const getProductListForSortPrice = document.querySelectorAll('.product-item');

// получение строки ввода "цена от" с событием change
const fromInput = document.getElementById('from');
fromInput.addEventListener('change', changedPriceHandler);


// получение строкии ввода "цена до" с событием change
const toInput = document.getElementById('to');
toInput.addEventListener('change', changedPriceHandler);

/** обработчик события changedPriceHandler */
function changedPriceHandler() {
    console.log('changed');

    const fromPrice = fromInput.value;
    const toPrice = toInput.value;

    if (fromPrice === "" && toPrice === "") {
        reset();
    } else if (fromPrice !== "" && toPrice === "") {
        showProductsWithFromPrice();
    } else if (fromPrice === "" && toPrice !== "") {
        showProductsWithToPrice();
    } else if (fromPrice !== "" && toPrice !== "") {
        showProductsWithBothPrice();
    }
}

/** показывает все скрытые элементы */
function reset() {
    getProductListForSortPrice.forEach(function (product) {
        if (isProductHiden(product)) {
            showProduct(product);
        }
    });
}

/** Показывает продукты с диапазоном цен "от" */
function showProductsWithFromPrice() {
    const fromPrice = Number(fromInput.value);
    getProductListForSortPrice.forEach(function (product) {
        const productPrice = Number(product.querySelector('.cardPrice').textContent.trim());
        if (productPrice < fromPrice) {
            hideProduct(product);
        } else {
            showProduct(product);
        }
    });
}

/** Показывает продукты с диапазоном цен "до" */
function showProductsWithToPrice() {
    const toPrice = Number(toInput.value);
    getProductListForSortPrice.forEach(function (product) {
        const productPrice = Number(product.querySelector('.cardPrice').textContent.trim());
        if (productPrice > toPrice) {
            hideProduct(product);
        } else {
            showProduct(product);
        }
    });
}

/** Показывает продукты с обеими диапазоном  */
function showProductsWithBothPrice() {
    const fromPrice = Number(fromInput.value);
    const toPrice = Number(toInput.value);
    if (fromPrice > toPrice) {
        alert("ошибка. Цена ОТ не может быть юольше цены ДО.")
        return;
    }
    getProductListForSortPrice.forEach(function (product) {
        const productPrice = Number(product.querySelector('.cardPrice').textContent.trim());
        if (productPrice >= fromPrice && productPrice <= toPrice) {
            showProduct(product)
        } else {
            hideProduct(product);
        }
    });
}

/** скрыть товар */
function hideProduct(product) {
    product.style.display = 'none';
}

/** показать товар  */
function showProduct(product) {
    product.style.display = 'block';
}

function isProductHiden(product) {
    return product.style.display = 'none';
}

//slider
addEventListener('input', e => {
    let _t = e.target;
    _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value)
}, false);

