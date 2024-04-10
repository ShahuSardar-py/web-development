
var x, y, z, colorb ;

document.getElementById("button1").onclick= function(){
    x= Math.round(Math.random()*256);
    y= Math.round(Math.random()*256);
    z= Math.round(Math.random()*256);
    colorb= 'rgb('+ x +' , ' + y  + ',' + z + ')'; 


    document.getElementById("colorbox").style.backgroundColor= colorb;
    document.getElementById("colorbox").innerHTML = colorb; 





}



