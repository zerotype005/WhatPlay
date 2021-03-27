function addGame() {

    // function to pull data from html
    addRequirement();

    /* system requirement */

    // minimum requirement
    minimumRequirement()
    // recommended requirement
    recommendedRequirement()
    //connect to database
    const firebaseRef = firebase.database().ref("gamelists");
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

    alert("Add list complete");

}

function addRequirement() {
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
    return gameName, genre, platform, URLimg, Description, URLvideo, URLRefImage, URLRefImage2, Developer, Publisher;
}

function minimumRequirement() {
    var OS = document.getElementById("OS1").value;
    var CPU = document.getElementById("CPU1").value;
    var GPU = document.getElementById("GPU1").value;
    var RAM = document.getElementById("RAM1").value;
    var Capacity = document.getElementById("Capacity1").value;
    return OS, CPU, GPU, RAM, Capacity;
}

function recommendedRequirement() {
    var OS2 = document.getElementById("OS2").value;
    var CPU2 = document.getElementById("CPU2").value;
    var GPU2 = document.getElementById("GPU2").value;
    var RAM2 = document.getElementById("RAM2").value;
    var Capacity2 = document.getElementById("Capacity2").value;
    return OS2, CPU2, GPU2, RAM2, Capacity2;
}