$(document).ready(()=>{
    let currentSlide = 0;
    let isBusy = false;
$('.slider-arrow').on('click',(e)=>{
    const that = $(e.currentTarget)
    const slidesCount = slider.length - 1
    if(!isBusy){
        if(that.hasClass('right')){
            currentSlide+=1
            if(currentSlide>slidesCount) currentSlide =0
        } else {
            currentSlide -=1
            if(currentSlide<0) currentSlide = slidesCount;
        }
        isBusy = true
        $('.slider-image').animate({'opacity':0},350,()=>{
            $('.slider-image').css('background-image','url('+slider[currentSlide]+')')
            $('.slider-image').animate({'opacity':1},350,()=>isBusy = false)    
        })
    }
})
})
const slider = [
    'img/bootstrap01.jpg',
    'img/bootstrap02.jpg',
    'img/bootstrap03.jpg',
    'img/bootstrap04.jpg',
    'img/bootstrap05.jpg',
    'img/bootstrap06.jpg',
    'img/ozero_derevia_bereg_1122459_3840x2400.jpg',
] 