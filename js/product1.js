// let zoo = document.getElementById("zoo");
let form = document.getElementById("form");
let button = document.getElementById("submit");
let myPictureTag = document.getElementById("product-img");

form.addEventListener("submit", createAnimal);

zoo.addEventListener("click", clickHandler);

function createAnimal (event){
    event.preventDefault();

    let name = document.getElementById("input-kategori").value;
    let product = document.getElementById("input-product").value;
    let price = document.getElementById("input-price").value;

    myPictureTag.setAttribute("src", "product-img1/"+product+".png"); 
    let html = ``;
    
    let html1 = `
    <div>${name}</div>  
    <div><span>${product}</span></div> 
    `;
    let html2 = `
    <div><span>${price}</span></div>   
    `;

    //zoo.innerHTML = html;
    zoo1.innerHTML = html1;
    zoo2.innerHTML = html2;
    form.reset();
    
    // form.style.display = "none";
}

function clickHandler (event){
    
        // if(event.target.classList.contains("zoo")){
        
        // form.style.display="block";
        // form.style.display="none";
    // }

}