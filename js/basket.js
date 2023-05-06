
const basketCounterEl = document.querySelector('.rightHeader .basket_icon .basketIconWrap span');
const div_basket = document.querySelector('.basket');

const basketTotalEl = document.querySelector('.basketTotal');
const openBasketBtn = document.querySelector('.rightHeader .basket_icon');
const basketTotalValueEl = document.querySelector('.basketTotalValue');


//открыть и скрыть корзину
openBasketBtn.addEventListener('click', function () {
    div_basket.classList.toggle('hidden');
});

/**
 * Функция увеличивает счетчик количества товаров рядом с иконкой корзины.
 */
function increaseProductsCount() {
    basketCounterEl.textContent++;
}


/**
 * В корзине хранится количество каждого товара
 * Ключ это id продукта, значение это количество товаров в корзине, например:
 {
    1: 10,
    3: 2
 }
 */
let basket = {};

/**
* Функция добавляет продукт в объект basket.
*/

function addProductToObject(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}



/**
 * Функция срабатывает когда нужно отрисовать продукт в корзине.
 * @param {number} productId
 */
function renderProductInBasket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    } else {
        renderNewProductInBasket(productId);
    }
}

/**
 * Функция увеличивает количество товаров в строке в корзине.
 * @param {number} productId
 */
function increaseProductCount(productId) {
    const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}


/**
 * Функция пересчитывает стоимость товара умноженное на количество товара
 * в корзине.
 * @param {number} productId
 */

function recalculateSumForProduct(productId) {

    const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceForRow = basket[productId] * products[productId].price;
    productTotalRowEl.textContent = totalPriceForRow;
    console.log(basket[productId]);

}

/**
 * Функция пересчитывает общую стоимость корзины и выводит это значение на страницу.
 */
function calculateAndRenderTotalBasketSum() {
    let totalSum = 0;
    for (let productId in basket) {
        totalSum += basket[productId] * products[productId].price;
    }
    basketTotalValueEl.textContent = totalSum.toFixed(2);

}

/**
 * функция добавляет разметку в корзину
 */

function renderNewProductInBasket(productId) {
    let productRow = `        
        <div class="basketRow">
            <div>  <img class="basket-pictures"${products[productId].foto} alt="foto">  </div>
            <div><h3>${products[productId].title}</h3></div>
            <div> <span class="productCount" data-productId="${productId}">1</span> шт. </div>
            <div>$${products[productId].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
            </div>
        </div>        
    `;
    basketTotalEl.insertAdjacentHTML('beforebegin', productRow);
}


function addProductIntoBasket(productId) {
    increaseProductsCount();
    addProductToObject(productId);
    renderProductInBasket(productId);
    calculateAndRenderTotalBasketSum();
}