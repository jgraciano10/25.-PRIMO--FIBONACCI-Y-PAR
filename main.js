function fibonacci(number){
    let almacenamiento = [0, 1, 1]
    let maximo = number
    let i = 1
    while(i<maximo){
        almacenamiento.push(almacenamiento[almacenamiento.length-1] + almacenamiento[almacenamiento.length-2])
        i = almacenamiento[almacenamiento.length - 1]     
    }
    return maximo=== almacenamiento[almacenamiento.length - 1]|| maximo ===0? true:false
}

function primo(number){
    let divisor = 0;
    for(let i =1; i<=number ;i++){
        if(number%i===0){
            divisor++
        }
    }
    return divisor<=2? true:false
}

let par = (number)=> number%2===0


let click_activator = document.getElementById("pulse")

click_activator.addEventListener("click", ()=>{
    let number = parseInt(document.getElementById("numero").value)
    let par_sample = par(number)
    let fibonachi_sample = fibonacci(number)
    let primo_sample = primo(number)

    if(par_sample && fibonachi_sample && primo_sample){
        document.getElementById("boton-par").style.backgroundColor = "red"
        document.getElementById("boton-Fibonachi").style.backgroundColor = "red"
        document.getElementById("boton-Primo").style.backgroundColor = "red"
        console.log(`${number} es primo, fibonacci y es par`)
    }else if(par_sample && fibonachi_sample){
        document.getElementById("boton-par").style.backgroundColor = "red"
        document.getElementById("boton-Fibonachi").style.backgroundColor = "red"
        console.log(`${number} es fibonacci y par pero no es primo`)
    }else if (par_sample && primo_sample){
        document.getElementById("boton-par").style.backgroundColor = "red"
        document.getElementById("boton-Primo").style.backgroundColor = "red"
        console.log(`${number} es primo y par pero no es fibonacci`)
    }else if(fibonachi_sample && primo_sample){
        document.getElementById("boton-Fibonachi").style.backgroundColor = "red"
        document.getElementById("boton-Primo").style.backgroundColor = "red"
        console.log(`${number} es primo, fibonacci e impar`)
    }else if(par_sample){
        document.getElementById("boton-par").style.backgroundColor = "red"
        console.log(`${number} es par, no es primo y no es fibonacci`)
    }else if(primo_sample){
        document.getElementById("boton-Primo").style.backgroundColor = "red"
        console.log(`${number} es primo e impar pero no es fibonacci`)
    }else{
        document.getElementById("boton-Fibonachi").style.backgroundColor = "red"
        console.log(`${number} es fibonacci e impar pero no es primo`)
    }    

})

