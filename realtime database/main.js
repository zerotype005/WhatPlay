
    const firebaseRef = firebase.database().ref("gamelists");

    firebaseRef.once("value", function(snapshot){
        var data = snapshot.val();
        for(i in data){
            console.log(data);
        }; 
    })
