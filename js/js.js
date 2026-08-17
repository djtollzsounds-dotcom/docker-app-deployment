var anchors = document.querySelectorAll('a');
var selectedLinks = []

for (var i = 0; i < anchors.length; i ++) {
    var link = anchor[i];

    if (link.innerhtml === 'print') {
      selectedLinks.push(link)
    }
}


// Toggle Bar

$(document).ready(function () {
            
    $('.first-button').on('click', function () {
    
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
    
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
    
      $('.animated-icon3').toggleClass('open');
    });
    
    });