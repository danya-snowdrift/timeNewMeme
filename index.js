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

let timeRange = 3000;
let timerId = null;

$(document).ready(()=>{
    $("#range").change(function(){
        
        timeRange = $("#range").val() * 1000;
        $("#text").html(`Рандомный мем раз в ${timeRange / 1000} сек`);
        clearInterval(timerId);
        timerId = setInterval(setMemeSrc, timeRange);
    });
    $("#text").text(`Рандомный мем раз в ${timeRange / 1000} сек`);
    setMemeSrc();
    timerId = setInterval(setMemeSrc, timeRange);
});

