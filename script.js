let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");
let layer4 = document.getElementById("layer4");
let layer5 = document.getElementById("layer5");
let layer6 = document.getElementById("layer6");
let layer7 = document.getElementById("layer7");
let layer8 = document.getElementById("layer8");
let layer9 = document.getElementById("layer9");
let text = document.getElementById("parallax-text");

let skills = document.getElementById("skills-container");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    text.style.marginRight = value * 1 + 'px';
    layer2.style.top = value * 2.5 + 'px';
    layer5.style.left = value * -1 + 'px';
    layer6.style.top = value * 1 + 'px';
    layer6.style.left = value * 1 + 'px';
    layer7.style.left = value * 1 + 'px';

    
});

// ---------------------------------preloader start---------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // Show the preloader initially
    var preloader = document.querySelector('.preloader-wrapper');
    preloader.style.display = 'flex'; // Assuming 'flex' is the initial display value
  
    // Simulate a minimum loading time (e.g., 2000 milliseconds = 2 seconds)
    var minimumLoadingTime = 1500;
  
    // Hide the preloader after the minimum loading time
    setTimeout(function () {
      preloader.style.display = 'none';
    }, minimumLoadingTime);
  });
  
  
// ---------------------------------preloader end---------------------------------------


// --------------------------------offile message start------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // Function to update the visibility of website content based on online status
    function updateWebsiteVisibility() {
        var offlineMessage = document.getElementById('offline-message');
        var websiteContent = document.getElementById('content');

        if (navigator.onLine) {
            // Online
            offlineMessage.style.display = 'none';
            websiteContent.style.display = 'block';
        } else {
            // Offline
            offlineMessage.style.display = 'flex';
            websiteContent.style.display = 'none';
        }
    }

    // Function to reload the page when online
    function reloadPageWhenOnline() {
        if (navigator.onLine) {
            location.reload();
        }
    }

    // Add event listeners for online and offline events
    window.addEventListener('online', function() {
        updateWebsiteVisibility();
        reloadPageWhenOnline();
    });

    window.addEventListener('offline', updateWebsiteVisibility);

    // Initial check when the page loads
    updateWebsiteVisibility();
});


// --------------------------------offile message end   ------------------------------------

// --------------------------------go to top button start   ------------------------------------


var btn = $('#go-top-btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// --------------------------------go to top button end   ------------------------------------