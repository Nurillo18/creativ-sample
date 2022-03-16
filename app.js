var btn = document.querySelector(".button");
var record = new webkitSpeechRecognition();
var audio = new Audio();
var elBody = document.querySelector(".body");
var elItem1 = document.querySelector(".bir");
var elItem2 = document.querySelector(".ikki");
var elItem3 = document.querySelector(".uch");
var elItem4 = document.querySelector(".tor");
var elItem5 = document.querySelector(".besh");
var elItem6 = document.querySelector(".olti");
var elItem7 = document.querySelector(".yetti");
var elItem8 = document.querySelector(".sakkiz");
var elItem9 = document.querySelector(".toqqiz");


record.lang = "uz-UZ";
record.onresult = function(evt){
    var result = evt.results[0][0].transcript;
    console.log(result);
    if(result == "assalom"){
        audio.src = "./mp3/assalom.ogg";
        audio.play();
        elBody.classList.add("assalom");
        elBody.classList.remove("otash");
        elBody.classList.remove("kel");
        elBody.classList.remove("pasport");
        elBody.classList.remove("pul");
        elBody.classList.remove("liklik");
        elBody.classList.remove("biznes");
        elBody.classList.remove("tugadi");
        elItem1.classList.add("delete");
    }
    if(result == "yaxshimisiz"){
        audio.src = "./mp3/chachamay.ogg";
        audio.play();
        elBody.classList.add("otash");
        elBody.classList.remove("assalom");
        elBody.classList.remove("kel");
        elBody.classList.remove("pasport");
        elBody.classList.remove("pul");
        elBody.classList.remove("liklik");
        elBody.classList.remove("biznes");
        elBody.classList.remove("tugadi");
        elItem2.classList.add("delete");
    }
    if(result == "keldik"){
        audio.src = "./mp3/mankeldim.ogg";
        audio.play();
        elBody.classList.remove("assalom");
        elBody.classList.remove("otash");
        elBody.classList.add("kel");
        elBody.classList.remove("pasport");
        elBody.classList.remove("pul");
        elBody.classList.remove("liklik");
        elBody.classList.remove("biznes");
        elBody.classList.remove("tugadi");
        elItem3.classList.add("delete");
    }
    if(result == "passport"){
        audio.src = "./mp3/pasport.ogg";
        audio.play();
        elBody.classList.add("pasport");
        elBody.classList.remove("assalom");
        elBody.classList.remove("otash");
        elBody.classList.remove("kel");
        elBody.classList.remove("pul");
        elBody.classList.remove("liklik");
        elBody.classList.remove("biznes");
        elBody.classList.remove("tugadi");
        elItem4.classList.add("delete");
    }
    if(result == "soqqa"){
        audio.src = "./mp3/pul.ogg";
        audio.play();
        elBody.classList.add("pul");
        elBody.classList.remove("pasport");
        elBody.classList.remove("assalom");
        elBody.classList.remove("otash");
        elBody.classList.remove("kel");
        elBody.classList.remove("liklik");
        elBody.classList.remove("biznes");
        elBody.classList.remove("tugadi");
        elItem5.classList.add("delete");
    }
    if(result == "boylik"){
        audio.src = "./mp3/boy-bolay.ogg";
        audio.play();
        elBody.classList.add("boylik");
        elBody.classList.remove("pul");
        elBody.classList.remove("pasport");
        elBody.classList.remove("assalom");
        elBody.classList.remove("otash");
        elBody.classList.remove("kel");
        elBody.classList.remove("liklik");
        elBody.classList.remove("biznes");
        elBody.classList.remove("tugadi");
        elItem6.classList.add("delete");
    }
    if(result == "jinni"){
        audio.src = "./mp3/liklik.ogg";
        audio.play();
        elBody.classList.add("liklik");
        elBody.classList.remove("boylik");
        elBody.classList.remove("pul");
        elBody.classList.remove("pasport");
        elBody.classList.remove("assalom");
        elBody.classList.remove("otash");
        elBody.classList.remove("kel");
        elBody.classList.remove("biznes");
        elBody.classList.remove("tugadi");
        elItem7.classList.add("delete");
    }
    if(result == "biznes"){
        audio.src = "./mp3/biznes.ogg";
        audio.play();
        elBody.classList.add("biznes");
        elBody.classList.remove("liklik");
        elBody.classList.remove("boylik");
        elBody.classList.remove("pul");
        elBody.classList.remove("pasport");
        elBody.classList.remove("assalom");
        elBody.classList.remove("otash");
        elBody.classList.remove("kel");
        elBody.classList.remove("tugadi");
        elItem8.classList.add("delete");
    }
    if(result == "tugadi"){
        audio.src = "./mp3/dicratetby.ogg";
        audio.play();
        elBody.classList.add("tugadi");
        elBody.classList.remove("biznes");
        elBody.classList.remove("liklik");
        elBody.classList.remove("boylik");
        elBody.classList.remove("pul");
        elBody.classList.remove("pasport");
        elBody.classList.remove("assalom");
        elBody.classList.remove("otash");
        elBody.classList.remove("kel");
        elItem9.classList.add("delete");

    }
}


btn.addEventListener("click", function(){
    audio.src = "./mp3/click.wav";
    audio.play();
    record.start();
})
