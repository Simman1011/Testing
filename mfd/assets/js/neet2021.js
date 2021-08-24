var discount = [];
discount['P'] = {
  'no_of_courses': 1,
  'total': 27000,
  'discount': 3000
};
discount['C'] = {
  'no_of_courses': 1,
  'total': 27000,
  'discount': 3000
};
discount['B'] = {
  'no_of_courses': 1,
  'total': 27000,
  'discount': 0
};
discount['PC'] = {
  'no_of_courses': 2,
  'total': 54000,
  'discount': 6000
};
discount['PB'] = {
  'no_of_courses': 2,
  'total': 54000,
  'discount': 3000
};
discount['CB'] = {
  'no_of_courses': 2,
  'total': 54000,
  'discount': 3000
};
discount['PCB'] = {
  'no_of_courses': 3,
  'total': 81000,
  'discount': 6000
};

var links = [];
links['P'] = 'https://learn.ahaguru.com/student/paymentlink/NDU2IyNUIyMxNjI2NjY4MzU0Mzg4';
links['C'] = 'https://learn.ahaguru.com/student/paymentlink/NDU3IyNUIyMxNjI2NjY4NzcxMjg4';
links['B'] = 'https://learn.ahaguru.com/student/paymentlink/NDMzIyNUIyMxNjI2NjY4ODk2NjQ5';
links['PC'] = 'https://learn.ahaguru.com/student/paymentlink/NDU3LDQ1NiMjVCMjMTYyNjY2OTM1NDA4MA%3D%3D';
links['PB'] = 'https://learn.ahaguru.com/student/paymentlink/NDMzLDQ1NiMjVCMjMTYyNjY5NzEzODExMA%3D%3D';
links['CB'] = 'https://learn.ahaguru.com/student/paymentlink/NDMzLDQ1NyMjVCMjMTYyNjY5NzIzODQwOA%3D%3D';
links['PCB'] = 'https://learn.ahaguru.com/student/paymentlink/NDMzLDQ1Nyw0NTYjI1QjIzE2MjY2NjkxNjc4MzQ%3D';


$(function () {
  $(document).on('click', '.buyBtn', function () {
    if (!$(this).hasClass('tick')) {
      $(this).find('.main_check img').attr('src', '/assets/images/common_imgs/buy_btn_tick.png');
      $(this).addClass('tick');
    } else {
      $(this).find('.main_check img').attr('src', '/assets/images/common_imgs/buy_btn.png');
      $(this).removeClass('tick');
    }
    $(".buy_section div.discount_text").html('');
    if ($('.tick').length > 0) {
      var amount = [];
      $('.tick').each(function (i, obj) {
        amount.push($(this).parents('.card-part').attr('id'));
      });
      var keyindex = amount.join('');
      $(".buy_section span.discount_text").html('<span>Get ' + discount[keyindex]['no_of_courses'] + ' Courses at Rs.' + (parseInt(discount[keyindex]['total']) - parseInt(discount[keyindex]['discount'])) + '/- </span>');
      $(".buy_section").show();
    } else {
      $(".buy_section").hide();
    }
  });
});


function select_all() {
  $.each($('.buyBtn'), function (e) {
    $(this).click();
  });
  buynow_link();
}

function buynow_link() {
  var key = [];
  $('.tick').each(function (i, obj) {
    key.push($(this).parents('.card-part').attr('id'));
  });
  var keyindex = key.join('');
  window.open(links[keyindex], '_blank');
  // window.location.href = links[keyindex];
}


//Get the button
var fixedShow = document.getElementById("fixed_bottom_show");
var whatappLink = document.getElementById("whatappLink");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    fixedShow.style.bottom = "0px";
    whatappLink.style.right = '15px';

  } else {
    fixedShow.style.bottom = "-100px";
    whatappLink.style.right = '-50px'
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




// Get each modal and close button
const triggers = document.getElementsByClassName("trigger");
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName("show__Modal");
const closeButtons = document.getElementsByClassName("btn-close");

// Then use `for...of`-loop with the index of each item in `triggerArray` for listening to a click event which toggles each modal to open and close
for (let [index, trigger] of triggerArray) {
  const toggleModal = () => {
    modals[index].classList.toggle("show-Modal");
  };
  trigger.addEventListener("click", toggleModal);
  closeButtons[index].addEventListener("click", toggleModal);
}


// In Expert teacher section when onclick

function toggle_visibility(id) {
  var e = document.getElementById(id);
  if (e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}

function toggle_visibility(id) {
  var e1 = document.getElementById(id);
  if (e1.style.display == 'block')
    e1.style.display = 'none';
  else
    e1.style.display = 'block';
}