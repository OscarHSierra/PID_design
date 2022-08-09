//iniciar con PI IAE
var k= document.getElementById("input_k");
var tao= document.getElementById("input_tao");
var t0= document.getElementById("input_t0");
var boton=document.getElementById("boton");
var controlador_js=document.getElementById("controlador");

var kp;
var r=document.getElementById("resultado");
var Ti;
k.value=parseFloat(k.value);
t0.value=parseFloat(t0.value);
tao.value=parseFloat(tao.value);

function calcular(){

    

    if (controlador_js.value=="REGULACION A PERTURBACIONES IAE PI")
    {
        var a1=0.984;
        var b1=-0.986;
        var a2=0.608;
        var b2=0.707;
        kp=(a1/k.value)*Math.pow((t0.value/tao.value),b1);
        Ti=(tao.value/a2)*Math.pow((t0.value/tao.value),b2);
        if (isNaN(kp))
        {
            r.innerHTML= "Ingrese unos valores validos de K, T0 y Tao";  
        }
        else
        {   
            r.innerHTML="Kp= "+kp.toFixed(4) +" y Ki= "+ Ti.toFixed(4);
        }
        alert(controlador_js.value);
    }
    else if (controlador_js.value=="REGULACION A PERTURBACIONES ITAE PID")
    {
        var a1=0.984;
        var b1=-0.986;
        var a2=0.608;
        var b2=0.707;
        kp=(a1/k.value)*Math.pow((t0.value/tao.value),b1);
        Ti=(tao.value/a2)*Math.pow((t0.value/tao.value),b2);
        if (isNaN(kp))
        {
            r.innerHTML= "Ingrese unos valores validos de K, T0 y Tao";  
        }
        else
        {   
            r.innerHTML="Kp= "+kp.toFixed(4) +" y Ki= "+ Ti.toFixed(4);
        }
        alert(controlador_js.value);
    }
    else if (controlador_js.value=="PUNTO DE CONTROL, SEGUIMIENTO, IAE PID")
    {
        var a1=0.984;
        var b1=-0.986;
        var a2=0.608;
        var b2=0.707;
        kp=(a1/k.value)*Math.pow((t0.value/tao.value),b1);
        Ti=(tao.value/a2)*Math.pow((t0.value/tao.value),b2);
        if (isNaN(kp))
        {
            r.innerHTML= "Ingrese unos valores validos de K, T0 y Tao";  
        }
        else
        {   
            r.innerHTML="Kp= "+kp.toFixed(4) +" y Ki= "+ Ti.toFixed(4);
        }
        alert(controlador_js.value);
    }

    else if (controlador_js.value=="PUNTO DE CONTROL, SEGUIMIENTO, IAE PI")
    {
        var a1=0.984;
        var b1=-0.986;
        var a2=0.608;
        var b2=0.707;
        kp=(a1/k.value)*Math.pow((t0.value/tao.value),b1);
        Ti=(tao.value/a2)*Math.pow((t0.value/tao.value),b2);
        if (isNaN(kp))
        {
            r.innerHTML= "Ingrese unos valores validos de K, T0 y Tao";  
        }
        else
        {   
            r.innerHTML="Kp= "+kp.toFixed(4) +" y Ki= "+ Ti.toFixed(4);
        }
        alert(controlador_js.value);
    }

}


boton.addEventListener("click",calcular);