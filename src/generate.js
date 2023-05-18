function generator() {
    var x=Math.floor((Math.random()*3)+1);
    console.log(x);
    document.getElementById("divImage").innerHTML=`
        <img src="img/clothing${x}.jpg" alt="image" width="300px" height="300px">`;
}