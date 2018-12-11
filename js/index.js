(function () {
    window.addEventListener('DOMContentLoaded', function () {
        init();
    });
})();

function init () {
    var image = document.getElementById('image');
    image.addEventListener('click', imageClick);
    document.getElementsByClassName('md-dialog-close')[0].addEventListener('click', closeDialog);
    document.getElementById('big_img').addEventListener('click', toggleView);
}

function imageClick () {
    document.getElementsByClassName('md-dialog')[0].style.display = 'flex';
}

function closeDialog (e) {
    var father = e.target.parentElement.parentElement;
    father.style.display = 'none';
}

function toggleView () {
    var header = document.getElementsByClassName('md-dialog-header')[0];
    var footer = document.getElementsByClassName('md-footer')[0];

    if (header.style.display !== 'none') {
        header.style.display = 'none';
        footer.style.display = 'none';
    } else {
        header.style.display = 'flex';
        footer.style.display = 'block';
    }
}