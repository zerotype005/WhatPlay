var firebaseRef = firebase.database().ref("gamelists");


    firebaseRef.once("value", function(snapshot){
      var data = snapshot.val();
      snapshot.forEach(function(element){
        document.querySelector('#platform').innerHTML = `<div>${element.val()}</div>`
      })
      
    })