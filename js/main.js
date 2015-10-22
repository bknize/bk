$('li.link a').click(function(e){
    e.preventDefault();
    x = $(this).parent();
    y = x.next('li.gallery')
    
    y.slideToggle(150);

})

$('a.close').click(function(e){
    e.preventDefault();
    $(this).parent().slideUp(150);
})

$( 'a[rel=darkbox]' ).darkbox();