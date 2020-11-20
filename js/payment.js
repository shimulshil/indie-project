let paymentUrl = window.location.href;
let paymentUrlObject = new URL (paymentUrl);
let transferedProduct = paymentUrlObject.searchParams.get("product");
let pretty = transferedProduct.replace(/_/g, " ");
// let pretty = transferedProduct.replace(/\s/g, " ");
//URL Percent Encoding and Ampersand Char-http://xahlee.info/js/url_encoding.html#:~:text=The%20ampersand%20char%20is%20a,be%20left%20as%20it%20is.
document.getElementById("selected-product").innerHTML = pretty;

        
let transferedProduct1 = paymentUrlObject.searchParams.get("price");
let pretty1 = transferedProduct1.replace(/_/g, " ");
document.getElementById("selected-price").innerHTML = pretty1;