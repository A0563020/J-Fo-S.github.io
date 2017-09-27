require(
	[],

	function () {
        console.log("yo");
    
    var main = document.getElementById("main");
    var head = document.getElementById("head");

    main.style.font = "18px lucida console";
    //head.style.textAlign = "center"; // doesn't seem to work the same with class names.. investigate

    var body = document.getElementById("body");

    //body.style.backgroundColor = "hsl(120, 30%, 80%)"; //makehslString should out put in this format

    var makehslString = function(ih, is, il){
    	var hslStringNums = "hsl("+ ih + ", " + is + "%, " + il +"%)"; //percentage functional/necessary?
    	return hslStringNums;
    }
    
    body.style.backgroundColor = makehslString(0, 0, 0);

    document.getElementById("article").onmousemove = function() {myFunction(event)
        }

     // ClientRect object gets width and height for element relative scaling   
    /*var ax = article.getBoundingClientRect().left;
    var ay = article.getBoundingClientRect().top;
    //var bw = article.getBoundingClientRect().right - article.getBoundingClientRect().left;
    var aw = article.getBoundingClientRect().width;
    //var bh = article.getBoundingClientRect().bottom - article.getBoundingClientRect().top;
    var ah = article.getBoundingClientRect().height;
    console.log("The document x y and element w h is " + ax + ", " + ay + ", " + aw + ", " + ah);*/

    
    var img = document.getElementById("img");

    var makeopacitystring = function(o) { //Recall = this creates the necessary syntax-string for dom communication
        opacitystringnums = o;
        return o;
    }

    img.style.opacity = makeopacitystring(0);

    /*function myFunction(ev) { // works because it passes the syntax and values
        makeopacitystring = (ev.clientY - article.offsetTop)/article.getBoundingClientRect().height;
        img.style.opacity = makeopacitystring; 
        //console.log(makeopacitystring);
    }*/


    

    //console.log("The HSL + opacity values are " + hue.value + " " + saturation.value + " " + lightness.value + " " + opacity.value);	

    var articlea = document.getElementById("article");
    var bodya = document.getElementById("body"); 
    var imga = document.getElementById("img");
    
    var makesat = function (m, n) { // note how function is returned so it can be invoked later
        var range = n-m;
        var frand = Math.random()*range;
        return m+Math.floor(frand);
    }

    articlea.addEventListener("mousedown", mouseDown, false);
    imga.addEventListener("mouseup", mouseUp, false);
    
    function mouseDown (ev) { // try inserting p5 draw here - set up var to equal imga
        imga.style.zIndex = "1"; //z-index must be "zIndex" to avoid mistaking logical operator "-"
        bodya.style.zIndex = "-1";
        imga.style.filter = "saturate(" + makesat(10, 70) + ")";
        imga.style.opacity = "1";
        //console.log("Mouse is down " + imga.style.filter);
    }

    function mouseUp (ev) {
        imga.style.zIndex = "-1";
        bodya.style.zIndex = "1";
        imga.style.filter = "saturate(100%)";
        imga.style.opacity = "0.5";
        //console.log("Mouse is up");
    }

	}

);