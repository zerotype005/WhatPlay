let addList = function () {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var nickName = document.getElementById('nname').value;
    var Age = document.getElementById('age').value;
    //connect to database
    const firebaseRef = firebase.database().ref("List");
    firebaseRef.push({
        first_name: firstName,
        last_name: lastName,
        nick_name: nickName,
        Age: Age
    });
    console.log("Insert Complete!!!");
}