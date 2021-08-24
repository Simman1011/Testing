//Get the button
var fixedShow = document.getElementById("fixed_bottom_show");
var whatappLink = document.getElementById("whatappLink");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        fixedShow.style.bottom = "0px";
        whatappLink.style.right = '15px';

    } else {
        fixedShow.style.bottom = "-100px";
        whatappLink.style.right = '-50px'
    }
}