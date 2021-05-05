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

let cpu = document.querySelector('#cpu');
let gpu = document.querySelector('#gpu');
let capacity = document.querySelector('#cap');
let os = document.querySelector('#os');
let ram = document.querySelector('#ram');
let imgref = document.querySelector('#myImg');
let imgref2 = document.querySelector('#myImg2');
let video = document.querySelector('#video');

let cpu_m = document.querySelector('#cpu_m');
let gpu_m = document.querySelector('#gpu_m');
let ram_m = document.querySelector('#ram_m');
let os_m = document.querySelector('#os_m');
let cap_m = document.querySelector('#cap_m');
let cap = document.querySelector('#cap');


var ph = document.createElement("img");
var ph2 = document.createElement("img");
var ph3 = document.createElement("img");


ph.setAttribute("alt", "Nice Photo");

ph3.setAttribute("width", "600");
ph2.setAttribute("width", "600");

image.appendChild(ph);
imgref.appendChild(ph2)
imgref2.appendChild(ph3)


function renderGame(doc) {
    headtext1.textContent = doc.story[idgame].game_name;
    genre.textContent = "Genre : " + doc.story[idgame].genre;
    platform.textContent = "Platform : " + doc.story[idgame].Platform;
    headtext2.textContent = "รายละเอียดของเกม";
    desc.textContent = doc.story[idgame].desc;
    developer.textContent = "Developer : " + doc.story[idgame].Developer;
    publisher.textContent = "Publisher :  " + doc.story[idgame].Publisher;
    ph.setAttribute("src",  String(doc.story[idgame].URL_img));
    store.setAttribute("href",  String(doc.story[idgame].UrlStore));
    
    cpu.textContent = "CPU : " + doc.story[idgame].System_requirement.recommended_requirement.CPU;
    gpu.textContent = "GPU : " + doc.story[idgame].System_requirement.recommended_requirement.GPU;
    os.textContent = "OS : " + doc.story[idgame].System_requirement.recommended_requirement.OS;
    cap.textContent = "Capacity : " + doc.story[idgame].System_requirement.recommended_requirement.Capacity

    ram.textContent = "RAM : " + doc.story[idgame].System_requirement.recommended_requirement.RAM;
    cpu_m.textContent = "CPU : " + doc.story[idgame].System_requirement.minimum_requirement.CPU
    gpu_m.textContent = "GPU : " + doc.story[idgame].System_requirement.minimum_requirement.GPU
    cap_m.textContent = "Capacity : " + doc.story[idgame].System_requirement.minimum_requirement.Capacity
    os_m.textContent = "OS : " + doc.story[idgame].System_requirement.minimum_requirement.OS
    ram_m.textContent = "RAM : " + doc.story[idgame].System_requirement.minimum_requirement.RAM
    
    ph.setAttribute("src",  String(doc.story[idgame].URL_img));
    store.setAttribute("href",  String(doc.story[idgame].UrlStore));

    ph2.setAttribute("src",  String(doc.story[idgame].URLRef_Image));
    ph3.setAttribute("src",  String(doc.story[idgame].URLRef_Image2));
    video.setAttribute("href",  String(doc.story[idgame].URL_video));

    
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