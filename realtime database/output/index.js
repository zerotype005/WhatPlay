firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
let gamelists = document.querySelector('#data_game')
let gamelists2 = document.querySelector('#list_game')
let imglist = document.querySelector('#img_game')
var ImgName, ImgUrl;
var files = [];
var reader = new FileReader();
//--------------retrieval img-----------------



//------------------------------------------
function renderUser(doc){
    let li = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');


    let name = document.createElement('span');
    let platform = document.createElement('span');
    let dev = document.createElement('span');
    let desc = document.createElement('span');
    let pub = document.createElement('span');
    let img = document.createElement('span');

    img = doc.data().action[0].game_imgref1[0];
    firebase.database().ref('Pic' + img).on('value', function(snapshot) {
    document.getElementById('myimg').src = snapshot.val().Link
    });


    li.setAttribute('data-id', doc.id)
    name.textContent = doc.data().action[0].game_name;
    platform.textContent = doc.data().action[0].game_platform;
    dev.textContent = doc.data().action[0].game_developer
    desc.textContent = doc.data().action[0].game_desc
    pub.textContent = doc.data().action[0].game_publisher
    img.textContent = doc.data().action[0].game_imgref1[0]

    li.appendChild(name);
    li2.appendChild(platform);
    li2.appendChild(dev);
    li3.appendChild(desc);
    li2.appendChild(pub);


    
    gamelists.appendChild(li);
    gamelists.appendChild(li2);
    gamelists2.appendChild(li3);


}
db.collection('gamelists').get().then(game => {
    game.docs.forEach(doc => {
        console.log(doc.data());
        renderUser(doc)
    });
})

