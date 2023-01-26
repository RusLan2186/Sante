// ................BURGER................................................

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu').toggleClass('open-menu');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu').toggleClass('open-menu');
      $('body').toggleClass('lock');
   })
})



let wrapper = document.querySelector('.wrapper');

let pageSlider = new Swiper('.page', {

   // создаем свои классы слайдера
   wrapperClass: "page-wrapper",
   slideClass: "screen",

   // Вертикальный слайдер
   direction: 'vertical',


   // Количество слайдов для показа
   slidesPerView: 'auto',

   // Включаем параллакс
   parallax: true,

   // Управление кравиатурой
   keyboard: {
      // вкл/выкл
      enabled: true,

      // вкл/выкл только когда слайдер в пределах вьюпорта
      onlyInViewport: true,

      //  вкл/выкл  управление клавишами pageUp, pageDown
      pageUpDown: true,
   },

   // управление колесом мыши
   mousewheel: {
      // чувствительность колеса мыши
      sensitivity: 1,

      // класс объекта на кот. будет срабатывать прокрутка мышью
      // eventsTarget: ".image-slider"
   },

   // откл функционала если слайдер меньше чем нужно
   watchOverflow: true,

   // скорость
   speed: 800,

   // обновить свайпер при изменении элементов слайдера
   observer: true,

   // обновить свайпер при изменении родительских  элементов слайдера
   observeParents: true,

   // обновить свайпер при изменении дочерних элементов слайдера
   observeSlideChildren: true,

   // навигация
   pagination: {
      el: ' .page__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: "page__bullet",
      bulletActiveClass: "page__bullet_active",
   },

   // скролл
   // scrollbar: {
   //    el: ' .page__scroll',
   //    dragClass: "page__drag-scroll",
   //    // возможность перемотать скролл
   //    draggable: true,
   // },
   // отключаем автоинициализацию
   init: false,

   // Событие
   on: {
      // событие инициализации
      init: function () {
         menuSlider();
         setScrollType();
         wrapper.classList.add('_loaded');
      },
      // событие смены слайда
      slideChange: function () {
         menuSliderRemove();
         menuLinks[pageSlider.realIndex].classList.add('_active');
      },
      resize: function () {
         setScrollType();
      }
   },
});

// добавление/удаление активной ссылки в зависимости от экрана
let menuLinks = document.querySelectorAll('.menu__link');
function menuSlider() {

   if (menuLinks.length > 0) {
      menuLinks[pageSlider.realIndex].classList.add('_active');
      for (let index = 0; index < menuLinks.length; index++) {
         const menuLink = menuLinks[index];
         menuLink.addEventListener("click", function (e) {
            menuSliderRemove();
            pageSlider.slideTo(index, 800);
            menuLink.classList.add('_active');
            e.preventDefault();
         });
      }
   }
}

function menuSliderRemove() {
   let menuLinkActive = document.querySelector('.menu__link._active');
   if (menuLinkActive) {
      menuLinkActive.classList.remove('_active');
   }
}
// отключение поэкранного скролла
function setScrollType() {
   if (wrapper.classList.contains('_free')) {
      wrapper.classList.remove('_free');
      pageSlider.params.freeMode.enabled = false;
   }
   for (let index = 0; index < pageSlider.slides.length; index++) {
      const pageSlide = pageSlider.slides[index];
      const pageSlideContent = pageSlide.querySelector('._content');
      if (pageSlideContent) {
         const pageSlideContentHeight = pageSlideContent.offsetHeight;
         if (pageSlideContentHeight > window.innerHeight) {
            wrapper.classList.add('_free');
            pageSlider.params.freeMode.enabled = true;
            break;
         }
      }
   }
}

// запуск слайдера
pageSlider.init();



const swiper = new Swiper('.nouveautés__slider', {
   // Optional parameters
   slidesPerView: 3,
   // loop: true,

   speed: 800,

   // Navigation arrows
   navigation: {
      nextEl: '.nouveautés__swiper-button-next',
      prevEl: '.nouveautés__swiper-button-prev ',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.nouveautés__swiper-scrollbar',
   },
   breakpoints: {
      '320': {
         slidesPerView: 1.2,

      },
      '650': {
         slidesPerView: 2,

      },
      '1100': {
         slidesPerView: 3,

      },
   }
});

const newSwiper = new Swiper('.propos__slider', {
   // Optional parameters
   slidesPerView: 3,
   // loop: true,
   autoHeight: true,

   speed: 800,

   // Navigation arrows
   navigation: {
      nextEl: '.propos__swiper-button-next',
      prevEl: '.propos__swiper-button-prev ',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.propos__swiper-scrollbar',
   },
   breakpoints: {
      '320': {
         slidesPerView: 1.2,

      },
      '800': {
         slidesPerView: 2,

      },
      '1300': {
         slidesPerView: 3,

      },
   }
});

const twoSwiper = new Swiper('.studio__slider', {
   // Optional parameters
   slidesPerView: 3,
   // loop: true,

   speed: 800,

   // Navigation arrows
   navigation: {
      nextEl: '.studio__swiper-button-next',
      prevEl: '.studio__swiper-button-prev ',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.studio__swiper-scrollbar',
   },
   breakpoints: {
      '320': {
         slidesPerView: 1.2,

      },
      '650': {
         slidesPerView: 2,

      },
      '1100': {
         slidesPerView: 3,

      },
   }
});