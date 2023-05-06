"use strict";

/**
 * формирование каталога
 */

class Product {
  /**
  * @param {number} id  уникальный идентификатор каждого товара
  * @param {string} foto  изображение товара
  * @param {string} title  название товара
  * @param {number} price цена товара
  */

  constructor(id, foto, title, price) {
    this.id = id;
    this.foto = foto;
    this.title = title;
    this.price = price;
  }

}

