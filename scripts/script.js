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
/** */
const cardsImages = document.querySelector(".images");
    if (cardsImages) {
        const cardListImages = cardsImages.querySelector(".images__list");

        const apiUrl = "images.json";

        const createCard = (imageUrl, imageAlt, imageWidth) => {
            // Шаблонные строки и подстановки
            const image = `
            <li class="images__item">
                <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
                <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
            </li>
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
                    cardListImages.insertAdjacentHTML("beforeend", cardElement);
                });
             });

    }
               
