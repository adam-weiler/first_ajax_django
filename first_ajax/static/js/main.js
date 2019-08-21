document.addEventListener("DOMContentLoaded", function() {
    const ajaxRequestButton = document.querySelector('#get_root');
    console.log('-- Logging out the button: ', ajaxRequestButton);

    ajaxRequestButton.addEventListener('click', () => {
        console.log('-- Clicked the Run AJAX Request Root button. ');

        axios.get('http://intro-ajax-api.herokuapp.com/');

    })

    
});