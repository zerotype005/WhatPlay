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
let store = document.querySelector('#store');
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
    genre.textContent = "Genre : " + doc.story[idgame].genre;
    platform.textContent = "Platform : " + doc.story[idgame].Platform;
    headtext2.textContent = "รายละเอียดของเกม";
    desc.textContent = doc.story[idgame].desc;
    developer.textContent = "Developer : " + doc.story[idgame].Developer;
    publisher.textContent = "Publisher :  " + doc.story[idgame].Publisher;
    ph.setAttribute("src",  String(doc.story[idgame].URL_img));
    store.setAttribute("href",  String(doc.action[idgame].UrlStore));
    ph2.setAttribute("src",  String(doc.adventure[idgame].URLRef_Image));
    ph3.setAttribute("src",  String(doc.adventure[idgame].URLRef_Image2));
    video.setAttribute("href",  String(doc.adventure[idgame].URL_video));
    cpu.textContent = "CPU : " + doc.story[idgame].System_requirement.recommended_requirement.CPU;
    gpu.textContent = "GPU : " + doc.story[idgame].System_requirement.recommended_requirement.GPU;
    os.textContent = "OS : " + doc.story[idgame].System_requirement.recommended_requirement.OS;
    ram.textContent = "RAM : " + doc.story[idgame].System_requirement.recommended_requirement.RAM;
    cpu_m.textContent = "CPU : " + doc.adventure[idgame].System_requirement.minimum_requirement.CPU
    gpu_m.textContent = "GPU : " + doc.adventure[idgame].System_requirement.minimum_requirement.GPU
    cap_m.textContent = "Capacity : " + doc.adventure[idgame].System_requirement.minimum_requirement.Capacity
    os_m.textContent = "OS : " + doc.adventure[idgame].System_requirement.minimum_requirement.OS
    ram_m.textContent = "RAM : " + doc.adventure[idgame].System_requirement.minimum_requirement.RAM
    

    
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