var dbRef = firebase.database().ref('gamelists');
dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderGame(data);
});

let idgame = localStorage.getItem("id2");

let headtext1 = document.querySelector('#headtext1');
let genre = document.querySelector('#genre');
let platform = document.querySelector('#platform');

let headtext2 = document.querySelector('#headtext2');
let desc = document.querySelector('#desc');
let developer = document.querySelector('#developer');
let publisher = document.querySelector('#publisher');
let storelink = document.querySelector('#storelink');
let image = document.querySelector('#image');
let imgref = document.querySelector('#myImg');
let imgref2 = document.querySelector('#myImg2');
let vd = document.querySelector('#video');


let cpu = document.querySelector('#CPU');
let gpu = document.querySelector('#GPU');
let capacity = document.querySelector('#Capacity');
let os = document.querySelector('#OS');
let ram = document.querySelector('#RAM');


var ph = document.createElement("img");
var ph2 = document.createElement("img");
var ph3 = document.createElement("img");
var v1 = document.createElement("iframe");

ph3.setAttribute("width", "600");
ph2.setAttribute("width", "600");
ph.setAttribute("alt", "Nice Photo");

image.appendChild(ph);
imgref.appendChild(ph2)
imgref2.appendChild(ph3)
vd.appendChild(v1)


function renderGame(doc) {
    headtext1.textContent = doc.adventure[idgame].game_name;
    genre.textContent = "genre : " + doc.adventure[idgame].genre;
    platform.textContent = "platform : " + doc.adventure[idgame].Platform;
    headtext2.textContent = "รายละเอียดของเกม";
    desc.textContent = doc.adventure[idgame].desc;
    developer.textContent = "developer : " + doc.adventure[idgame].Developer;
    publisher.textContent = "publisher :  " + doc.adventure[idgame].Publisher;
    ph.setAttribute("src",  String(doc.adventure[idgame].URL_img));
    ph3.setAttribute("src",  String(doc.adventure[idgame].URL_video));

    ph2.setAttribute("src",  String(doc.adventure[idgame].URLRef_Image));
    ph3.setAttribute("src",  String(doc.adventure[idgame].URLRef_Image2));
    
    /* for (let i = 0; i < doc.action.length; i++) {
        let li = document.createElement('li');
        let name = document.createElement('span');

        name.textContent = doc.action[i].game_name;


        li.appendChild(name);

        gameList.appendChild(li);
    } */
}