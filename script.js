let menuVisible=false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //oculto el menu una vez que se slecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}

//funcion que aplica la animacion de las skills
function efectoHabilidades(){
    var skills=document.getElementById("skills");
    var distancia_skills=window.innerHeight -skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidaddes=document.getElementsByClassName("progreso");
        habilidaddes[0].classList.add("javascript");
        habilidaddes[1].classList.add("html");
        habilidaddes[2].classList.add("css");
        habilidaddes[3].classList.add("php");
        habilidaddes[4].classList.add("java");
        habilidaddes[5].classList.add("laravel");
        habilidaddes[6].classList.add("mysql");
        habilidaddes[7].classList.add("sqlserver");
        habilidaddes[8].classList.add("bootstrap");
        habilidaddes[9].classList.add("tailwind");
        habilidaddes[10].classList.add("postman");
        habilidaddes[11].classList.add("git");
        habilidaddes[12].classList.add("comunicacion");
        habilidaddes[13].classList.add("trabajo");
        habilidaddes[14].classList.add("creatividad");
        habilidaddes[15].classList.add("dedicacion");
        habilidaddes[16].classList.add("responsabilidad");
        habilidaddes[17].classList.add("disciplina");
    }
}

//DETECTO EL scrolling para aplicar la anmacion de la barra de habilidaddes
window.onscroll= function(){
    efectoHabilidades();
}