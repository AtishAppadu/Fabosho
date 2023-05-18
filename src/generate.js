
// Male Clothing Generator
function malegenerator() {

        // Male Clothing Cap
    var x=Math.floor((Math.random()*2)+1);  // Random Number Generator  that generates a number between 1 and 2
    console.log(x);
    document.getElementById("MaleClothingImageCap").innerHTML=`
        <img src="images/Cfiles/Men/ExampleCapClothing${x}.jpg" alt="image" width="300px" height="300px">`;

        // Male Clothing Top
    var x=Math.floor((Math.random()*2)+1);
    console.log(x);
    document.getElementById("MaleClothingImageTop").innerHTML=`
        <img src="images/Cfiles/Men/ExampleTopClothing${x}.jpg" alt="image" width="300px" height="300px">`;

        // Male Clothing Bottom
    var x=Math.floor((Math.random()*2)+1);
    console.log(x);
    document.getElementById("MaleClothingImageBottom").innerHTML=`
        <img src="images/Cfiles/Men/ExampleBottomClothing${x}.jpg" alt="image" width="300px" height="300px">`;
        
        // Male Clothing Shoes
    var x=Math.floor((Math.random()*2)+1);
    console.log(x);
    document.getElementById("MaleClothingImageShoes").innerHTML=`
        <img src="images/Cfiles/Men/ExampleShoesClothing${x}.jpg" alt="image" width="300px" height="300px">`;
    }

function femalegenerator() {

        // Female Clothing Cap
    var x=Math.floor((Math.random()*3)+1);    // Random Number Generator  that generates a number between 1 and 3
    console.log(x);
    document.getElementById("FemaleClothingImageCap").innerHTML=`
        <img src="images/Cfiles/Women/ExampleCapClothing${x}.jpg" alt="image" width="300px" height="300px">`;
        
        // Female Clothing Top
    var x=Math.floor((Math.random()*2)+1);
    console.log(x);
    document.getElementById("FemaleClothingImageTop").innerHTML=`
        <img src="images/Cfiles/Women/ExampleTopClothing${x}.jpg" alt="image" width="300px" height="300px">`;
        
        // Female Clothing Bottom
    var x=Math.floor((Math.random()*2)+1);
    console.log(x);
    document.getElementById("FemaleClothingImageBottom").innerHTML=`
        <img src="images/Cfiles/Women/ExampleBottomClothing${x}.jpg" alt="image" width="300px" height="300px">`;
        
        // Female Clothing Shoes
    var x=Math.floor((Math.random()*2)+1);
    console.log(x);
    document.getElementById("FemaleClothingImageShoes").innerHTML=`
        <img src="images/Cfiles/Women/ExampleShoesClothing${x}.jpg" alt="image" width="300px" height="300px">`;
    }