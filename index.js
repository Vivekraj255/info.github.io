const icon = document.getElementById('icon');
const menu = document.getElementById('menu')

icon.onclick = function(){
    icon.classList.toggle('active');
    menu.classList.toggle('active');
}

document.onclick = function(clickEvent){
    if(clickEvent.target.id !== 'menu' && clickEvent.target.id !== 'icon'){
        icon.classList.remove('active');
        menu.classList.remove('active');
    }
}