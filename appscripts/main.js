require(
   // Use this library to "fix" some annoying things about Raphel paper and graphical elements:
    //     a) paper.put(relement) - to put an Element created by paper back on a paper after it has been removed
    //     b) call element.addEventListener(...) instead of element.node.addEventListner(...)
    ["../jslibs/raphael.lonce"],  // include a custom-built library

    function () {

        console.log("Yo, I am alive!");

        // Grab the div where we will put our Raphael paper
        var centerDiv = document.getElementById("centerDiv");

        // Create the Raphael paper that we will use for drawing and creating graphical objects
        var paper = new Raphael(centerDiv);
        var paperRect = document.getElementById("centerDiv").getBoundingClientRect();
        var mainRect = document.getElementById("main").getBoundingClientRect();

        // put the width and heigth of the canvas into variables for our own convenience
        var pWidth = paper.canvas.clientWidth;
        var pHeight = paper.canvas.clientHeight;
        console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight + "doc " + mainRect.top);
        //---------------------------------------------------------------------

        var bgRect = paper.rect(0,0,pWidth, pHeight);
        bgRect.attr({"fill": "black"});

        var transpRect = paper.rect(0,0,pWidth, pHeight);
        transpRect.attr({"opacity": "0", "fill": "white"}); // needs to be "filled" to listen to events?

        var mouseState = { //initialize prop-values to 0 - this is a better way to declare objects with prop-values than I did with diskArray
            "pushed": 0,
            "xpos": 0,
            "ypos": 0,
        };

        transpRect.node.addEventListener("mousedown", function (ev) {
            if (mouseState.pushed === 0){
                mouseState.pushed = 1; 
                mouseState.xpos = ev.clientX - paperRect.left;
                mouseState.ypos = ev.clientY - paperRect.top;}
                console.log("mouseState.pushed: " + mouseState.pushed + "mouseState.xpos: " + mouseState.xpos + "mouseState.ypos: " + mouseState.ypos); //keep inside for update within function event
            });
        
        transpRect.node.addEventListener("mousemove", function (ev) {
            if (mouseState.pushed === 1){ 
                mouseState.xpos = ev.clientX - paperRect.left;
                mouseState.ypos = ev.clientY - paperRect.top;}
                console.log("mouseState.pushed: " + mouseState.pushed + "mouseState.xpos: " + mouseState.xpos + "mouseState.ypos: " + mouseState.ypos); //keep inside for update within function event
            });

        transpRect.node.addEventListener("mouseup", function (ev) {
            //var mouseState.pushed, mouseState.xpos, mouseState.ypos;
            if (mouseState.pushed === 1){
                mouseState.pushed = 0;    
            }});

        var randInt = function( m, n ) {
            var range = n-m;
            var frand = Math.random()*range;
            return m+Math.floor(frand);
        }

        // set randoms circle attributes and array  START FROM SETTING CALL BACK VARIABLES/FUNCTIONS AND MORE LOOPED ARRAYS

        var diskArrayNum = 4;
        var diskArray = [];
        diskArray.xpos = [];
        diskArray.ypos = [];
        diskArray.radius = []; 
        diskArray.xrate =[];
        diskArray.yrate =[];
        diskArray.test = 0;
        var counter = 0;

        while (counter < diskArrayNum){
            
            diskArray.xpos[counter] = randInt(pWidth/1.05, pWidth/20);
            diskArray.ypos[counter] = randInt(pHeight/1.05, pHeight/20);
            diskArray.radius[counter] = randInt(5, 40); 
            diskArray.xrate[counter] =randInt(-5, 5);
            diskArray.yrate[counter] =randInt(-5, 5);
            diskArray[counter] = paper.circle(diskArray.xpos[counter], diskArray.ypos[counter], diskArray.radius[counter])
            diskArray[counter].randColorR = randInt(0,255);
            diskArray[counter].randColorG = randInt(0,255);
            diskArray[counter].randColorB = randInt(0,255);
            diskArray[counter].colorString = "rgb(" + diskArray[counter].randColorR + "," + diskArray[counter].randColorG + "," + diskArray[counter].randColorB + ")";
            diskArray[counter].attr({
                "fill" : diskArray[counter].colorString
            });
            counter++
        }
        //console.log(diskArray.randColorR)
        
        var count=0;

        var draw = function(){
        
        
        diskArray[counter] = paper.circle(diskArray.xpos[counter], diskArray.ypos[counter], diskArray.radius[counter]);    
            
            counter = 0;
            while (counter<=diskArrayNum){
            if (mouseState.pushed === 1 && Math.sqrt(((diskArray.xpos[counter]-mouseState.xpos)*(diskArray.xpos[counter]-mouseState.xpos)) + ((diskArray.ypos[counter]-mouseState.ypos)*(diskArray.ypos[counter]-mouseState.ypos))) <=100) 
                {nd = paper.circle(diskArray.xpos[counter], diskArray.ypos[counter], diskArray.radius[counter]);
                    nd.attr("stroke", "rgb(" + diskArray[counter].randColorR + "," + diskArray[counter].randColorG + "," + diskArray[counter].randColorB + ")");
                    // note the alternate method of stating prop-value with raphael above
                    nd.attr({"fill" : "rgb(" + diskArray[counter].randColorR + "," + diskArray[counter].randColorG + "," + diskArray[counter].randColorB + ")", "opacity" : 0.4
                });
                diskArray[counter].randColorR = randInt(0,255);
                diskArray[counter].randColorG = randInt(0,255);
                diskArray[counter].randColorB = randInt(0,255);
                diskArray[counter].colorString = "rgb(" + diskArray[counter].randColorR + "," + diskArray[counter].randColorG + "," + diskArray[counter].randColorB + ")";
                diskArray[counter].attr({
                    "fill" : diskArray[counter].colorString
            })};    
            diskArray.xpos[counter] += diskArray.xrate[counter];
            diskArray.ypos[counter] += diskArray.yrate[counter];
            diskArray[counter].attr({"cx": diskArray.xpos[counter], "cy": diskArray.ypos[counter], "r": diskArray.radius[counter]});
            if (diskArray.xpos[counter] > pWidth - diskArray.radius[counter]) {diskArray.xrate[counter] = -diskArray.xrate[counter]};
            if (diskArray.ypos[counter] > pHeight - diskArray.radius[counter]) {diskArray.yrate[counter] = -diskArray.yrate[counter]};
            if (diskArray.xpos[counter] < 0 + diskArray.radius[counter]) {diskArray.xrate[counter] = -diskArray.xrate[counter]};
            if (diskArray.ypos[counter] < 0 + diskArray.radius[counter]) {diskArray.yrate[counter] = -diskArray.yrate[counter]};
            
            /*Pythagorean Theorem for returning distances = var a = x1 - x2
                                                            var b = y1 - y2
                                                            var c = Math.sqrt( a*a + b*b );*/
            counter++;
        };

        count++;
        //console.log("count is " + count + " counter is " + counter);
        }
        console.log("diskArray " + diskArray + 
            "\n diskArray.xpos" + diskArray.xpos + 
            "\n diskArray.ypos " + diskArray.ypos +
            "\n diskArray.radius " + diskArray.radius +
            "\n diskArray.xrate " + diskArray.xrate +
            "\n diskArray.yrate " + diskArray.yrate);
        
        // We do this last thing as the module loads
        setInterval(draw, 33); // calls the var draw function every 20ms

});