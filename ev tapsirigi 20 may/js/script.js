let opening = document.querySelectorAll(".transition");

// console.log(opening)

for (i = 0; i < opening.length; i++){
    opening[i].addEventListener("click", function(){
        this.classList.toggle("active");       
        var panel = this.nextElementSibling;
        // console.log(panel)




        if (this.childNodes[1].childNodes[0].className == "fas fa-plus"){

                this.childNodes[1].childNodes[0].classList.replace("fa-plus","fa-minus");
        }
        else{
            
          this.childNodes[1].childNodes[0].classList.replace("fa-minus","fa-plus");
        }
        
        if (panel.style.display == "block") {
            panel.style.display = "none";
            
            
            
          } else {
            panel.style.display = "block";
            
          }

    })
}

