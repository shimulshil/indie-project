let form = document.getElementById("form");
let button = document.getElementById("submit");
let myPictureTag = document.getElementById("product-img");

form.addEventListener("submit", createAnimal);

// zoo.addEventListener("click", clickHandler);

function createAnimal (event){
    event.preventDefault();

    // let name = document.getElementById("input-kategori").value;
    
    let product = document.getElementById("input-product").value;
    
    let index = document.getElementById("input-product").selectedIndex
    
    let descId = document.getElementById("input-product")[index].dataset.desc;
    
    let desc = document.getElementById(descId).innerHTML

    // let price = document.getElementById("input-price").value;

    let descId1 = document.getElementById("input-product")[index].dataset.price;

    let prices = document.getElementById(descId1).innerHTML

    myPictureTag.setAttribute("src", "product-img1/"+product+".png"); 
      
    let html1 = `<p>${desc}</p>`;
    let html2 = `<div><span>${prices}</span></div>`;

    productdescription.innerHTML = html1;
    productprice.innerHTML = html2;
    form.reset();

}

