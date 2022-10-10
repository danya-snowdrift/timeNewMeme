'use strict';

function setMemeSrc(){
    $.ajax({
        type: "GET",
        url: "getMeme.php",
        success: (r)=>{
            $("#memes").attr("src", `memes/${r}`);
        }
    });
    
}

$(document).ready(()=>{
    setMemeSrc();
    setInterval(setMemeSrc, 5000);
});