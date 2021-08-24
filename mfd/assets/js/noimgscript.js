    //Get the button
    var fixedShow = document.getElementById("fixed_bottom_show");
    var whatappLink = document.getElementById("whatappLink");
    // When the user scrolls down 20px from the top of the document, show the button
    var sticky_head_banner_novid = document.getElementById("sticky-head-banner-novid");
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            fixedShow.style.bottom = "0px";
            whatappLink.style.right = '15px';
            sticky_head_banner_novid.style.backgroundColor = "#f6f9fc";
            sticky_head_banner_novid.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
            sticky_head_banner_novid.style.borderRadius = "10px";
            sticky_head_banner_novid.style.border = "0px solid #eee";

        } else {
            fixedShow.style.bottom = "-100px";
            whatappLink.style.right = '-50px'
            sticky_head_banner_novid.style.backgroundColor = "#fff";
            sticky_head_banner_novid.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.2)";
            sticky_head_banner_novid.style.border = "1px solid #eee";
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

/* Thanks Popup Meg */
$(document).ready(function (){
    $('span.close-icon, .thanks-container, .close-btn').click(function(){
        $('#thanks-meg').css('display','none');
    });
});