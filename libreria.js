	function Draw(f, ArrayPointsX, ArrayPointsY, Interval, canvas_size, Axis, Colour){

		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");

		if (Interval === undefined) {
			Interval=[-10,10] ;
		}
		if (canvasSize === undefined) {
          canvas_Size = [100,100];
		} 		

		if (Colour === undefined) {
          Colour = 'f00';
		} 
			ctx.canvas.width = canvas_size[0]
			ctx.canvas.height = canvas_size[1]
			ctx.translate(ctx.canvas.width/2,ctx.canvas.height/2);
			ctx.beginPath();
			ctx.save()
					
		if (f === undefined) {
			  f = 0;
			  GraphFunctionVectors (ArrayPointsX,ArrayPointsY)
		} 
		if (ArrayPointsX === undefined || ArrayPointsY === undefined ) {
			ArrayPointsX = 0;
			ArrayPointsY = 0;
			X=CreateVectorFunctionX(I,f)
			Y=CreateVectorFunctionY(I,f)
			GraphFunctionVectors (X,Y)
		}
		if (Axis === undefined) || Axis == 1 {
          Axis = 1
		  drawaxis(I)
		} 
		
		
	}

    function CreateVectorFunctionX(I,f){
			X=[]
			Y=[]
			i=I[0]
			pos=0;
			while (i<=I[1]){
			X[pos]=i
			x=i
			Y[pos]=eval(f)
			difference=I[1]-I[0];
			sum=difference/10000;
			i=i+sum;
			pos=pos+1;
			}
			return X
	}
	    function CreateVectorFunctionY(I,f){
			X=[]
			Y=[]
			i=I[0]
			pos=0;
			while (i<=I[1]){
			X[pos]=i
			x=i
			Y[pos]=eval(f)
			difference=I[1]-I[0];
			sum=difference/10000;
			i=i+sum;
			pos=pos+1;
			}
			return Y
	}
  function drawaxis(I) {
	difference=I[1]-I[0];
	ctx.translate(-ctx.canvas.width/2,0)
	ctx.translate(-I[0]*ctx.canvas.width/difference,0)
    var x_axis = {
      x: ctx.canvas.width * (I[0]/difference),
      y: 0,
      xf: ctx.canvas.width-ctx.canvas.width * (I[0]/difference),
      yf: 0
    }

    var y_axis = {
      x: 0,
      y: -ctx.canvas.height / 2,
      xf: 0,
      yf: ctx.canvas.height /2
	  
    }
	
    ctx.beginPath();
    ctx.moveTo(x_axis["x"],x_axis["y"]);
    ctx.lineTo(x_axis["xf"],x_axis["yf"]);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(y_axis["x"],y_axis["y"]);
    ctx.lineTo(y_axis["xf"],y_axis["yf"]);
    ctx.stroke();
    ctx.closePath();
	ctx.restore();
	}
	
	function GraphFunctionVectors (X,Y) {
			min=Math.min.apply(null,Y)
			max=Math.max.apply(null,Y)
			height=max-min
			width=X.length			
			scalex=width/ctx.canvas.width
			scaley=height/(ctx.canvas.height)
			scaley=scaley*1.05;
			
			
			
			j=0;
			pos=0;
			Xscale=[];
			Yscale=[];
			
			while (j<ctx.canvas.width){		
			Yscale[j]=(Y[pos]);
			j=j+1;
			pos=pos+Math.round(scalex);
			}
			k=-ctx.canvas.width/2;
			pos=0;
			while (k<ctx.canvas.width/2){
			ctx.beginPath()
			ctx.moveTo(k,-Yscale[pos]/scaley)
			ctx.lineTo(k+1,-Yscale[pos+1]/scaley)
			ctx.strokeStyle = '#f00'
			ctx.stroke();
			pos=pos+1
			k=k+1;
			
			}
			}