const dbRef = firebase.database().ref("gamelists");
var div3 = document.createElement('div')
var ph = document.createElement("img");
var img = ""



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

function generate_minimum(CPU, Cap, GPU, OS, RAM) {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const p4 = document.createElement('p')
  const p5 = document.createElement('p')

  h2.appendChild(document.createTextNode("System_reauirement"));
  p.appendChild(document.createTextNode("CPU : " + CPU));
  p2.appendChild(document.createTextNode("Capacity : " + Cap));
  p3.appendChild(document.createTextNode("GPU : " + GPU));
  p4.appendChild(document.createTextNode("OS : " + OS));
  p5.appendChild(document.createTextNode("RAM : " + RAM));


  div.classList.add('playerCard')

  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(p4);
  div.appendChild(p5);

  return(div);
}


dbRef.child("adventure").get().then((snapshot) => {
  if (snapshot.exists()) {
    
    console.log(snapshot.child("adventure001").child("game_name").val());
div3.classList.add('cards') 
div3.appendChild(generatename(snapshot.child("adventure001").child("game_name").val(), snapshot.child("adventure001").child("desc").val()));
div3.appendChild(generateinfo(snapshot.child("adventure001").child("genre").val(), snapshot.child("adventure001").child("Platform").val(), snapshot.child("adventure001").child("Developer").val(), snapshot.child("adventure001").child("Publisher").val()));
div3.appendChild(generate_minimum(snapshot.child("adventure001").child("System_requirement").child("CPU").val(), snapshot.child("adventure001").child("System_requirement").child("Capacity").val(), snapshot.child("adventure001").child("System_requirement").child("GPU").val(), snapshot.child("adventure001").child("System_requirement").child("OS").val(), snapshot.child("adventure001").child("System_requirement").child("RAM").val()));

 img = snapshot.child("adventure001").child("URL_img").val()
 console.log(snapshot.child("adventure001").child("URL_img").val())
    
  } else {
    console.log("No data available");
  }
})
ph.setAttribute("src", img);
ph.setAttribute("alt", "Nice Photo");
ph.classList.add("Cool");
div.appendChild(ph)
document.body.insertBefore(div3,div);



