

var features_button = document.getElementById('features')
var features_menu = document.getElementById('features-container')

features_button.addEventListener('click', function() {
    
    if (features_menu.classList.contains('features-hidden')) {

        features_menu.classList.remove('features-hidden');
        features_menu.classList.add('features-visible')

    } else {

        features_menu.classList.remove('features-visible');
        features_menu.classList.add('features-hidden')
    }



})