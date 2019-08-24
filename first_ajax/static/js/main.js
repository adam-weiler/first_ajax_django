document.addEventListener("DOMContentLoaded", function() {
    const url = "http://intro-ajax-api.herokuapp.com";
    // Steps 1 and 2
    const rootRequestButton = document.querySelector('#get_root');
    //Steps 3 to 6
    const pingRequestButton = document.querySelector('#get_ping');
    const pingDataElem = document.querySelector('#ping_data');
    //Step 7
    const countRequestButton = document.querySelector('#get_count');
    const countDataElem = document.querySelector('#count_data');
    //Step 8
    const timeRequestButton = document.querySelector('#get_time');
    const timeDataElem = document.querySelector('#time_data');
    //Step 9
    const carRequestButton = document.querySelector('#get_car');
    const carDataElem = document.querySelector('#car_data');
    
    // console.log('-- Logging out the Root button: ', rootRequestButton);
    // console.log('-- Logging out the Ping button: ', pingRequestButton);
    // console.log('-- Logging out the Ping Data div: ', pingDataElem);
    // console.log('-- Logging out the Count button: ', countRequestButton);
    // console.log('-- Logging out the Count Data div: ', countDataElem);
    // console.log('-- Logging out the Time button: ', timeRequestButton);
    // console.log('-- Logging out the Time Data div: ', timeDataElem);
    // console.log('-- Logging out the Car button: ', carRequestButton);
    // console.log('-- Logging out the Car Data div: ', carDataElem);


    rootRequestButton.addEventListener('click', () => {  // User clicks on Request Root button.
        console.log('-- Clicked the \'Run AJAX Request Root\' button.');

        axios.get(url);
    });


    pingRequestButton.addEventListener('click', () => {  // User clicks on Request Ping/Pong button.
        console.log('-- Clicked the \'Run AJAX Request to Ping/Pong\' button.');

        axios.get(`${url}/ping`)
        // axios.get(`${url}/pong`)
        .then((response) => {
            console.log('-- Received response.');
            console.log(response.data);

            let dataElem = document.createElement('p');
            dataElem.innerHTML = response.data;

            pingDataElem.innerHTML = '';
            pingDataElem.appendChild(dataElem);
        })
        .catch((error) => {
            console.log('-- Received error.');
            console.log(error);

            let dataElem = document.createElement('p');
            dataElem.innerHTML = `${error}<br/>So sorry for the inconvenience!`;

            pingDataElem.innerHTML = '';
            pingDataElem.appendChild(dataElem);
        })
        .then(() => {
            console.log('-- Request is over, regardless if it worked or not.');
            // console.log('Hey, the request finished!');
        });
    });
    
    
    countRequestButton.addEventListener('click', () => {  // User clicks on Request to Count button.
        console.log('-- Clicked the Run \'AJAX Request to Count\' button.');
        const dataElem = document.createElement('p');

        axios.get(`${url}/count`)
        .then((response) => {
            console.log('-- Received response.');
            console.log(response.data);

            dataElem.innerHTML = `${response.data} visitors`;
        })
        .catch((error) => {
            console.log('-- Received error.');
            console.log(error);

            dataElem.innerHTML = `${error}<br/>So sorry for the inconvenience!`;
        })
        .then(() => {
            console.log('-- Request is over.');

            countDataElem.innerHTML = '';
            countDataElem.appendChild(dataElem);
        });
    });


    timeRequestButton.addEventListener('click', () => {  // User clicks on Request to Time button.
        console.log('-- Clicked the Run \'AJAX Request to Time\' button.');
        const dataElem = document.createElement('p');

        axios.get(`${url}/time`, { 
            // params: {timezone: 'Europe/Sofia'}
            // params: {timezone: 'America/Mexico_City'}
            // params: {timezone: 'Pacific/Honolulu'}
            // params: {timezone: 'Asia/Kolkata'}
            params: {timezone: 'America/New_York'}
        })
        .then((response) => {
            console.log('-- Received response.');
            console.log(response.data);

            dataElem.innerHTML = response.data;
        })
        .catch((error) => {
            console.log('-- Received error.');
            console.log(error);

            dataElem.innerHTML = `${error}<br/>So sorry for the inconvenience!`;
        })
        .then(() => {
            console.log('-- Request is over.');

            timeDataElem.innerHTML = '';
            timeDataElem.appendChild(dataElem);
        });
    });


    carRequestButton.addEventListener('click', () => {  // User clicks on Request to Car button.
        console.log('-- Clicked the Run \'AJAX Request to a Car\' button.');
        const dataElem = document.createElement('ul');

        axios.get(`${url}/a_car`)
        .then((response) => {
            console.log('-- Received response.');
            console.log(response.data);

            dataElem.innerHTML = response.data;
        })
        .catch((error) => {
            console.log('-- Received error.');
            console.log(error);

            dataElem.innerHTML = `${error}<br/>So sorry for the inconvenience!`;
        })
        .then(() => {
            console.log('-- Request is over.');

            carDataElem.innerHTML = '';
            carDataElem.appendChild(dataElem);
        });
    });
});