
let count = 6;
setInterval(function() {
    count --;

    if(count >= 0 ){
        document.getElementById("counter").innerHTML = count;
    } if(count == 0){
        document.getElementById("counter").innerHTML = "Complete"
       }
}, 1000);