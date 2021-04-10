firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
let gameNP = document.querySelector('#game_NP')

db.collection("gamelists").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        
        console.log(doc.data().story[0].gamename);
        console.log(doc.data().action);

    });
});
function renderUser(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let platform = document.createElement('span');

    li.setAttribute('data-id', doc.id)
    name.textContent = doc.data().action[0].game_name;
    platform.textContent = doc.data().action[0].game_platform;

    li.appendChild(name);
    li.appendChild(platform);
    
    gameNP.appendChild(li);
}
db.collection('gamelists').get().then(game => {
    game.docs.forEach(doc => {
        console.log(doc.data());
        renderUser(doc)
    });
})

