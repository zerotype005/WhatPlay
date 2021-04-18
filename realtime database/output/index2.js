var database = firebase.database();
var ref = database.ref("action");

ref.on(value,function(snapshot){
    var data = child.snapshot.val();
    console.log(data.name)
})