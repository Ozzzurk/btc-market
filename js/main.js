

const isMobile = {
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iphone|ipad|ipod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.pointer');
    if(menuArrows.length > 0) {
        for(let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function(e){
                menuArrow.parentElement.classList.toggle('active');
            });
        }
    }

}else{
    document.body.classList.add('_pc');
}


//Меню для смартфонов
const iconMenu = document.querySelector('.menu__icon');
const rem = document.querySelectorAll('.remove__list')
if(iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        for(var i = 0; i < rem.length; i++) {
            rem[i].classList.remove('active');
        }
    });
}


//Плавное появление
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}



//Кнопка отмотки вверх
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.upward');
    scroll.classList.toggle("active", window.scrollY > 500);
})

const goToBtn = document.querySelector(".upward");

goToBtn.addEventListener("click", scrollTop);

function scrollTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -75);
        setTimeout(scrollTop, 0);
    }
}
