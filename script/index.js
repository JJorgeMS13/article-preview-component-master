const btnFooterLight = document.getElementById('btn_activa_footer_light');
const btnFooterDesktop = document.getElementById('btn_activa_footer_desktop');
const btnFooterDark = document.getElementById('btn_activa_footer_dark');
const footercard1 = document.getElementsByClassName('card__footer');
const footercard2 = document.getElementsByClassName('card__footer2');
const tooltipText = document.getElementsByClassName('tooltipText');



btnFooterLight.addEventListener('click', function () {
    if (footercard1[0].style.display === '' || footercard1[0].style.display === 'flex') {
        footercard1[0].style.display = 'none';
        footercard2[0].style.display = 'flex';
    }
});

btnFooterDark.addEventListener('click', function () {
    if (footercard2[0].style.display === 'flex') {
        footercard1[0].style.display = 'flex';
        footercard2[0].style.display = 'none';
    }
});

btnFooterDesktop.addEventListener('click', function () {
    if (tooltipText[0].style.display === '' || tooltipText[0].style.display === 'none') {
        tooltipText[0].style.display = 'flex';
    }else {
        tooltipText[0].style.display = 'none';
    }
});