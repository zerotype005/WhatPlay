//firebase
var firebaseRef = firebase.database().ref("gamelists");

//value input
var gameName = document.getElementById("gamename").value;
var genre = document.getElementById("genre").value;
var platform = document.getElementById("platform").value;
var URLimg = document.getElementById("URLimg").value;
var Description = document.getElementById("Description").value;
var URLvideo = document.getElementById("URLvideo").value;
var URLRefImage = document.getElementById("URLRefImage").value;
var URLRefImage2 = document.getElementById("URLRefImage2").value;
var Developer = document.getElementById("devoloper").value;
var Publisher = document.getElementById("publisher").value;

/* system requirement */

// minimum requirement
var OS = document.getElementById("OS1").value;
var CPU = document.getElementById("CPU1").value;
var GPU = document.getElementById("GPU1").value;
var RAM = document.getElementById("RAM1").value;
var Capacity = document.getElementById("Capacity1").value;

// recommended requirement
var OS2 = document.getElementById("OS2").value;
var CPU2 = document.getElementById("CPU2").value;
var GPU2 = document.getElementById("GPU2").value;
var RAM2 = document.getElementById("RAM2").value;
var Capacity2 = document.getElementById("Capacity2").value;

//index,platform
let game_ID;
let DATA;

//array

var game_action = [];
var game_adventure = [];
var game_story = [];

let addGame = function () {
    //connect to database
    firebaseRef.push({
        action: [
            {
                game_name: gameName,
                genre: genre,
                Platform: platform,
                URL_img: URLimg,
                desc: Description,
                URL_video: URLvideo,
                URLRef_Image: URLRefImage,
                URLRef_Image2: URLRefImage2,
                Developer: Developer,
                Publisher: Publisher,
                System_requirement: {
                    minimum_requirement:
                    {
                        OS: OS,
                        CPU: CPU,
                        GPU: GPU,
                        RAM: RAM,
                        Capacity: Capacity
                    },
                    recommended_requirement: {
                        OS: OS2,
                        CPU: CPU2,
                        GPU: GPU2,
                        RAM: RAM2,
                        Capacity: Capacity2
                    }

                }
            },
        ]
    });
    if(platform.value === 1){
        addToACtion();
    if(platform.value === 2){
        addToAdventure();
    }
    else{
        addToStory();
    }
    } 

}
function addToACtion() { 
    game_action.push(gameName.value); 
    console.log(game_action); //to confirm it has been added to the array 
 }

 function addToAdventure() { 
    game_adventure.push(gameName.value); 
    console.log(game_adventure); //to confirm it has been added to the array 
 }

 function addToStory() { 
    game_story.push(gameName.value); 
    console.log(game_story); //to confirm it has been added to the array 
 } 

 let put_array = function () {
    //connect to database
    firebaseRef.push({
        action: [{
            array_action: game_action,
            array_adventure: game_adventure,
            array_story: game_story,
                
        },]
    });
}