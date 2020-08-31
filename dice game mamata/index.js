
var x = Math.floor((Math.random() * 6) + 1);
var y= Math.floor((Math.random() * 6) + 1);
var r1="dice" + x +".png";
var i1="images/" + r1;


var r2="dice" + y +".png";
var i2="images/" + r2;
 document.querySelectorAll("img")[0].setAttribute("src",i1);
    document.querySelectorAll("img")[1].setAttribute("src",i2);

if(x === y)
{
    document.querySelector("h1").innerHTML = '<i class="fas fa-flag flag1 " ></i> DRAW! <i class="fas fa-flag flag1 " ></i>';
   
       
}
else if(x > y)
{
      
       
     document.querySelector("h1").innerHTML = '<i class="fas fa-flag flag1 " ></i> Player 1 Wins!';  
   /*'h1'.append('');*/
    
     
}
else{
     
    document.querySelector("h1").innerHTML = ' Player 2 Wins! <i class="fas fa-flag flag1 " ></i>';
   
}