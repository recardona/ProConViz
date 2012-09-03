func1 = function() 
{  
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500); 
    var circle = paper.circle(100, 100, 80);
    
    for(var i = 0; i < 5; i+=1) 
    {  
        var multiplier = i*5;  
        var circle = paper.circle(250 + (2*multiplier), 100 + multiplier, 50 - multiplier);
        circle.attr("fill", "#f00");
        circle.attr("stroke", "#fff");
    }

    var rectangle1 = paper.rect(200,200,250,100);
    var circle = paper.circle(10, 10, 8);
    
}

func2 = function()
{
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);  
    var circle = paper.circle(100, 100, 80);  
    for(var i = 0; i < 5; i+=1) {  
        var multiplier = i*5;  
        paper.circle(250 + (2*multiplier), 100 + multiplier, 50 - multiplier)  
    }  
    var rectangle = paper.rect(200, 200, 250, 100);  
    var ellipse = paper.ellipse(200, 400, 100, 50);
}

func3 = function() 
{  
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);  
    //var drawing = paper.path("M10,20L30,40");
    //var drawing = paper.path("M 250 250");
    //drawing.attr("stroke", "#fff");
    paper.path("M10,10L50,50M50,10L10,50");

}  

func4 =  function() 
{  
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);  
    var tetronimo = paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");  
  
    tetronimo.attr({fill: '#9cf', stroke: '#ddd', 'stroke-width': 5});  
}  

func5 = function()
{
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);  
    var x = 10,
    y = 20,
    width = 40,
    height = 50;
    // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
    paper.path(Raphael.format("M{0},{1}h{2}v{3}h{4}z", x, y, width, height, -width));
}

//window.onload = func5

window.onload = function() {  
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);  
    var tetronimo = paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");  
    tetronimo.attr(  
        {  
            gradient: '90-#526c7a-#64a0c1',  
            stroke: '#3b4449',  
            'stroke-width': 10,  
            'stroke-linejoin': 'round',  
            rotation: -90  
        }  
    );  
  
    tetronimo.animate({rotation: 360}, 2000, 'bounce');  
} 