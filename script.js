
/*

var rowery = [
document.getElementById('rower1'),
document.getElementById('rower2'),
document.getElementById('rower3'),
document.getElementById('rower4'),
document.getElementById('rower5'),
document.getElementById('rower6'),
document.getElementById('rower7'),
document.getElementById('rower8'),
document.getElementById('rower9'),
]

var obrazy = [["zdj1.jpg", "zdj2.jpg", "zdj3.jpg" ],
             ["zdj1.jpg", "zdj2.jpg", "zdj3.jpg" ],
             ["zdj1.jpg", "zdj2.jpg", "zdj3.jpg" ],
             ["zdj1.jpg", "zdj2.jpg", "zdj3.jpg" ],
             ["zdj1.jpg", "zdj2.jpg", "zdj3.jpg" ],
             ["zdj1.jpg", "zdj2.jpg", "zdj3.jpg" ],
             ["zdj1.jpg", "zdj2.jpg", "zdj3.jpg" ],
             ["zdj1.jpg", "zdj2.jpg", "zdj3.jpg" ],
             ["zdj1.jpg", "zdj2.jpg" ],
             ["zdj1.jpg", "zdj2.jpg", "zdj3.jpg" ],];
var timer1;

//   
// ========================================
//    ||     ||||   \     / ||||  |||||   {}
//  ||  ||  ||  ||    \/\/  ||    ||  ||  {}
//  ||--||  ||---           ||||  |||||   {}
//  ||  ||  ||                ||  ||  ||  {}
//  ||  ||  ||             |||||  |||||   {}
// ======================================={}
//                                        \\
*/

function zmienobraz( i,  x)
{
            for(let j=0; j<obrazy[i].length; j++)
                {
                   rowery[i].src="img/rowery/rower"+(i+1)+"/"+ obrazy[i][j];
                    
                    setTimeout(zmienobraz(i,x));
                }
    
}

window.onload= function()
{
    for(let i=0; i<obrazy.length; i++) zmienobraz(i, i.length);
}
*/
var rower1 = document.getElementById("rower1");
rower1.src = "img/rowery/rower1/zdj1.jpg";
var timer1;

rower1.onmouseover = zmienObraz();

var numer;
function zmienObraz()
{
    numer=1;
    numer++; if(numer>3) numer=1;
    rower1.src="img/rowery/rower1/zdj"+numer+".jpg";
    
    console.log("czas wznowiony");
    timer1 = setTimeout("zmienObraz()", 2000);
}

rower1.onmouseout = function()
{
    console.log("czas zatrzymany");
    clearTimeout(timer1);
    rower1.src="img/rowery/rower1/zdj1.jpg";
}