   /* var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(10, 10, 50, 50);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ordena la basura!</title>
    <style>
        * {
        padding: 15;
        margin: 10;
      }
      canvas {
        background: #2fc7fe;
        display: block;
        margin: 10;
      }
    </style>
</head>
<body onload="dibujado();">

<canvas id="canvas" width="1300" height="600"></canvas>
    <script>
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      var imagenDeFondo= new Image();
      var imagenAlumnos = new Image();
      var imgAluX=0;
      imagenDeFondo.src="Fondo.png";
      imagenAlumnos.src="SenorManoso.png"; 

     

 
      function dibujado(){
        ctx.fillStyle="#2fc7fe";
        ctx.fillrect(0,0,1300,600);
        ctx.drawImage(imagenAlumnos, imgAluX, 300, 100, 100);
        imgAluX +=1;
        if(imgAluX>1300){
          imgAluX = 0;
        }
        setTimeout("dibujado()", 100);


      
    }
    
    </script>
</body>
</html>*/