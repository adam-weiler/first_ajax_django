document.addEventListener("DOMContentLoaded", function() {
    const rootRequestButton = document.querySelector('#get_root');
    const pingRequestButton = document.querySelector('#get_ping');
    const pingDataElem = document.querySelector('#ping_data');

    console.log('-- Logging out the Root button: ', rootRequestButton);
    console.log('-- Logging out the Ping button: ', pingRequestButton);
    console.log('-- Logging out the Ping Data div: ', pingDataElem);

    rootRequestButton.addEventListener('click', () => {
        console.log('-- Clicked the Run AJAX Request Root button.');

        axios.get('http://intro-ajax-api.herokuapp.com/');
    });



    pingRequestButton.addEventListener('click', () => {
        console.log('-- Clicked the Run AJAX Request to Ping/Pong button.');

        // axios.get('http://intro-ajax-api.herokuapp.com/ping')
        axios.get('http://intro-ajax-api.herokuapp.com/pong')
        .then((response) => {
            console.log('-- Receieved response.');
            console.log(response.data);

            const dataElem = document.createElement('p');
            dataElem.innerHTML = response.data;

            pingDataElem.innerHTML = '';

            pingDataElem.appendChild(dataElem);
        })
        .catch((error) => {
            console.log('-- Receieved error.');
            console.log(error);

            const dataElem = document.createElement('p');
            dataElem.innerHTML = `${error}<br/>So sorry for the inconvenience!`;

            pingDataElem.innerHTML = '';

            pingDataElem.appendChild(dataElem);
        })
        .then(() => {
            console.log('Hey, the request finished!');
        })
    });   
});