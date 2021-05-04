var dbRef = firebase.database().ref('gamelists');
dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderGame(data);
});

let idgame = localStorage.getItem("id");

let headtext1 = document.querySelector('#headtext1');
let genre = document.querySelector('#genre');
let platform = document.querySelector('#platform');

let headtext2 = document.querySelector('#headtext2');
let desc = document.querySelector('#desc');
let developer = document.querySelector('#developer');
let publisher = document.querySelector('#publisher');
let storelink = document.querySelector('#storelink');
let image = document.querySelector('#image');

let cpu = document.querySelector('#CPU');
let gpu = document.querySelector('#GPU');
let capacity = document.querySelector('#Capacity');
let os = document.querySelector('#OS');
let ram = document.querySelector('#RAM');
let imgref = document.querySelector('#myImg');
let imgref2 = document.querySelector('#myImg2');



var ph = document.createElement("img");
var ph2 = document.createElement("img");
var ph3 = document.createElement("img");


ph3.setAttribute("width", "600");
ph2.setAttribute("width", "600");
ph.setAttribute("alt", "Nice Photo");

image.appendChild(ph);
imgref.appendChild(ph2)
imgref2.appendChild(ph3)




function renderGame(doc) {
    headtext1.textContent = doc.action[idgame].game_name;
    genre.textContent = "genre : " + doc.action[idgame].genre;
    platform.textContent = "platform : " + doc.action[idgame].Platform;
    headtext2.textContent = "รายละเอียดของเกม";
    desc.textContent = doc.action[idgame].desc;
    developer.textContent = "developer : " + doc.action[idgame].Developer;
    publisher.textContent = "publisher :  " + doc.action[idgame].Publisher;
    ph.setAttribute("src",  String(doc.action[idgame].URL_img));
    ph2.setAttribute("src",  String(doc.action[idgame].URLRef_Image));
    ph3.setAttribute("src",  String(doc.action[idgame].URLRef_Image2));

    
    
    /* for (let i = 0; i < doc.action.length; i++) {
        let li = document.createElement('li');
        let name = document.createElement('span');

        name.textContent = doc.action[i].game_name;


        li.appendChild(name);

        gameList.appendChild(li);
    } */
}

window.addEventListener("load", function () {
    var loading = document.getElementById("loading");
    loading.style.opacity = 0;
    setTimeout(destroyLoading, 1000);
    function destroyLoading(params) {
        document.body.removeChild(loading);
    }
});