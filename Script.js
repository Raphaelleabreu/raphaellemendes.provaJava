//*Exercício 02*

let Nomedapessoa = document.getElementById("Rapha")
 let texto=document.getElementById("textoEnvio")

 function Enviar()
{
 texto.innerHTML= "Ola," + Nomedapessoa.value + "tudo bem?";
}

// *Exercicio 03*

let g = document.getElementById("Centimetros")
let c = document.getElementById("resultado2")

function multiplicar()
{
    if(Centimetros)
    {
      c.innerHTML= (parseInt(Centimetros.value)) /100 + "metros"
    }
}
    

//* Exercício 04*
let Numero= document.getElementById("Numero")
let proximo=document.getElementById("proximo")
let anterior= document.getElementById("anterior")

 function calcular()
{
proximo.innerHTML=parseInt( Numero.value)+1;
anterior.innerHTML=parseInt(Numero.value)-1;
}


// *Exercício 05

let a = document.getElementById("numero1")
let b = document.getElementById("numero2")
let d  = document.getElementById("menornumero")

function comparação()
{
  if(a.value < b.value)
    {
      d.innerHTML = a.value + " é menor que" + b.value
      
    }
    else 
    {
      d.innerHTML = a.value + " é maior que "+ b.value
    }
}


//06









//07
console.clear()
var k= 1;
while(k < 10)
    { 
        console.log(k)
        k= k + 1;
    }
var f= 1;
while(f <=100)
    { 
        console.log(f)
        f = f + 1;
    }



    
//08
console.clear()
var k= 0;
while(k < 10)
    { 
        console.log(k)
        k= k + 5;
    }
var f= 5;
while(f <=50)
    { 
        console.log(f)
        f = f + 5;
    }


//09

    















//09



















