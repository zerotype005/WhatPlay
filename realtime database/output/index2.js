const dbRef = firebase.database().ref("gamelists");
//ชื่อเกม
var nameT = document.title;
//เเยกประเภทเกม
var genre = ""
//เเยกไอดีเกม
var id_game = ""
//data
let nameG = document.getElementById("name");
let platform = document.getElementById("plat");
let dev = document.getElementById("dev");
let desc = document.getElementById("des");

dbRef.child("action").child("action001").get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    console.log(snapshot.val().game_name);
    set(snapshot.val().game_name)
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
function set(data){
  nameG = data
}
