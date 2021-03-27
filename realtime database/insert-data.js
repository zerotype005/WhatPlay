let addGame = function () {
    var gameName = document.getElementsByClassName("gamename").value;
    var genre = document.getElementsByClassName("genre").value;
    var platform = document.getElementsByClassName("platform").value;
    var URLimg = document.getElementsByClassName("URLimg").value;
    var Description = document.getElementsByClassName("Description").value;
    var URLvideo = document.getElementsByClassName("URLvideo").value;
    var URLRefImage = document.getElementsByClassName("URLRefImage").value;
    var URLRefImage2 = document.getElementsByClassName("URLRefImage2").value;
    var Developer = document.getElementsByClassName("devoloper").value;
    var Publisher = document.getElementsByClassName("publisher").value;

    /* system requirement */

    // minimum requirement
    var OS = document.getElementsByClassName("OS1").value;
    var CPU = document.getElementsByClassName("CPU1").value;
    var GPU = document.getElementsByClassName("GPU1").value;
    var RAM = document.getElementsByClassName("RAM1").value;
    var Capacity = document.getElementsByClassName("Capacity1").value;

    // recommended requirement
    var OS2 = document.getElementsByClassName("OS2").value;
    var CPU2 = document.getElementsByClassName("CPU2").value;
    var GPU2 = document.getElementsByClassName("GPU2").value;
    var RAM2 = document.getElementsByClassName("RAM2").value;
    var Capacity2 = document.getElementsByClassName("Capacity2").value;

    //connect to database
    var firebaseRef = firebase.database().ref("gamelists");
    firebaseRef.push({
        action: [
            {
                gameName: gameName,
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