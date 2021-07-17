var largeur = window.innerWidth;
var hauteur = window.innerHeight;



console.log(largeur);
console.log(hauteur);

let arrColor =[ 'black','red','yellow','blue','green','brown','purple','pink'];

function randomColor(){
    const randomNumberCase = Math.floor(Math.random() * 50) + 1
    console.log(randomNumberCase);
    const randomNumberColor = Math.floor(Math.random() * 7) + 1
    console.log(randomNumberColor);


    let arrColorPicker = arrColor[randomNumberColor];
    let squareCasePicker = "square" + randomNumberCase;
    let squareChange = document.getElementById(squareCasePicker);

    squareChange.style.backgroundColor= arrColorPicker;

    console.log(arrColorPicker);

    console.log(squareCasePicker);
}

randomColor();

setInterval(randomColor,1);