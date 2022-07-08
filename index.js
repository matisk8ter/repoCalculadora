//----------------------------DIV PADRE----------------
let contPadre = document.getElementById("container");
contPadre.style.width = '400px';
contPadre.style.height = '400px';
contPadre.style.background = '#eaeaea';
contPadre.style.display = "flex";
contPadre.style.alignItems = "center"
contPadre.style.flexDirection = "column"
//-----------------------------------------------------


//------------------DONDE MUESTRO EL RESULTADO EL PRIMERO--------------
let contResultado = document.createElement("div");
contResultado.style.width = "400px"
contResultado.style.height = "80px"
contResultado.style.background = "red"
contResultado.style.display = "flex"
contResultado.style.justifyContent = "center"
contPadre.appendChild(contResultado)

//-----------------------------------------------------------



//------------------LAS CUATRO OPERACIONES SUM REST DIV MULT------------
let nodoOperaciones = contResultado.cloneNode();
nodoOperaciones.style.background = "black"

let divOperaciones = document.createElement("div");
divOperaciones.style.width = "90px"
divOperaciones.style.height = "60px"
divOperaciones.style.background = "white"
divOperaciones.style.margin = "auto"
divOperaciones.style.fontSize= "50px"
divOperaciones.style.textAlign= "center"
contPadre.appendChild(nodoOperaciones)
nodoOperaciones.appendChild(divOperaciones)
//----------------------------------------------------

//-------------------LOS 4 DIV DE LAS OPERACIONES

let opSuma = divOperaciones.cloneNode();
let opDivision = divOperaciones.cloneNode();
let opMult = divOperaciones.cloneNode();
divOperaciones.innerHTML="-"
nodoOperaciones.appendChild(opSuma);
opSuma.innerHTML= "+"
nodoOperaciones.appendChild(opDivision);
opDivision.innerHTML="/"
nodoOperaciones.appendChild(opMult);
opMult.innerHTML="*"
//------------------------------------------------

//------------------DIV PADRE QUE CONTIENE LOS NUMEROS Y EL IGUAL-----------
let divNumeros = document.createElement("div")
divNumeros.style.background = "black"
divNumeros.style.height = "220px"
divNumeros.style.width = "390px"
divNumeros.style.margin = "auto"
divNumeros.style.display = "flex"
//----------------------------------------------------------------------------
contPadre.appendChild(divNumeros)

//----------------EL DIV QUE CONTIENE LA OPERACION IGUAL------
let divIgual = document.createElement("div")
divIgual.style.height = "220px"
divIgual.style.width = "100px"
divIgual.style.display= "felx"
divIgual.style.background = "red"

//-------------DIV QUE CONTIENE LOS NUMEROS
let contNumeros = document.createElement("div")
contNumeros.style.width = "300px" 
contNumeros.style.height = "220px" 
contNumeros.style.background = "green"
contNumeros.style.display = "flex"
contNumeros.style.flexDirection = "column"
contNumeros.style.justifyContent = "center"
contNumeros.style.alignItems = "center"


//---agrego al contenedor padre el div solo que contiene los numeros
divNumeros.appendChild(contNumeros)
//----------------------------------
//----------agrego el div que contiene el igual
divNumeros.appendChild(divIgual)
//------------------------Div boton es igual-----------------------------------
let igual= document.createElement("div")
igual.style.height="150px"
igual.style.width="75px"
igual.style.display="flex"
igual.style.background="white"
igual.style.alignItems="center"
igual.style.justifyContent="center"
igual.style.margin = "15px"
igual.innerHTML= "="
igual.style.textAlign="center"
igual.style.fontSize="50px"
divIgual.appendChild(igual)

//----------------DIV PARA FILA PARA 3 NUM 
let divPara3Num = document.createElement("div")
divPara3Num.style.height = "140px"
divPara3Num.style.width = "250px"
divPara3Num.style.display = "flex"






contNumeros.appendChild(divPara3Num)

//----------------- CREO LOS DIV QUE CONTIENE LOS NUMEROS---
let num = document.createElement("div")
num.style.height = "40px"
num.style.width = "250px"
num.style.background = "white"
num.style.margin = "5px"



//----------CLONO EL DIV PARA 3 NUM FILA 2

let divPara3NumFila2 = divPara3Num.cloneNode();
contNumeros.appendChild(divPara3NumFila2)

//----------CLONO EL DIV PARA 3 NUM FILA 3

let divPara3NumFila3 = divPara3Num.cloneNode();
contNumeros.appendChild(divPara3NumFila3)

//----------CLONO EL DIV PARA 3 NUM FILA 4

let divPara3NumFila4 = divPara3Num.cloneNode();
contNumeros.appendChild(divPara3NumFila4)




//-----------CLONO EL DIV DE CADA NUM----
let n1 = num.cloneNode();
n1.innerHTML="1"
n1.style.textAlign="center"
n1.style.fontSize="25px"
let n2 = num.cloneNode();
n2.innerHTML="2"
n2.style.textAlign="center"
n2.style.fontSize="25px"
let n3 = num.cloneNode();
n3.innerHTML="3"
n3.style.textAlign="center"
n3.style.fontSize="25px"
let n4 = num.cloneNode();
n4.innerHTML="4"
n4.style.textAlign="center"
n4.style.fontSize="25px"
let n5 = num.cloneNode();
n5.innerHTML="5"
n5.style.textAlign="center"
n5.style.fontSize="25px"
let n6 = num.cloneNode();
n6.innerHTML="6"
n6.style.textAlign="center"
n6.style.fontSize="25px"
let n7 = num.cloneNode();
n7.innerHTML="7"
n7.style.textAlign="center"
n7.style.fontSize="25px"
let n8 = num.cloneNode();
n8.innerHTML="8"
n8.style.textAlign="center"
n8.style.fontSize="25px"
let n9 = num.cloneNode();
n9.innerHTML="9"
n9.style.textAlign="center"
n9.style.fontSize="25px"
let n0 = num.cloneNode();
n0.innerHTML="0"
n0.style.textAlign="center"
n0.style.fontSize="25px"

divPara3Num.appendChild(n1)
divPara3Num.appendChild(n2)
divPara3Num.appendChild(n3)

divPara3NumFila2.appendChild(n4)
divPara3NumFila2.appendChild(n5)
divPara3NumFila2.appendChild(n6)

divPara3NumFila3.appendChild(n7)
divPara3NumFila3.appendChild(n8)
divPara3NumFila3.appendChild(n9)

divPara3NumFila4.appendChild(n0)



