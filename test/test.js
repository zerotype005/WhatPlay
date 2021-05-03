var dbRef = firebase.database().ref('gamelists');
dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderGame(data);
});

let gameList = document.querySelector('.gameList');

function renderGame(doc) {
    for (let i = 0; i < doc.action.length; i++) {
        let li = document.createElement('li');
        let name = document.createElement('span');

        name.textContent = doc.action[i].game_name;


        li.appendChild(name);

        gameList.appendChild(li);
    }
}

/* function renderUser(doc) {

    for (let i = 0; i < 2; i++) {
        let li = document.createElement('li');
        let name = document.createElement('span');
        let gamepublisher = document.createElement('span');

        li.setAttribute('data-id', doc.id);
        name.textContent = doc.data().action[i].game_name;


        li.appendChild(name);

        gameList.appendChild(li);
    }


} */

/* db.ref('gamelists').get().then(game => {     //เป็นชื่อคอลเล็คชั่นที่สร้างไว้ที่ cloud firestore
    //console.log(user);
    game.docs.forEach(doc => {
        console.log(doc.data());
        renderUser(doc);
    })
});  */