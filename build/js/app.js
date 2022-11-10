
document.addEventListener('DOMContentLoaded', function(){ ///seleciona todo el dom (documento html)
    iniciarApp();   //inidca que cuando carge se ejecute una funcion o funciones
})

function iniciarApp(){

    crearGaleria();
    scrollNav();
}

function scrollNav(){
    const enlace = document.querySelectorAll('.navegacion-principal a');

    enlace.forEach(enlace=>{
        enlace.addEventListener('click' ,function(e){
            e.preventDefault(); //anulamos un evento por default

            const sectionScroll = e.target.attributes.href.value; //seleciona el atributo/valor del href

            const seccion = document.querySelector(sectionScroll);

                seccion.scrollIntoView({behavior: 'smooth'}) //el scroll sera mas suave
        });
    })
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

        imges.onclick = function(){ //
            mostrarImg(i);
        }

        //console.log(imges);
        galeria.appendChild(imges) //seleciona donde vas anhadir y cual sera 
    }

}

function mostrarImg(image){
    const imges = document.createElement('picture') //crea una etiqueta con ..
    imges.innerHTML= ` 
    <picture>
    <source srcset='../build/img/${image}.avif' type=image/avif>
    <source srcset='../build/img/${image}.webp' type=image/webp>
    <source srcset='../build/img/${image}.jpg' type=image/jpg>
    <img loading='lazy' width='200' heigth='300' src='../build/img/${image}.jpg' alt='Imagen'>
    `; //insercion de html de contenido


    //crea un elemento para anhadir las imagenes
    const overlay = document.createElement('div');
    overlay.appendChild(imges);
    overlay.classList.add('overlay');

    
    overlay.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-imge')
        overlay.remove();

    }


    //lo inserta en el documento
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-imge')


    //botton para cerrar la imagen flotante

    const cerrar= document.createElement('p')
    cerrar.textContent= ' X';
    cerrar.classList.add('btn-cerrar');

    cerrar.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-imge')
        overlay.remove();

    }

    overlay.appendChild(cerrar); //anhadirmos el btn de cerrar


}