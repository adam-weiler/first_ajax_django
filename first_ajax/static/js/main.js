document.addEventListener("DOMContentLoaded", function() {
    const url = "http://intro-ajax-api.herokuapp.com/";
    const rootRequestButton = document.querySelector('#get_root');
    const pingRequestButton = document.querySelector('#get_ping');
    const pingDataElem = document.querySelector('#ping_data');
    const countRequestButton = document.querySelector('#get_count');
    const countDataElem = document.querySelector('#count_data');
    

    console.log('-- Logging out the Root button: ', rootRequestButton);
    console.log('-- Logging out the Ping button: ', pingRequestButton);
    console.log('-- Logging out the Ping Data div: ', pingDataElem);


    rootRequestButton.addEventListener('click', () => {
        console.log('-- Clicked the \'Run AJAX Request Root\' button.');

        axios.get(url);
    });


    pingRequestButton.addEventListener('click', () => {
        console.log('-- Clicked the \'Run AJAX Request to Ping/Pong\' button.');

        axios.get(`${url}ping`)
        // axios.get(`${url}pong`)
        .then((response) => {
            console.log('-- Receieved response.');
            console.log(response.data);

            let dataElem = document.createElement('p');
            dataElem.innerHTML = response.data;

            pingDataElem.innerHTML = '';
            pingDataElem.appendChild(dataElem);
        })
        .catch((error) => {
            console.log('-- Receieved error.');
            console.log(error);

            let dataElem = document.createElement('p');
            dataElem.innerHTML = `${error}<br/>So sorry for the inconvenience!`;

            pingDataElem.innerHTML = '';
            pingDataElem.appendChild(dataElem);
        })
        .then(() => {
            console.log('-- Request is over, regardless if it worked or not.');
            // console.log('Hey, the request finished!');
        })
    });
    
    
    countRequestButton.addEventListener('click', () => {
        console.log('-- Clicked the Run \'AJAX Request to Count\' button.');
        const dataElem = document.createElement('p');

        axios.get(`${url}count`)
        .then((response) => {
            console.log('-- Receieved response.');
            console.log(response.data);

            dataElem.innerHTML = `${response.data} visitors`;
        })
        .catch((error) => {
            console.log('-- Receieved error.');
            console.log(error);

            dataElem.innerHTML = `${error}<br/>So sorry for the inconvenience!`;
        })
        .then(() => {
            console.log('-- Request is over, regardless if it worked or not.');

            countDataElem.innerHTML = '';
            countDataElem.appendChild(dataElem);
        })
    })
});