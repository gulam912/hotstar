let dropdown = document.getElementById('navbarDropdown');
let dropdownMenu = document.querySelector('.dropdown-menu');


function changeState(action){
    dropdownMenu.style.display = action;
}

dropdown.onmouseover = function(){
    changeState("block");
}

dropdown.onmouseout =  function(){
    changeState("none");
}