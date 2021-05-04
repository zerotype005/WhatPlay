var dbRef = firebase.database().ref('gamelists');
dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderGame(data);
});

let idgame = localStorage.getItem("id3");

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


var ph = document.createElement("img");
ph.setAttribute("alt", "Nice Photo");

image.appendChild(ph);


function renderGame(doc) {
    headtext1.textContent = doc.story[idgame].game_name;
    genre.textContent = "genre : " + doc.story[idgame].genre;
    platform.textContent = "platform : " + doc.story[idgame].Platform;
    headtext2.textContent = "รายละเอียดของเกม";
    desc.textContent = doc.story[idgame].desc;
    developer.textContent = "developer : " + doc.story[idgame].Developer;
    publisher.textContent = "publisher :  " + doc.story[idgame].Publisher;
    ph.setAttribute("src",  String(doc.story[idgame].URL_img));
    cpu.textContent = "CPU : " + doc.story[idgame].System_requirement.recommended_requirement.CPU;
    gpu.textContent = "GPU : " + doc.story[idgame].System_requirement.recommended_requirement.GPU;
    os.textContent = "OS : " + doc.story[idgame].System_requirement.recommended_requirement.OS;
    ram.textContent = "RAM : " + doc.story[idgame].System_requirement.recommended_requirement.RAM;

    
    /* for (let i = 0; i < doc.action.length; i++) {
        let li = document.createElement('li');
        let name = document.createElement('span');

        name.textContent = doc.action[i].game_name;


        li.appendChild(name);

        gameList.appendChild(li);
    } */
}