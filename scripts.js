// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    const takeoffBtn = document.getElementById("takeoff");//event
    const flightStatus = document.getElementById("flightStatus");//p element
    const shuttleBackground = document.getElementById("shuttleBackground");//div element
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');//p element


    takeoffBtn.addEventListener("click", function(){
        let isReadyForLiftoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (isReadyForLiftoff){
        //flight status should change to "Shuttle in flight."
    //background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
    //shuttle height should increase by 10,000 miles.

    }


    });
});
