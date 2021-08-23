let imageDiv = document.getElementById("changing-image");
let i = 0;
let captions = ["The B Building inside the GUC campus", "The GUC Library", "The C Building inside the GUC campus"];
let currentFontSize = 1;
let changeImage = () => {
    imageDiv.style.backgroundImage = `url("images/` + i + `.jpg")`;
    document.getElementsByClassName("image-caption")[0].innerHTML = captions[i];
    i = (i + 1) % 3;
    setTimeout(changeImage, 2000);
}
changeImage();


document.getElementById("search-button").addEventListener("click", () => {
    let textFieldValue = document.getElementById("search-field").value
    if (textFieldValue != "") {
        let splittedText = textFieldValue.split(" ");
        let searchQuery = splittedText[0];
        for (let j = 1; j < splittedText.length; j++) {
            searchQuery += "+" + splittedText[i];
        }
        window.open("http://www.google.com/search?q=" + searchQuery);
    }
    else {
        alert("search bar cannot be blank, please search for something");
    }
}
);

document.getElementById("enlarge").addEventListener("click", () => {
    currentFontSize += 0.1;
    document.getElementsByTagName("body")[0].style.fontSize = currentFontSize + "em";
})
document.getElementById("shrink").addEventListener("click", () => {
    currentFontSize -= 0.1;
    document.getElementsByTagName("body")[0].style.fontSize = currentFontSize + "em";
})



