let imageDiv = document.getElementById("changing-image");
let i = 0;
let captions = ["The B Building inside the GUC campus","The GUC Library","The C Building inside the GUC campus"];
let currentFontSize = 1;
let changeImage = () => {
    let classList = imageDiv.classList;
    switch(i){
        case 0 :
            classList.remove("second-image");
            classList.add("zeroth-image");
            document.getElementsByClassName("image-caption")[0].innerHTML = captions[0]
            break;
            
        case 1 :
            classList.remove("zeroth-image");
            classList.add("first-image");
            document.getElementsByClassName("image-caption")[0].innerHTML = captions[1]
            break;
            
        case 2 :
            classList.remove("first-image");
            classList.add("second-image");
            document.getElementsByClassName("image-caption")[0].innerHTML = captions[2]
    }
    i = (i+1)%3;
    setTimeout(changeImage,2000);
}
changeImage();


document.getElementById("search-button").addEventListener("click",()=>{ 
   let textFieldValue = document.getElementById("search-field").value 
    if(textFieldValue != ""){
        let splittedText = textFieldValue.split(" ");
        let searchQuery = splittedText[0];
        for (let j = 1; j < splittedText.length; j++) {
            searchQuery+= "+"+splittedText[i];            
        }
        window.open("http://www.google.com/search?q="+searchQuery);
    }
    else{
        alert("search bar cannot be blank, please search for something");
    }
}
);
document.addEventListener("scroll",()=>{
    let navbar = document.querySelector("nav");
    navbar.classList.toggle("stick",window.scrollY>135);
});
document.getElementById("enlarge").addEventListener("click",()=>{
    currentFontSize+=0.1;
    document.getElementsByTagName("body")[0].style.fontSize = currentFontSize + "em";
})
document.getElementById("shrink").addEventListener("click",()=>{
    currentFontSize-=0.1;
    document.getElementsByTagName("body")[0].style.fontSize = currentFontSize + "em";
})



