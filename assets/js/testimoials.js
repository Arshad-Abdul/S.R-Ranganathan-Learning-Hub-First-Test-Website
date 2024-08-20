$(document).ready(function(){
    $('.testimonials').slick({
dots: true,

speed: 300,
slidesToShow:3,
slidesToScroll: 1,
autoplay:true,
autoplaySpeed:2000,
centerMode:true,
centerPadding:'90px',
cssEase:'ease',
focusOnSelect:true,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true,
centerMode:false,
arrows:true,

}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2,
dots: false,
centerMode:false,
arrows:true
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
dots: true,
centerMode:false,
arrows:true
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]

});
})