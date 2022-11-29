//arreglo que contiene las respuestas correctas

let correctas = [1,2,3,4,1,2];

//arreglo donde se guardan las respuestas del usuario

let opcion_elegida=[];

let cantidad_correctas=0;

//funcion que toma el num de pregunta y el input elegido de esa pregunta

function respuesta(num_pregunta, seleccionada){
    //guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    //el siguiente codigo es para poner en color blanco
    //el fondo de los inputs para cuando elige la opcion
    //armo el id para seleccionar el section correpondiente
    id="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";
    labels[9].style.backgroundColor = "white";

    //doy el color a label seleccionado
    seleccionada.parentNode.style.backgroundColor = "#57e75f";
}

// Validacion de formulario
function corregir(){
    radios = document.querySelector('input[type="radio"]:checked');
}

if (radios.lenght === 0 ){
    alert('Porfavor marca los valores');
}

    cantidad_correctas = 0;
    for(i=0; i < correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;

        }

    }

    document.getElementById("resultado").innerHTML = cantidad_correctas;



