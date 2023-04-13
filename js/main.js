

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