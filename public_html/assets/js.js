var mySlider = 0;
slider();

function slider(){

    var image = document.getElementsByClassName("image");
    
    for(var i = 0; i < image.length; i++){
        image[i].style.display = "none";
    }

    mySlider++;
    
    if(mySlider > image.length){mySlider = 1}

    image[mySlider-1].style.display = "block";

    setTimeout(slider, 5000);

}