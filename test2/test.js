function addList() {
    //connect to database
    const firebaseRef = firebase.database().ref("Admin");
    firebaseRef.child("user/user1").set("Root");
    firebaseRef.child("user2/user1").set("Root2");
}
window.onload=function(){
    var firebaseRef=firebase.database().ref("userlist");
    firebaseRef.once("value").then(function(dataSnapshot){
        console.log(dataSnapshot.val());
    });
}