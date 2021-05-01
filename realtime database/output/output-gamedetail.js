var dbRef = firebase.database().ref('gamelists');
dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderGame(data);
});

let headtext1 = document.querySelector('#headtext1');
let genre = document.querySelector('#genre');
let platform = document.querySelector('#platform');

let headtext2 = document.querySelector('#headtext2');
let desc = document.querySelector('#desc');
let developer = document.querySelector('#developer');
let publisher = document.querySelector('#publisher');
let storelink = document.querySelector('#storelink');


function renderGame(doc) {
    headtext1.textContent = doc.action[0].game_name;
    genre.textContent = "genre : " + doc.action[0].genre;
    platform.textContent = "platform : " + doc.action[0].Platform;
    headtext2.textContent = "รายละเอียดของเกม";
    desc.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint officia est praesentium amet\
    vero, recusandae rem commodi nisi nostrum et? Doloremque necessitatibus quo quod quisquam assumenda\
    autem, beatae natus!";
    developer.textContent = "developer : " + doc.action[0].Developer;
    publisher.textContent = "publisher : " + doc.action[0].Publisher;
    
    /* for (let i = 0; i < doc.action.length; i++) {
        let li = document.createElement('li');
        let name = document.createElement('span');

        name.textContent = doc.action[i].game_name;


        li.appendChild(name);

        gameList.appendChild(li);
    } */
}