var dbRef = firebase.database().ref('gamelists');
dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderGame(data);
});

let gameList = document.querySelector('#gameList');

function renderGame(doc) {
    for (let i = 0; i < doc.action.length; i++) {
        let divcontent = document.createElement('div');
        divcontent.classList.add('content');
        let btnlink = document.createElement('button');
        btnlink.classList.add('btnlink');
        btnlink.textContent = "button";
        btnlink.addEventListener("click", function(){
            window.open("output-gamedetail.html");
        });

        divcontent.textContent = doc.action[i].game_name;

        divcontent.appendChild(btnlink)

        gameList.appendChild(divcontent);

    }
}