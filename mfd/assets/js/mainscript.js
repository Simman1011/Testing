//Get the button
var fixedShow = document.getElementById("fixed_bottom_show");
var whatappLink = document.getElementById("whatappLink");
// Get Sticky
var head_sticky_banner = document.getElementById("head-sticky-banner")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        fixedShow.style.bottom = "0px";
        whatappLink.style.right = '15px';
        head_sticky_banner.style.backgroundColor = "#f6f9fc33";
        head_sticky_banner.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";

    } else {
        fixedShow.style.bottom = "-100px";
        whatappLink.style.right = '-50px'
        head_sticky_banner.style.backgroundColor = "white";
        head_sticky_banner.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.2)";
    }
}






// View more 

let hideContent = document.querySelectorAll('div.content-hide');
let viewMore = document.getElementById('viewMore');

viewMore.addEventListener('click', () => {
    hideContent[0].classList.toggle('content-show');
    hideContent[1].classList.toggle('content-show');
    if (hideContent[0].classList.contains('content-show'))
        document.querySelector('button.view_more').innerHTML = 'View Less';
    else
        document.querySelector('button.view_more').innerHTML = 'View More';
})


// Onclick Popup iframe Video in top banner

var modal = document.getElementById("myiframeModal");
var btn = document.getElementById("myiframeBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }
    if (event.target == span) {
        modal.style.display = "none";
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }
}



// -----------------
// Youtube Pause while slide to left or right
// -----------------

$(document).ready(function () {
    $('span.pause-video').click(function () {
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
    $('#myModal').click(function () {
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
});



/* Pause video on bg */
$(document).ready(function () {
    $('.iframeModal .close.pause-video').click(function () {
        $('.youtube-video').stopVideo();
    });
    $('#myModal .close.pause-video').click(function () {
        $('.youtube-video').stopVideo();
    });
})


/* Thanks Popup Meg */
$(document).ready(function () {
    $('span.close-icon, .thanks-container, .close-btn').click(function () {
        $('#thanks-meg').css('display', 'block');
    });
});





/* Fully Covered Course for IIT JEE Start*/

//Mobile view variables
var button3MonthIIT_M = document.getElementById('3Months_IIT_M');
var button6MonthIIT_M = document.getElementById('6Months_IIT_M');
var button1YearIIT_M = document.getElementById('1Year_IIT_M');

var buyBtn1IIT = document.getElementById('btn1IIT_M');
var buyBtn2IIT = document.getElementById('btn2IIT_M');

var priceTextIIT = document.getElementById('offer_price_IIT');


//Desktop view variables
var button3MonthIIT_D = document.getElementById('3MonthsIIT_D');
var button6MonthIIT_D = document.getElementById('6MonthsIIT_D');
var button1YearIIT_D = document.getElementById('1YearIIT_D');

var buyBtn_IIT_D = document.getElementById('btn_IIT_D');

//Define Course Price
const priceIIT = [];
priceIIT[1] = '&#x20B9;8,500';
priceIIT[2] = '&#x20B9;10,000';
priceIIT[3] = '&#x20B9;15,000';

//Define Buy link
const links_IIT = [];
links_IIT[1] = "https://learn.ahaguru.com/student/paymentlink/MzMxIyNUIyMxNjI4NDk1MTEwNzM5";
links_IIT[2] = "https://learn.ahaguru.com/student/paymentlink/MzMxIyNUIyMxNjI4NDk1MjUyNzUw";
links_IIT[3] = "https://learn.ahaguru.com/student/paymentlink/MzMxIyNUIyMxNjI3NTY5MzQ2MTg4";



//Mobile view Function
function buyFun_IIT_M() {
    if (button3MonthIIT_M.checked) {
        priceTextIIT.innerHTML = priceIIT[1];
        buyBtn1IIT.href = links_IIT[1];
        buyBtn2IIT.href = links_IIT[1];
    } else if (button6MonthIIT_M.checked) {
        priceTextIIT.innerHTML = priceIIT[2];
        buyBtn1IIT.href = links_IIT[2];
        buyBtn2IIT.href = links_IIT[2];
    } else if (button1YearIIT_M.checked) {
        priceTextIIT.innerHTML = priceIIT[3];
        buyBtn1IIT.href = links_IIT[3];
        buyBtn2IIT.href = links_IIT[3];
    }
}

//Desktop view Function
function buyFun_IIT_D() {
    if (button3MonthIIT_D.checked) {
        buyBtn_IIT_D.href = links_IIT[1];
    } else if (button6MonthIIT_D.checked) {
        buyBtn_IIT_D.href = links_IIT[2];
    } else if (button1YearIIT_D.checked) {
        buyBtn_IIT_D.href = links_IIT[3];
    }
}

/* Fully Covered Course for ITT JEE End*/



/* Fully Covered Course for NEET Start*/

//Mobile view variables
var button3MonthNEET_M = document.getElementById('3Months_NEET_M');
var button6MonthNEET_M = document.getElementById('6Months_NEET_M');
var button1YearNEET_M = document.getElementById('1Year_NEET_M');

var buyBtn1NEET = document.getElementById('btn1NEET_M');
var buyBtn2NEET = document.getElementById('btn2NEET_M');

var priceTextNEET = document.getElementById('offer_price_NEET');


//Desktop view variables
var button3MonthNEET_D = document.getElementById('3MonthsNEET_D');
var button6MonthNEET_D = document.getElementById('6MonthsNEET_D');
var button1YearNEET_D = document.getElementById('1YearNEET_D');

var buyBtn_NEET_D = document.getElementById('btn_NEET_D');

//Define Course Price
const priceNEET = [];
priceNEET[1] = '&#x20B9;8,500';
priceNEET[2] = '&#x20B9;10,000';
priceNEET[3] = '&#x20B9;15,000';

//Define Buy link
const links_NEET = [];
links_NEET[1] = "https://learn.ahaguru.com/student/paymentlink/MzI4IyNUIyMxNjI4NDk1MTczOTE2";
links_NEET[2] = "https://learn.ahaguru.com/student/paymentlink/MzI4IyNUIyMxNjI4NDk1MzE3NTY4";
links_NEET[3] = "https://learn.ahaguru.com/student/paymentlink/MzI4IyNUIyMxNjI3NTY5NDExODY2";


//Mobile view Function
function buyFun_NEET_M() {
    if (button3MonthNEET_M.checked) {
        priceTextNEET.innerHTML = priceNEET[1];
        buyBtn1NEET.href = links_NEET[1];
        buyBtn2NEET.href = links_NEET[1];
    } else if (button6MonthNEET_M.checked) {
        priceTextNEET.innerHTML = priceNEET[2];
        buyBtn1NEET.href = links_NEET[2];
        buyBtn2NEET.href = links_NEET[2];
    } else if (button1YearNEET_M.checked) {
        priceTextNEET.innerHTML = priceNEET[3];
        buyBtn1NEET.href = links_NEET[3];
        buyBtn2NEET.href = links_NEET[3];
    }
}

//Desktop view Function
function buyFun_NEET_D() {
    if (button3MonthNEET_D.checked) {
        buyBtn_NEET_D.href = links_NEET[1];
    } else if (button6MonthNEET_D.checked) {
        buyBtn_NEET_D.href = links_NEET[2];
    } else if (button1YearNEET_D.checked) {
        buyBtn_NEET_D.href = links_NEET[3];
    }
}

/* Fully Covered Course for NEET End*/