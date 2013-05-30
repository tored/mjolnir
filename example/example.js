/*global mjolnir */

(function ($) {
    $('#div').addClass('test');
    if (document.getElementById('div').hasClass('test')) {
        $('#div').addClass('red');
    }
    $('#content div').addEventListener('click', function (e) {
        this.toggleClass('red');
    });
    $('#content')[0].getElementsByTagName('div').attr('data-mjolnir', 'hammer');
}(mjolnir));