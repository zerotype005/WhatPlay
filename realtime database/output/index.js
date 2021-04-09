let gamelists = document.querySelector('#list_game')
function renderUser(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let platform = document.createElement('span');

    li.setAttribute('data-id',doc.id)
    name.textContent = doc.data().action;
    platform.textContent = doc.data().story;

    li.appendChild(name);
    li.appendChild(platform);
    
    gamelists.appendChild(li);
}
db.collection('gamelists').get().then(game => {
    game.docs.forEach(doc => {
        console.log(doc.data());
        renderUser(doc)
    });
})