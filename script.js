$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky")
        }
    });
})

$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
    })
})

function onClickMenu(){
    document.querySelector('div.menu-btn').classList.toggle('change')
}

// animação do script
var typed = new Typed(".typing", {
    strings: ["Desenvolvedor", "Front-end"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})