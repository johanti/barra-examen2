let menutoggle = document.querySelector('.menu-toggle')
let menutoggleicon = document.querySelector('.menu-toggle i')
let menu = document.getElementById('menu')

menutoggle.addEventListener('click', e=>{
    menu.classList.toggle('show');

    if(menu.classList.contains('show')){
        menutoggleicon.setAttribute('class', 'fa fa-times');
        
    }else{
        menutoggleicon.setAttribute('class', 'fas fa-bars');
    }


});