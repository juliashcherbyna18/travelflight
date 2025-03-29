let input = document.querySelector(".form-control")
let btn = document.querySelector(".btn-search")
let form = document.getElementById("searchForm");
let product_container = document.querySelector(".products")
let cards = product_container.querySelectorAll(".box")
let btn_bye = document.querySelectorAll(".btn-bye")

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  let input_variable = input.value.trim().toLowerCase();

  cards.forEach(element => {
    if(input_variable != ""){
      if(element.querySelector('h3').textContent.toLowerCase().search(input_variable) == -1){
        element.style.display = "none"
      } else {
        element.style.display = "block"
      }
    } else {
      element.style.display = "block"
    }
  });
});




