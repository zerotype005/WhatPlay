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
let vd = document.querySelector('#video');

var x = document.createElement("VIDEO");

var ph = document.createElement("img");
ph.setAttribute("alt", "Nice Photo");

image.appendChild(ph);


x.setAttribute("width", "320");
  x.setAttribute("height", "240");
  x.setAttribute("controls", "controls");
  vd.appendChild(x);


function renderGame(doc) {
    headtext1.textContent = doc.action[idgame].game_name;
    genre.textContent = "genre : " + doc.action[idgame].genre;
    platform.textContent = "platform : " + doc.action[idgame].Platform;
    headtext2.textContent = "รายละเอียดของเกม";
    desc.textContent = doc.action[idgame].desc;
    developer.textContent = "developer : " + doc.action[idgame].Developer;
    publisher.textContent = "publisher :  " + doc.action[idgame].Publisher;
    ph.setAttribute("src",  String(doc.action[idgame].URL_img));
    x.setAttribute("src",  String(doc.action[idgame].URL_video));

    cpu.textContent = "CPU : " + doc.action[idgame].System_requirement.recommended_requirement.CPU;
    gpu.textContent = "GPU : " + doc.action[idgame].System_requirement.recommended_requirement.GPU;
    os.textContent = "OS : " + doc.action[idgame].System_requirement.recommended_requirement.OS;
    ram.textContent = "RAM : " + doc.action[idgame].System_requirement.recommended_requirement.RAM;

    
    /* for (let i = 0; i < doc.action.length; i++) {
        let li = document.createElement('li');
        let name = document.createElement('span');

        name.textContent = doc.action[i].game_name;


        li.appendChild(name);

        gameList.appendChild(li);
    } */
}
