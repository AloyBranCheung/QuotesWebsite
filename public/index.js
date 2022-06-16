// AOS Script Init
AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// Anime Panels
const panels = $(".panel");

function removeActiveClasses (){
    panels.each(function(index){
        $(this).removeClass("active");
    })
};

panels.each(function(index){
    $(this).click(function(){
        removeActiveClasses();
        $(this).addClass("active");
    })
});


// Button toTop
const toTop = $(".toTop");

$(document).scroll(function() {
    if ($(document).scrollTop() > 100) {
        toTop.addClass("active");
    } else {
        toTop.removeClass("active");
    }
});





