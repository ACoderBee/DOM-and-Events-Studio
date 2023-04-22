// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    const takeoffBtn = document.getElementById("takeoff");//event
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
    //shuttle height should increase by 10,000 miles.
console.log(isReadyForLiftoff);
    }


    });
});
