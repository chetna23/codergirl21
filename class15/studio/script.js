window.onload = (event) => {
    console.log('page is fully loaded');
    const takeoff = document.querySelector('#takeoff');
    const landing = document.querySelector('#landing');
    const abort = document.querySelector('#missionAbort');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let flightStatus = document.getElementById('flightStatus');
    let height = 0;
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let rocketImage = document.getElementById("rocket");
    rocketImage.style.position= "relative";
    rocketImage.style.top = '20px';
    rocketImage.style.left = '20px';
    rocketImage.style.visibility='visible';
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    let vertPosString = rocketImage.style.top;
    let vertPos = Number(vertPosString.split('px')[0]);
    let horizonPosString = rocketImage.style.left;
    let horiPos = Number(horizonPosString.split('px')[0]);
    takeoff.addEventListener('click', (event) => {
        let affirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(affirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.background = "blue";
            height += Number(10000);
            shuttleHeight.innerHTML = height;
        }
    })

    landing.addEventListener('click', (event) => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        height = 0;
        shuttleHeight.innerHTML = height;
    })

    abort.addEventListener('click', (event) => {
        let affirm = window.confirm("Confirm that you want to abort the mission.");
        if(affirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.background = "green";
            height = 0;
            shuttleHeight.innerHTML = height;
        }
    })

    up.addEventListener('click', (event) => {
        if(vertPos > -10) vertPos -= 10;
        rocketImage.style.top = `${vertPos}px`;
        height += 10000;
        shuttleHeight.innerHTML = height;
    })

    down.addEventListener('click', (event) => {
        if(vertPos < 250) vertPos += 10;
        rocketImage.style.top = `${vertPos}px`;
        height -= 10000;
        shuttleHeight.innerHTML = height;
    })

    left.addEventListener('click', (event) => {
        if(horiPos > -160) horiPos -= 10;
        rocketImage.style.left = `${horiPos}px`;
    })

    right.addEventListener('click', (event) => {
        if(horiPos < 160) horiPos += 10;
        rocketImage.style.left = `${horiPos}px`;
    })

  };