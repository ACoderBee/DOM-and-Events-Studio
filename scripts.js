// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    const takeoffBtn = document.getElementById("takeoff");//event obj
    const landBtn = document.getElementById("landing"); //event obj
    const abortBtn = document.getElementById("missionAbort");//event obj
    
    const flightStatus = document.getElementById("flightStatus");//p element
    const shuttleBackground = document.getElementById("shuttleBackground");//div element
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');//p element
    let shuttleAltitude= 0;

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
    });
    abortBtn.addEventListener('click', function(){
        let isAbortingMission = window.confirm( "Confirm that you want to abort the mission.")
        flightStatus.innerText = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";//using preferred style
        shuttleAltitude = 0;
        spaceShuttleHeight.innerText = shuttleAltitude;
    })
});
