const dbRef = firebase.database().ref("gamelists");
//เเยกประเภทเกม
var genre = ""
//เเยกไอดีเกม
var id_game = ""


dbRef.child(genre).child(id_game).get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
