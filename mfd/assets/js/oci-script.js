var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// -----------------
// Youtube Pause while slide to left or right
// -----------------

$(document).ready(function () {
    $('span.pause-video').click(function () {
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' +
            'pauseVideo' + '","args":""}', '*');
    });
    $('#myModal').click(function () {
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' +
            'pauseVideo' +
            '","args":""}', '*');
    });
});

/* Pause video on bg */
$(document).ready(function () {
    $('#myModal .close.pause-video').click(function () {
        $('.youtube-video').stopVideo();
    });
})



// Teacher Details popup

$(document).ready(function () {
    $('.teacher-btn').click(function () {
        $('.teacher-details-container, .teacher-details-card').css('display', 'block');
    });
    $('span.teacher-card-close, .teacher-details-container').click(function () {
        $('.teacher-details-container, .teacher-details-card').css('display', 'none');
    });
});


$(document).ready(function () {
    $('#balaji-btn').click(function () {
        $('#teacherCardImg').attr('src', 'mfd/assets/img/tech1.png');
        $('#teacherCardText').html(
            '<b>Dr. Balaji Sampath</b>, got his B.Tech from IIT Madras and PhD from the University of Maryland. Balaji’s Physics and Math classes focus on conceptual clarity, practical experiments and innovative problem solving techniques. He has helped thousands of students get into IITs, NITs and BITS. Lots of students have reported ‘falling in love with Physics’ because of Balaji’s classes.His popular science demos on Sun TV, his books, videos and teaching methods have inspired lakhs of students. He also founded AID INDIA and Disha Foundation, non-profit initiatives that have educated over a million children. For innovation in Science education, Balaji was awarded Ashoka Fellowship, Lemelson Inventor Certificate, University of Maryland International Alumnus Award and the IIT Madras Distinguished Alumnus Award.'
        )
    });

    $('#ksbalaji-btn').click(function () {
        $('#teacherCardImg').attr('src', 'mfd/assets/img/ksbalaji.png');
        $('#teacherCardText').html(
            '<b>Prof. K. S. Balaji</b> graduated from IIT Kanpur and got his Ph D in Physics from the University of California. He taught at the University of California for 8years before returning to India to do research and teach Physics In his 30 Years of physics teaching experience, he has trained thousands of students for IIT and other competitive exams His IIT JEE Physics classes help students gain fresh perspective and understand concepts clearly.'
        )
    });

    $('#evvie-btn').click(function () {
        $('#teacherCardImg').attr('src', 'mfd/assets/img/evve.png');
        $('#teacherCardText').html(
            '<b>Evvie Chockalingam</b> did her M.Sc Eng and Ph.D from IISc Banglore. She was teaching Chemistry for B.E students at Anna University for almost 4 years. She also worked as a scientist at CSIR Lab for 3 years. Over the Last ten years she has been teaching chemistry for Class 11 and Class 12 students who are aspiring for IIT JEE and NEET by following a conceptual teaching method.'
        )
    });

    $('#paul-btn').click(function () {
        $('#teacherCardImg').attr('src', 'mfd/assets/img/paul.png');
        $('#teacherCardText').html(
            '<b>Prof. Paul Vinotha Rajan</b> (M.Sc., B.Ed) is an expert Biology teacher, who is passionate about developing interesting ways to teach concepts in Biology. He has helped hundreds of understand difficult concepts easily and top entrance examinations. He has vast experience in producing modules for e-learning modules in Biology at International Standards.'
        )
    });

});