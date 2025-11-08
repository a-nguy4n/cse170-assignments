
// Starter JS code from the Google Drive Link provided in instructions
// You will need to write the Javascript for the carousel button functionality. We  provide only some example images. 
let imageURLs = [
    "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzkxOTM5LXdpa2ltZWRpYS1pbWFnZS1rb3dic3dsMC5qcGc.jpg", 
    "https://upload.wikimedia.org/wikipedia/commons/5/53/Lake_Kinney_mit_Mount_Whitehorn.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/202506_%E6%B7%B1%E5%A4%9C%E5%9C%A8%E5%86%B7%E6%B0%B4%E5%9D%91%E9%81%8A%E5%AE%A2%E6%9C%8D%E5%8B%99%E7%AB%99%E7%9E%AD%E6%9C%9B%E7%9A%84%E7%A9%8D%E9%9B%A8%E9%9B%B2%E6%89%93%E9%9B%B7_01.jpg/1599px-202506_%E6%B7%B1%E5%A4%9C%E5%9C%A8%E5%86%B7%E6%B0%B4%E5%9D%91%E9%81%8A%E5%AE%A2%E6%9C%8D%E5%8B%99%E7%AB%99%E7%9E%AD%E6%9C%9B%E7%9A%84%E7%A9%8D%E9%9B%A8%E9%9B%B2%E6%89%93%E9%9B%B7_01.jpg?20250608231039"  
];


function replaceImg(index){
    const currentImg = document.querySelector(".carousel");
    const replacementImg = document.createElement('img');
    replacementImg.className = "carousel";
    replacementImg.src = imageURLs[index];
    replacementImg.alt = "Image " + (index + 1);
    replacementImg.id = String(index);

    console.log("Current id is:", currentImg.id);
    currentImg.replaceWith(replacementImg);
}


// get image id 
// check what number image id is 
// if img id is 1 or 2 decrement 
// if img id is 0 change to 2

function prev(){
    const currentImage = document.querySelector(".carousel");
    const currentImageIndex = parseInt(currentImage.id);
    let previousImageIndex = currentImageIndex - 1;
    
    if(previousImageIndex < 0){
        previousImageIndex = imageURLs.length - 1;  
    }
    
    console.log("previous button clicked");
    replaceImg(previousImageIndex);
 
};


// get image id 
// check what number image id is 
// if img id is 0 or 1 increment to next 
// if img id is 2 change to 0 
function next(){
    const currentImage = document.querySelector(".carousel");
    const currentImageIndex = parseInt(currentImage.id);
    let nextImageIndex = currentImageIndex + 1;

    if(nextImageIndex >= imageURLs.length){
        nextImageIndex = 0;   
    }

    console.log("next button clicked");
    replaceImg(nextImageIndex);
};  


window.addEventListener("DOMContentLoaded", () => {

    const starterImg = document.querySelector(".carousel");
    if(starterImg && starterImg.id == ''){
        starterImg.id = "0";
    }
});