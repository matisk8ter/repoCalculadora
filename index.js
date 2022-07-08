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

contPadre.appendChild(nodoOperaciones)
nodoOperaciones.appendChild(divOperaciones)
//----------------------------------------------------

//-------------------LOS 4 DIV DE LAS OPERACIONES

let opSuma = divOperaciones.cloneNode();
let opDivision = divOperaciones.cloneNode();
let opMult = divOperaciones.cloneNode();
nodoOperaciones.appendChild(opSuma);
nodoOperaciones.appendChild(opDivision);
nodoOperaciones.appendChild(opMult);
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
let n2 = num.cloneNode();
let n3 = num.cloneNode();
let n4 = num.cloneNode();
let n5 = num.cloneNode();
let n6 = num.cloneNode();
let n7 = num.cloneNode();
let n8 = num.cloneNode();
let n9 = num.cloneNode();
let n0 = num.cloneNode();

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






