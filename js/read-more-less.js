let products = document.querySelectorAll(".dis-product");
let btn = document.getElementById("more");
let count = 4;

btn.addEventListener("click", function(){
    if (count > products.length){
        this.removeEventListener("click", function(){});
        this.addEventListener("click", function(){
            window.location.reload();
        })
    }
    count = count + 5;

    products.forEach(function(element, index){
        if(index <= count){
            element.classList.remove("hidden-product");
        }
    })
    if (count>products.length){
        this.innerHTML = "Vis mindre";
    }
    

});

