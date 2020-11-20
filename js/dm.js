//Angiv et classname på det element du vil have menue in..

let dmClass = "dm-nav";
dmClass = "."+dmClass;

let dmParent = document.querySelector(dmClass);

//Angiv menu-titler og URL er
let dmPages =[
    ["Forside", "index.html"],
    ["Om os", "about.html"],
    ["Produkt", "product.html"],
    ["Kundeservice", "customerservice.html"]
];

function dmGenerateMenu(){
    let dmHTML = `<ul class="dm-nav1"> `;
    let dmUrl = window.location.pathname;
    let dmFileName = dmUrl.substring(dmUrl.lastIndexOf("/")+1);

    
    
    

    dmPages.forEach(function (element){
        let dmLinkClass =" ";
        // console.log(element);
        if(dmFileName == element[1]){
            dmLinkClass = "selected";

        }
        dmHTML += `
            <li class="menu-item"><a href="${element[1]}" class="${dmLinkClass}">${element[0]}</a></li>
        `;
    })

    dmHTML +=`</ul>`;
    dmParent.innerHTML = dmHTML
}

dmGenerateMenu();
