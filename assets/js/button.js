function myfunction() {
    var menu = document.getElementsByClassName('mastfoot');
    if (menu[0].style.display === 'block') {
        menu[0].style.display = 'none';
    }
    else {
        menu[0].style.display = 'block';

        }
}