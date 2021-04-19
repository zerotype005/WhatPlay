function addList() {
    //connect to database
    var firebaseRef = firebase.database().ref("gamelists");
    firebaseRef.child("action").push({
        game_id: "game1",
    });
    firebaseRef.child("adventure");
    firebaseRef.child("story");

}
window.onload=function(){
    var firebaseRef=firebase.database().ref("userlist");
    firebaseRef.once("value").then(function(dataSnapshot){
        console.log(dataSnapshot.val());
    });
}