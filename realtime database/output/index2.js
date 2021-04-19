var runIdRef = firebase.database().ref("action");

let DATA;
let RUN_ID;

function getData() {
  ref.on("value", (snapshot) => {
      if (snapshot.exists()) {
          fetch(snapshot.val());
      } else {
          console.log("No data available");
          DATA = "";
          setDisplayCondition();
      }
  });
  runIdRef.on("value", (snapshot) => {
      const data = snapshot.val();
      RUN_ID = data;
  });
}
window.onload = getData();
