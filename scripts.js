// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    const takeoffBtn = document.getElementById("takeoff");//event obj
    const landBtn = document.getElementById("landing"); //event obj
    const abortBtn = document.getElementById("missionAbort");//event obj
    const upBtn = document.getElementById("up"); //event 
    const downBtn = document.getElementById("down"); //event obj
    const leftBtn = document.getElementById("left"); //event 
    const rightBtn = document.getElementById("right"); //event obj

    const rocketImage = document.getElementById("rocket");//set obj center-left: calc(50% - 37px)
    const flightStatus = document.getElementById("flightStatus");//p element
    const shuttleBackground = document.getElementById("shuttleBackground");//div element
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');//p element
    let shuttleAltitude= 0;
    let rocketPostnX = 0;
    let rocketPostnY = 0;

    takeoffBtn.addEventListener("click", function(){
        let isReadyForLiftoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (isReadyForLiftoff){
            flightStatus.innerText= "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleAltitude += 10000;
            spaceShuttleHeight.innerText = shuttleAltitude;
        }
    });
    landBtn.addEventListener('click',function () {
//         A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        let isReadyForLanding = window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.setAttribute("style", "backgroundColor = green");//setAttribute not preferred
        shuttleAltitude = 0;
        spaceShuttleHeight.innerText = shuttleAltitude;
        resetRocket();
    });
    abortBtn.addEventListener('click', function(){
        let isAbortingMission = window.confirm( "Confirm that you want to abort the mission.")
        flightStatus.innerText = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";//using preferred style
        shuttleAltitude = 0;
        spaceShuttleHeight.innerText = shuttleAltitude;
        resetRocket();
    });
    document.addEventListener('click', function(event) {//event delegation
        let bkgdWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("width"));
        let bkgndHeight = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("height"));
        console.log(bkgdWidth);
        console.log(event.target.id);
        if(event.target.id === "left" ){
            if(rocketPostnX > -(bkgdWidth/2)){
                rocketPostnX -=10;
                console.log(rocketPostnX);
                rocket.style.marginLeft = rocketPostnX+'px';
            }
          
        }
        if(event.target.id === "right" && rocketPostnX < (bkgdWidth/2) ){
            rocketPostnX +=10;
            console.log(rocketPostnX);
            rocket.style.marginLeft = rocketPostnX+'px';
          
        }
        if(event.target.id === "up" && rocketPostnY<(bkgndHeight-37)){
            rocketPostnY +=10;
            rocket.style.marginBottom = rocketPostnY+'px';
            shuttleAltitude += 10000;
            spaceShuttleHeight.innerText = shuttleAltitude;  
        }
        if(event.target.id === "down" && shuttleAltitude > 0){
            rocketPostnY -=10;
            rocket.style.marginBottom = rocketPostnY+'px';
            shuttleAltitude -= 10000;
            spaceShuttleHeight.innerText = shuttleAltitude;  
        }

    });
    function resetRocket() {
        rocketPostnX =0;
        rocketPostnY =0;
        rocket.style.marginBottom = rocketPostnY+'px';
        rocket.style.marginLeft = rocketPostnX+'px';
    }

});
