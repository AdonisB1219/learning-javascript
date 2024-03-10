// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

function obtenerRespuesta(){
    let promesa = fetch(API_ENDPOINT, {
        method: "GET",
    });
    promesa
    .then((response)=>{
        response
        .json()
        .then((data) => {
            console.log(data)
            console.log(data.answer);
        })
        .catch((error) => console.error("Problema en el json", error));
    })
    .catch((error)=>{
        console.error(error, "ocurrio un error en la solicitud")
    });
}

function obtenerRespuesta(){
    let promesa = fetch(API_ENDPOINT,{
        method: "GET"
    });

    promesa
    .then((response)=>response.json()
    .then((data)=>{console.log(data)})
    )

}