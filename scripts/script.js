'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});
    // * 1. Начало.
    // * 2. Получаем все элементы изображения с описанием.
    // * 3. Для каждого изображения (проверяем есть ли такие изображения):
    // *    3.1. Добавляем обработчик наведения курсора на изображение:
    // *        3.1.1. Да:
    // *            3.1.1.1. Показываем текст при наведении.
    // *            3.1.2. Нет: продолжаем.
    // *    3.2. Добавляем обработчик курсор уходит с изображения:
    // *        3.3.1. Да:
    // *            3.3.1.1. Скрываем элемент с описанием.
    // *        3.3.2. Нет: продолжаем
    // * 4. Конец.
    const intensiveImg = document.querySelector(".header__logo");
    intensiveImg.addEventListener('mouseenter', () => {
            console.log('Мышка наведена на изображение, показываем текст');
        });
const cardsContainer = document.querySelector(".reviews");
if(cardsContainer) {
    const dataTitleCards = [
        "Наташа Петрова",
        "Андрей Попов",
    ];

    const titleCards = 
        cardsContainer.querySelectorAll(".reviews__subtitle");

        titleCards.forEach((item, index) => {
        item.textContent = dataTitleCards[index];
        });
}

const registrButtonModal = document.querySelector(".menu__button-registr");
const modalRegistration = document.querySelector(".registrations");

if (registrButtonModal && modalRegistration) {
    registrButtonModal.addEventListener("click", () => {
      modalRegistration.removeAttribute("hidden");
    });
}
window.addEventListener("click", (event) => {
    if (event.target === modalRegistration) {
        modalRegistration.setAttribute("hidden", true);
    }
});
const closeModalButton = document.querySelector(".registration__close");

closeModalButton.addEventListener("click", () => {
    modalRegistration.setAttribute("hidden", true);
});

const headerMenu = document.querySelector('.header__menu');
if (headerMenu){
    const headerList = headerMenu.querySelector('.menu');
    const menuData = {
        link0:{
            link: '/',
            title: 'Главная',
        },
        link1: {
            link: '#about',
            title: 'О нас',
        },
        link2: {
            link: '#courses',
            title: 'Курсы',
        },
        link3: {
            link: '#reviews',
            title: 'Отзывы',
        }
    }
    const createLink = (UrlLink, title) =>{
            const link = `
                <li class="menu__item">
                    <a class="menu__link" href="${UrlLink}">${title}</a>
                </li>  
        `;
        return link;
    }
    for (const linkItem in menuData) {
        const link = menuData[linkItem];
        const linkIndex = createLink(link.link, link.title);
        headerList.insertAdjacentHTML('beforeend', linkIndex);
    }
}
/**
 <div class="about__wrap-right">
                <img class="about__image" src="imagies/description.jpg" alt="Картинка описания" width="350" height="250">
            </div>
 */
const cardsImages = document.querySelector(".about__wrap-right");

if (cardsImages) {
    const createCard = (imageUrl, imageAlt, imageWidth) => {
        const image = `
            <img class="about__image" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}" height="250">
            <img class="about__image" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;" height="250">    
        `;
        return image;
    };
    const apiUrl = "images.json";
    fetch(apiUrl)
        .then((response) => response.json())
        .then((images) => {
            console.log(images); 
            console.log(typeof images); 

            images.forEach((item) => {
                const cardElement = createCard(
                    item.imageUrl,
                    item.imageAlt,
                    item.imageWidth
                );
                cardsImages.insertAdjacentHTML("beforeend", cardElement);
            });
            const pictures = document.querySelectorAll(".about__wrap-right .about__image");
            if (pictures) {
                pictures.forEach((picture) => {
                    picture.addEventListener("click", () => {
                        // Получаем родительский элемент 
                        const parentItem = picture.parentElement;
                        const parentPictures = parentItem.querySelectorAll(".about__image");

                        // Переключаем видимость изображений
                        parentPictures.forEach((parentPictures) => {
                            if (parentPictures !== picture) {
                                parentPictures.style.display = "block"; // Показываем другое изображение
                            } else {
                                parentPictures.style.display = "none"; // Скрываем текущее изображение
                            }
                        });
                    });
                });
            }
    });
}
               
