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

func3 = function ()
{
    var paper = new Raphael(10,50, 640,400);
    var circle = paper.circle(50,40,10);
    var c = paper.path("M10 10L90 90");
    var c = paper.path("M 100 100 L 300 100 L 200 300 z")
    paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z")
}

window.onload = func3

