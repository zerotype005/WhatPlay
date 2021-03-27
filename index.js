let gameList = document.querySelector('#gameList');

function renderUser(doc) {

    for (let i = 0; i < 2; i++) {
        let li = document.createElement('li');
        let name = document.createElement('span');
        let gamepublisher = document.createElement('span');

        li.setAttribute('data-id', doc.id);
        name.textContent = doc.data().action[i].name;
        gamepublisher.textContent = doc.data().action[i].publisher;


        li.appendChild(name);
        li.appendChild(gamepublisher);

        gameList.appendChild(li);
    }


}

db.collection('gamelists').get().then(game => {     //เป็นชื่อคอลเล็คชั่นที่สร้างไว้ที่ cloud firestore
    //console.log(user);
    game.docs.forEach(doc => {
        console.log(doc.data());
        renderUser(doc);
    })
}); 