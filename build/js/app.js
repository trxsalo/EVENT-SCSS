
document.addEventListener('DOMContentLoaded', function(){ ///seleciona todo el dom (documento html)
    iniciarApp();   //inidca que cuando carge se ejecute una funcion o funciones
})

function iniciarApp(){

    crearGaleria();

}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-ul'); //selecionamos una clasei 
    
    for (let i=1 ; i<=10;   i++){
        const imges = document.createElement('div') //crea una etiqueta con ..
        imges.innerHTML= `
        <picture>
        <source srcset='../build/img/${i}.avif' type=image/avif>
        <source srcset='../build/img/${i}.webp' type=image/webp>
        <source srcset='../build/img/${i}.jpg' type=image/jpg>
        <img loading='lazy' width='200' heigth='300' src='../build/img/${i}.jpg' alt='Imagen'>
        </picture>
        `;

        //console.log(imges);
        galeria.appendChild(imges) //seleciona donde vas anhadir y cual sera 
    }


}