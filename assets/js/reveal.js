window.addEventListener("scroll", reveal);
        
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var windowheight = window.innerHeight;
    
    for (var i = 0; i < reveals.length; i++) {
        var revealtop = reveals[i].getBoundingClientRect().top;
        
        if (revealtop < windowheight - 200) { // Adjust the offset as needed
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

reveal(); // Call reveal initially in case some elements are already in view.

