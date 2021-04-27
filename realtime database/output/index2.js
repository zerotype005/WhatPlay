const dbRef = firebase.database().ref("gamelists");

var div = document.createElement("div");
div.classList.add("wrapper");
document.body.appendChild(div);

var ul = document.createElement('ul');
var Arra = ['one',  'two', 'three'];

Arra.forEach(function(item) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
});

div.appendChild(ul);


var div2 = document.createElement('div');
var Arr = ['Wammu',  'Kar'];
Arr.forEach(function(item) {
    var P = document.createElement('p');
    P.appendChild(document.createTextNode(item));
    div2.appendChild(P);
});
div.insertBefore(div2, ul);
div2.removeChild(div2.childNodes[0]); 

function generatename(name, platform) {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p')
  h2.appendChild(document.createTextNode(name));
  p.appendChild(document.createTextNode(platform));
  div.classList.add('playerCard')

  div.appendChild(h2);
  div.appendChild(p);
  return(div);
}

function generatename(name, desc) {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p')
  h2.appendChild(document.createTextNode(name));
  p.appendChild(document.createTextNode("Description : " + desc));
  div.classList.add('playerCard')

  div.appendChild(h2);
  div.appendChild(p);
  return(div);
}
function generateinfo(genre, platform,dev,pub) {
  const div = document.createElement('div');
  const p = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const p4 = document.createElement('p')

  p.appendChild(document.createTextNode("Genre : " + genre));
  p2.appendChild(document.createTextNode("Platform : " + platform));
  p3.appendChild(document.createTextNode("Deverlop : " + dev));
  p4.appendChild(document.createTextNode("Publisher : " + pub));

  div.classList.add('playerCard')

  div.appendChild(p);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(p4);

  return(div);
}

var div3 = document.createElement('div')





dbRef.child("adventure").get().then((snapshot) => {
  if (snapshot.exists()) {
    
    console.log(snapshot.child("adventure001").child("game_name").val());
div3.classList.add('cards') 
div3.appendChild(generatename(snapshot.child("adventure001").child("game_name").val(), snapshot.child("adventure001").child("desc").val()));
div3.appendChild(generateinfo(snapshot.child("adventure001").child("genre").val(), snapshot.child("adventure001").child("Platform").val(), snapshot.child("adventure001").child("Developer").val(), snapshot.child("adventure001").child("Publisher").val()));
div3.appendChild(generatePlayerCard("bink", 17, 130));
div3.appendChild(generatePlayerCard("gold", 18, 166));
    
  } else {
    console.log("No data available");
  }
})

document.body.insertBefore(div3,div);




