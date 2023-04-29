
let menuVisible = false;
// Ocultar menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById('nav').classList='';
        menuVisible = false;
    } else{
        document.getElementById('nav').classList = 'responsive';
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu cuando se selecciona una opcion
    document.getElementById('nav').classList = '';
    menuVisible = false;
}

// Aplica animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById('Skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementByClassName('progreso');
        habilidades[0].classList.add('html');
        habilidades[1].classList.add('css');
        habilidades[2].classList.add('javascript');
        habilidades[3].classList.add('sql');
        habilidades[4].classList.add('react');
        habilidades[5].classList.add('node');
        habilidades[6].classList.add('pyt');
        habilidades[7].classList.add('comu');
        habilidades[8].classList.add('teq');
        habilidades[9].classList.add('crea');
        habilidades[10].classList.add('apren');
        habilidades[11].classList.add('met');
        habilidades[12].classList.add('resil');
        habilidades[13].classList.add('lider');

    }
}

//detecta el scrolling
window.onscroll = function(){
    efectoHabilidades();
}