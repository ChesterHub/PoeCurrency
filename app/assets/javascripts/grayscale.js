/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 80) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});

// function to scroll table combo box
// $(function() {
//     $('.combo-scroll').bind('click', function(event) {
//         alert("yex");
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 800, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

$(document).delegate('td','mouseover mouseleave', function(e) {
    if (e.type == 'mouseover') { 
      $(this).parent().addClass("hover");
      $("colgroup").eq($(this).index()).addClass("hover");
      $(".table-headers").eq($(this).index()).addClass("hover");
  }
  else {
      $(this).parent().removeClass("hover");
      $("colgroup").eq($(this).index()).removeClass("hover");
      $(".table-headers").eq($(this).index()).removeClass("hover");
  }
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});



