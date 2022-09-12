function getMemes(){
    let memesName;
    //сюда аякс запихать
    return memesName;
}

function setMemeSrc(){
    let memesName = getMemes();
    console.log("MemeFileName = " + memesName)
    $("#memes").attr("href", memesName);
}

$(document).onload(()=>{
    setMemeSrc();
    setInterval(setMemeSrc, 5000);
});