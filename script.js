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
        habilidaddes[6].classList.add("astro");
        habilidaddes[7].classList.add("react");
        habilidaddes[8].classList.add("typescript");
        habilidaddes[9].classList.add("mysql");
        habilidaddes[10].classList.add("sqlserver");
        habilidaddes[11].classList.add("bootstrap");
        habilidaddes[12].classList.add("git");
        habilidaddes[13].classList.add("comunicacion");
        habilidaddes[14].classList.add("trabajo");
        habilidaddes[15].classList.add("creatividad");
        habilidaddes[16].classList.add("dedicacion");
        habilidaddes[17].classList.add("responsabilidad");  
       
    }
}

//DETECTO EL scrolling para aplicar la anmacion de la barra de habilidaddes
window.onscroll= function(){
    efectoHabilidades();
}
