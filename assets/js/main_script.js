  $(document).ready(function () {
    $('#carouselExampleCaptions').carousel();
  });

  

  document.addEventListener("DOMContentLoaded", function() {
  // Get the header element
  var header = document.getElementById('header');

  // Set the initial margin for content
  var content = document.getElementById('carouselExampleCaptions');
  content.style.marginTop = header.offsetHeight + "px";

  // Update margin dynamically if the window is resized
  window.addEventListener("resize", function() {
    content.style.marginTop = header.offsetHeight + "px";
  });
});

// at a glance function

// Function to start counting when the element is scrolled into view
function startCounting() {
          const counters = document.querySelectorAll('.counter:not(.counting)');
        
          counters.forEach(counter => {
            if (isElementInViewport(counter)) {
              counter.classList.add('counting');
              const target = +counter.getAttribute('data-target');
              const increment = Math.ceil(target / 100); // Change speed by adjusting the value here
        
              let current = 0;
              const updateCounter = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(updateCounter);
                }
                counter.textContent = current;
              }, 15); // Adjust speed by changing the interval value here
            }
          });
        }
        
        // Function to check if an element is in the viewport
        function isElementInViewport(el) {
          const rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }
        
        // Event listener for scroll event
        window.addEventListener('scroll', startCounting);
        
        // Initial check when the page loads
        startCounting();
        


      // Clickable Div

        document.addEventListener("DOMContentLoaded", function() {
  var clickableDivs = document.getElementsByClassName("glanceLink");

  // Define an array of URLs for the first four divs
  var urls = [
    // URL for DIV 1
    "https://libraryopac.iitj.ac.in/cgi-bin/koha/opac-search.pl?advsearch=1&do=Search&limit=mc-itype%2Cphr%3ABBK&searchcat=BK&limit=mc-itype%2Cphr%3ACH&limit=mc-itype%2Cphr%3AHBK&limit=mc-itype%2Cphr%3AREF&limit=mc-itype%2Cphr%3ATB&sort_by=relevance",
    // URL for DIV 2
    "https://libraryopac.iitj.ac.in/cgi-bin/koha/opac-search.pl?idx=&q=&idx=kw&sort_by=acqdate_dsc&do=OK&limit=mc-itype%3AEBK&weight_search=1",
    // URL for DIV 3
    "https://library.iitj.ac.in/ssp/subjects/databases.php?letter=All",
    // URL for DIV 4
    "https://ir.iitj.ac.in/home",
    // URL for DIv 5
    "https://library.iitj.ac.in/ssp/subjects/databases.php?letter=bytype&type=Research_Database",
    // URL for Div 6
    "https://library.iitj.ac.in/ssp/subjects/databases.php?letter=bytype&type=Newspaper",
    // URL for DIV 7
    "https://library.iitj.ac.in/ssp/subjects/guide.php?subject=RG#tab-4"
  ];

  for (var i = 0; i < clickableDivs.length; i++) {
    // Apply cursor style only for the first four divs
    if (i < 8) {
      clickableDivs[i].style.cursor = "pointer";

      // Attach click event listener only for the first four divs with different URLs
      clickableDivs[i].addEventListener("click", function(index) {
        return function() {
          // Open the corresponding URL based on the index
          window.open(urls[index], "_blank");
        };
      }(i)); // Immediately invoked function expression (IIFE) to capture the index
    }
  }
});

// Adjust heght of header 
window.addEventListener('DOMContentLoaded', () => {
            const firstHeader = document.querySelector('.topheader');
            const secondHeader = document.querySelector('.header');
            const main =  document.querySelector('.main');

            // Set the top position of the second header to the height of the first header
            secondHeader.style.top = `${firstHeader.offsetHeight}px`;


            // Re-adjust the position of the second header on window resize
            window.addEventListener('resize', () => {
                secondHeader.style.top = `${firstHeader.offsetHeight}px`;

            });
        });


// function for koha opac

function clearDefaultText() {
    var inputElement = document.getElementById("translControl1");
    if (inputElement.value === "Enter Searching Keywords Here...") {
        inputElement.value = "";
    }
}

function restoreDefaultText() {
    var inputElement = document.getElementById("translControl1");
    if (inputElement.value === "") {
        inputElement.value = "Enter Searching Keywords Here...";
    }
}
function clearDefaultText1(){
var inputElement = document.getElementById("translControl1");
if (inputElement.value === "Enter Searching Keywords Here...") {
        inputElement.value = "";
    }

}
// Carousel Slider

document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = new bootstrap.Carousel(document.getElementById('hero-carousel'), {
      interval: 5000,
      wrap: true
    });
  });

  // Chat bot


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/604a28f8385de407571f1569/1f0gr03nv';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


// Book Carousel
   document.addEventListener("DOMContentLoaded", function() {
  const carouselTrack = document.getElementById("carousel-track");

  carouselTrack.addEventListener("mouseover", function() {
    carouselTrack.style.animationPlayState = "paused";
  });

  carouselTrack.addEventListener("mouseout", function() {
    carouselTrack.style.animationPlayState = "running";
  });
});





