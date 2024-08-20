function includeHTML() {
    const includeElements = document.querySelectorAll('[data-include]');

    includeElements.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;

                // Extract and execute scripts from the included content
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;

                // Extract and execute inline scripts
                const inlineScripts = tempDiv.querySelectorAll('script');
                inlineScripts.forEach(script => {
                    const newScript = document.createElement('script');
                    if (script.src) {
                        newScript.src = script.src;
                    } else {
                        newScript.textContent = script.textContent;
                    }
                    document.body.appendChild(newScript);
                });
            })
            .catch(err => {
                console.error('Error including HTML file:', err);
                el.innerHTML = "<p>Content could not be loaded.</p>";
            });
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);
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


  //   Up Button
         configObj = {"buttonD":"M8 18.568L10.8 21.333 16 16.198 21.2 21.333 24 18.568 16 10.667z","buttonT":"translate(-1148 -172) translate(832 140) translate(32 32) translate(284)","shadowSize":"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","roundnessSize":"6px","buttonDToBottom":"100px","buttonDToRight":"20px","selectedBackgroundColor":"#ff4f81","selectedIconColor":"#ffffff","buttonWidth":"40px","buttonHeight":"40px","svgWidth":"30px","svgHeight":"30px"};
         
         function createButton(obj, pageSimulator) {
            const body = document.querySelector("body");
            const backToTopButton = document.createElement("span");
            backToTopButton.classList.add("softr-back-to-top-button");
            backToTopButton.id = "softr-back-to-top-button";
          
            // Append button to the appropriate container
            if (pageSimulator) {
              pageSimulator.appendChild(backToTopButton);
            } else {
              body.appendChild(backToTopButton);
            }
          
            // Apply styles from configObj
            backToTopButton.style.width = obj.buttonWidth;
            backToTopButton.style.height = obj.buttonHeight;
            backToTopButton.style.marginLeft = obj.buttonDToRight; // Use marginLeft for left positioning
            backToTopButton.style.marginBottom = obj.buttonDToBottom;
            backToTopButton.style.borderRadius = obj.roundnessSize;
            backToTopButton.style.boxShadow = obj.shadowSize;
            backToTopButton.style.color = obj.selectedBackgroundColor;
            backToTopButton.style.backgroundColor = obj.selectedBackgroundColor;
          
            // Positioning logic
            if (pageSimulator) {
              backToTopButton.style.position = "absolute";
            } else {
              backToTopButton.style.position = "fixed";
            }
            backToTopButton.style.bottom = "0px";
            backToTopButton.style.left = "0px"; // Position at the bottom left
          
            // Other styles
            backToTopButton.style.outline = "none";
            backToTopButton.style.cursor = "pointer";
            backToTopButton.style.textAlign = "center";
            backToTopButton.style.border = "solid 2px currentColor";
          
            // SVG icon HTML
            backToTopButton.innerHTML =
              '<svg class="back-to-top-button-svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" > <g fill="none" fill-rule="evenodd"> <path d="M0 0H32V32H0z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> <path class="back-to-top-button-img" fill-rule="nonzero" d="M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> </g> </svg>';
          
            // Style adjustments for the SVG
            const backToTopButtonSvg = backToTopButton.querySelector(".back-to-top-button-svg");
            backToTopButtonSvg.style.verticalAlign = "middle";
            backToTopButtonSvg.style.margin = "auto";
            backToTopButtonSvg.style.justifyContent = "center";
            backToTopButtonSvg.style.width = obj.svgWidth;
            backToTopButtonSvg.style.height = obj.svgHeight;
          
            // Apply icon color
            const backToTopButtonImg = backToTopButton.querySelector(".back-to-top-button-img");
            backToTopButtonImg.style.fill = obj.selectedIconColor;
          
            // Set SVG path and transformation attributes
            backToTopButtonImg.setAttribute("d", obj.buttonD);
            backToTopButtonImg.setAttribute("transform", obj.buttonT);
          
            // Scroll behavior logic
            if (!pageSimulator) {
              backToTopButton.style.display = "none";
              window.onscroll = function() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                  backToTopButton.style.display = "block";
                } else {
                  backToTopButton.style.display = "none";
                }
              };
          
              // Scroll to top functionality
              backToTopButton.onclick = function() {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
              };
            }
          }
          
          document.addEventListener("DOMContentLoaded", function() {
            createButton(configObj, null);
          });
