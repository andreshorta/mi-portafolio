$(document).ready(function(){
    $(window).scroll(function(){
        var header = $('header');

         if ($(this).scrollTop() >100){
        header.addClass("classScroll"); 
        } else{
        header.removeClass("classScroll"); 
        } 
    })
})