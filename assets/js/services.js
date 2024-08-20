document.addEventListener("DOMContentLoaded", function() {
    var serviceLinks = document.getElementsByClassName("serviceLink");
  
    // Define an array of URLs for the first four divs
    var urls = [
      "https://docs.google.com/forms/d/e/1FAIpQLSeQCkYy0u91WinRr8gWeJRp-5atenlD6N5Abfs8tvttIsQoTw/viewform", // URL for DIV 1
      "https://docs.google.com/forms/d/e/1FAIpQLSeQCkYy0u91WinRr8gWeJRp-5atenlD6N5Abfs8tvttIsQoTw/viewform", // URL for DIV 2
      "https://docs.google.com/forms/d/e/1FAIpQLSeZFN86UFitjJZOtMZJ_VR5OeMBfTYRz944QJtS5--1rySqaQ/viewform", // URL for DIV 3
      "", // URL for DIV 4 (empty)
      "https://libraryopac.iitj.ac.in/cgi-bin/koha/opac-shelves.pl?op=list&public=1", // URL for DIV 5
      "", // URL for DIV 6 (empty)
      "https://library.iitj.ac.in/ssp/subjects/databases.php?letter=bytype&type=eJournals", // URL for DIV 7
      "https://library.iitj.ac.in/ssp/subjects/databases.php?letter=bytype&type=Research_Database", // URL for DIV 8
      "https://library.iitj.ac.in/ssp/subjects/databases.php?letter=bytype&type=Research_Support_Tools", // URL for DIV 9
      "https://library.iitj.ac.in/ssp/subjects/databases.php?letter=bytype&type=Newspaper", // URL for DIV 10
      "https://ir.iitj.ac.in/home", // URL for DIV 11
      "https://shodhganga.inflibnet.ac.in/", // URL for DIV 12
      "https://app.myloft.xyz/user/login", // URL for DIV 13
      "https://library.iitj.ac.in/ssp/subjects/guide.php?subject=RG#tab-4", // URL for DIV 14
      "http://172.16.100.168:8080/jspui/handle/123456789/218", // URL for DIV 15
      "https://supportcc.iitj.ac.in/scp/login.php", // URL for DIV 16
      "https://supportcc.iitj.ac.in/scp/login.php", // URL for DIV 17
      "https://iitj.irins.org/", // URL for DIV 18
      "https://scholar.iitj.ac.in/home", // URL for DIV 19
      "https://orcid.org/", // URL for DIV 20
      "https://library.iitj.ac.in/ssp/subjects/guide.php?subject=Rat" // URL for DIV 21
    ];
  
    // Add event listeners for hover effect
    for (var i = 0; i < serviceLinks.length; i++) {
      if (i < urls.length) {
        serviceLinks[i].style.cursor = "pointer";
        serviceLinks[i].setAttribute("data-index", i); // Set a data attribute to store the index
  
        // Mouse enter event (hover in)
        serviceLinks[i].addEventListener("mouseenter", function() {
          var index = this.getAttribute("data-index");
          this.style.backgroundColor = "#ff4f81";
          this.style.color="#fff"
        });
  
        // Mouse leave event (hover out)
        serviceLinks[i].addEventListener("mouseleave", function() {
          this.style.backgroundColor = "";
          this.style.color=""; // Reset background color on mouse leave
        });
  
        // Click event listener
        serviceLinks[i].addEventListener("click", function() {
          var index = this.getAttribute("data-index");
          if (urls[index]) {
            window.open(urls[index], "_blank");
          }
        });
      }
    }
  });
  