function getMemes(){
    let memesName = "";
    $.ajax({
        type: "GET",
        url: "getMeme.php",
        dataType: "json",
        success: (r)=>{
            console.log(r);
            memesName = r;
        }
    });
    return memesName;
}

function setMemeSrc(){
    let memesName = getMemes();
    console.log(`MemeFileName = ${memesName}`);
    $("#memes").css("background-image", memesName);
}

$(document).ready(()=>{
    setMemeSrc();
    setInterval(setMemeSrc, 5000);
});