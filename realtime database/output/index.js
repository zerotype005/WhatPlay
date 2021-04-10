firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
let gamelists = document.querySelector('#list_game')



function renderUser(doc){
    let li = document.createElement('li');
    let li2 = document.createElement('li');

    let name = document.createElement('span');
    let platform = document.createElement('span');
    let dev = document.createElement('span');
    let desc = document.createElement('span');
    let pub = document.createElement('span');

    li.setAttribute('data-id', doc.id)
    name.textContent = doc.data().action[0].game_name;
    platform.textContent = doc.data().action[0].game_platform;
    dev.textContent = doc.data().action[0].game_developer
    desc.textContent = doc.data().action[0].game_desc
    pub.textContent = doc.data().action[0].game_publisher
    li.appendChild(name);
    li.appendChild(platform);
    li.appendChild(dev);
    li2.appendChild(desc);
    li.appendChild(pub);
    
    gamelists.appendChild(li);
    gamelists.appendChild(li2);

}
db.collection('gamelists').get().then(game => {
    game.docs.forEach(doc => {
        console.log(doc.data());
        renderUser(doc)
    });
})

