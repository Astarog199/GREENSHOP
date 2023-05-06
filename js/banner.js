document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

//получаем объект 
let slider_pictures = document.querySelector('.banner');

//Создаём иконку загрузки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider_pictures.insertAdjacentElement("afterbegin", loadIcon);

// //Создаём левую стрелку
// let leftArrow = document.createElement('i');
// leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
// slider_pictures.insertAdjacentElement("beforeend", leftArrow);

// //Создаём правую стрелку
// let rightArrow = document.createElement('i');
// rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
// slider_pictures.insertAdjacentElement("beforeend", rightArrow);

/** функция после загрузки картинок обращается к функции hideLoadIcon */
window.addEventListener('load', function () {
    hideLoadIcon(loadIcon);

    // иницилизация слайдера
    images.init();

    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    });
});
/**Функция скрывает иконку после загрузки картинок */
function hideLoadIcon(loadIcon) {
    loadIcon.style.display = "none";
}

/** функция задаёт ширину banner */

function setSizes(slider_pictures) {
    let width = slider_pictures.getAttribute("data-width");
    let height = slider_pictures.getAttribute("data-height");
    if (width !== null && width !== "") {
        slider_pictures.style.width = width;
    }
    if (height !== null && height !== "") {
        slider_pictures.style.height = height;
    }
}
setSizes(slider_pictures);



//Объект слайдера
let images = {
    /** номер текущего изображение */
    currentIdx: 0,
    /**slies элементы слайдов */

    init() {
        this.slides = document.querySelectorAll('.banner .slider .slider_banner_block');
        this.showImageWithCurrentIdx();
    },

    /** удалить класс */
    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');

    },

    /**  скрывает текущей класс     */
    hideVisibleImage() {
        this.slides[this.currentIdx].classList.add("hidden-slide");
    },

    /** переключить на предыдущее изображение */
    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },

    /** переключить на следующее изображение */
    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageWithCurrentIdx();
    },
};




const bannerli = document.querySelectorAll('.banner_ul .banner_li');
console.log(bannerli);


function addEventBannerli() {
    bannerli.forEach(element => element.addEventListener('click', open_banner));
}
addEventBannerli();

function open_banner(event) {
    const target_elem = event.currentTarget.id;
    const target = event.currentTarget;
    opp(target_elem, target);
}

function opp(target_elem, target) {
    bannerli.forEach(element => element.classList.remove('banner_li_active'));
    const banner_1 = document.getElementById('banner_1');
    const banner_2 = document.getElementById('banner_2');
    const banner_3 = document.getElementById('banner_3');

    if (target_elem == 'banner_li_1') {
        target.classList.add('banner_li_active');
        banner_1.classList.remove('hidden-slide');
        banner_2.classList.add('hidden-slide');
        banner_3.classList.add('hidden-slide');
    }

    if (target_elem == 'banner_li_2') {
        target.classList.add('banner_li_active');
        banner_1.classList.add('hidden-slide');
        banner_2.classList.remove('hidden-slide');
        banner_3.classList.add('hidden-slide');
    }

    if (target_elem == 'banner_li_3') {
        target.classList.add('banner_li_active');
        banner_1.classList.add('hidden-slide');
        banner_2.classList.add('hidden-slide');
        banner_3.classList.remove('hidden-slide');
    }
}



var i = 1;

function myLoop() {
    bannerli.forEach(function (element) {
        setTimeout(function () {
            opp(element.id, element);
        }, 5000 * ++i)
    });
}

myLoop();

const num = () => {
    setTimeout(() => {
        myLoop();
        num();
    }, 15000)
}
num();