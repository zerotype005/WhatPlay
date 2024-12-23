var dbRef = firebase.database().ref('gamelists');
dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    // renderGame(data);
    showadventure_pc(data);
    showadventure_playstation(data);
    showadventure_Nintendo(data);
});

var div_container = document.querySelector('.container-fluid');

function showadventure_pc(doc) {
    let div_headtext = document.createElement('div');
    div_headtext.classList.add('headtext');
    div_headtext.classList.add('display-3');
    div_headtext.textContent = "PC";

    let div_slider = document.createElement('div');
    div_slider.classList.add('slider');
    div_slider.classList.add('owl-carousel');

    for (let i = 0; i < doc.adventure.length; i++) {
        if (doc.adventure[i].Platform == "PC") {
            let div_card = document.createElement('div');
            div_card.classList.add('card');

            let div_img = document.createElement('div');
            div_img.classList.add('img');
            let img_tag = document.createElement('img');
            img_tag.src = doc.adventure[i].URL_img;
            div_img.appendChild(img_tag);

            let div_content = document.createElement('div');
            div_content.classList.add('content');

            let div_title = document.createElement('div');
            div_title.classList.add('title');
            div_title.textContent = doc.adventure[i].game_name;

            let div_subtitle = document.createElement('div');
            div_subtitle.classList.add('sub-title');
            div_subtitle.textContent = doc.adventure[i].Publisher;

            let div_btn = document.createElement('div');
            div_btn.classList.add('btn');

            let button = document.createElement('button');
            button.id = i;
            button.classList.add('adventure');
            button.onclick = function() {showgame(this.id)};
            button.addEventListener("click", function() {
                window.location.href = "output-gamedetail-adventure.html";
                localStorage.setItem("id2", button.id);
            });
            button.textContent = "Read more";

            img_tag.addEventListener("click", function() {
                window.location.href = "output-gamedetail-adventure.html";
                localStorage.setItem("id", button.id);
            });

            div_btn.appendChild(button);

            div_content.appendChild(div_title);
            div_content.appendChild(div_subtitle);
            div_content.appendChild(div_btn);

            div_card.appendChild(div_img);
            div_card.appendChild(div_content);

            div_slider.appendChild(div_card)
        }

    }

    div_container.appendChild(div_headtext);
    div_container.appendChild(div_slider);
        
    $(".slider").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    });
}

function showadventure_playstation(doc) {
    let div_headtext = document.createElement('div');
    div_headtext.classList.add('headtext');
    div_headtext.classList.add('display-3');
    div_headtext.textContent = "Playstation";

    let div_slider = document.createElement('div');
    div_slider.classList.add('slider');
    div_slider.classList.add('owl-carousel');

    for (let i = 0; i < doc.adventure.length; i++) {
        if (doc.adventure[i].Platform == "Playstation") {
            let div_card = document.createElement('div');
            div_card.classList.add('card');

            let div_img = document.createElement('div');
            div_img.classList.add('img');
            let img_tag = document.createElement('img');
            img_tag.src = doc.adventure[i].URL_img;
            div_img.appendChild(img_tag);

            let div_content = document.createElement('div');
            div_content.classList.add('content');

            let div_title = document.createElement('div');
            div_title.classList.add('title');
            div_title.textContent = doc.adventure[i].game_name;

            let div_subtitle = document.createElement('div');
            div_subtitle.classList.add('sub-title');
            div_subtitle.textContent = doc.adventure[i].Publisher;

            let div_btn = document.createElement('div');
            div_btn.classList.add('btn');

            let button = document.createElement('button');
            button.id = i;
            button.classList.add('adventure');
            button.onclick = function() {showgame(this.id)};
            button.addEventListener("click", function() {
                window.location.href = "output-gamedetail-adventure.html";
                localStorage.setItem("id2", button.id);
            });
            button.textContent = "Read more";

            img_tag.addEventListener("click", function() {
                window.location.href = "output-gamedetail-adventure.html";
                localStorage.setItem("id", button.id);
            });

            div_btn.appendChild(button);

            div_content.appendChild(div_title);
            div_content.appendChild(div_subtitle);
            div_content.appendChild(div_btn);

            div_card.appendChild(div_img);
            div_card.appendChild(div_content);

            div_slider.appendChild(div_card)
        }

    }

    div_container.appendChild(div_headtext);
    div_container.appendChild(div_slider);

    $(".slider").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    });
}

function showadventure_Nintendo(doc) {
    let div_headtext = document.createElement('div');
    div_headtext.classList.add('headtext');
    div_headtext.classList.add('display-3');
    div_headtext.textContent = "Nintendo";

    let div_slider = document.createElement('div');
    div_slider.classList.add('slider');
    div_slider.classList.add('owl-carousel');

    for (let i = 0; i < doc.adventure.length; i++) {
        if (doc.adventure[i].Platform == "Nintendo") {
            let div_card = document.createElement('div');
            div_card.classList.add('card');

            let div_img = document.createElement('div');
            div_img.classList.add('img');
            let img_tag = document.createElement('img');
            img_tag.src = doc.adventure[i].URL_img;
            div_img.appendChild(img_tag);

            let div_content = document.createElement('div');
            div_content.classList.add('content');

            let div_title = document.createElement('div');
            div_title.classList.add('title');
            div_title.textContent = doc.adventure[i].game_name;

            let div_subtitle = document.createElement('div');
            div_subtitle.classList.add('sub-title');
            div_subtitle.textContent = doc.adventure[i].Publisher;

            let div_btn = document.createElement('div');
            div_btn.classList.add('btn');

            let button = document.createElement('button');
            button.id = i;
            button.classList.add('adventure');
            button.onclick = function() {showgame(this.id)};
            button.addEventListener("click", function() {
                window.location.href = "output-gamedetail-adventure.html";
                localStorage.setItem("id2", button.id);
            });
            button.textContent = "Read more";

            img_tag.addEventListener("click", function() {
                window.location.href = "output-gamedetail-adventure.html";
                localStorage.setItem("id", button.id);
            });

            div_btn.appendChild(button);

            div_content.appendChild(div_title);
            div_content.appendChild(div_subtitle);
            div_content.appendChild(div_btn);

            div_card.appendChild(div_img);
            div_card.appendChild(div_content);

            div_slider.appendChild(div_card)
        }

    }

    div_container.appendChild(div_headtext);
    div_container.appendChild(div_slider);
    
    $(".slider").owlCarousel({
        loop: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    });
}

function renderGame(id,doc) {
    document.getElementById('headtext1').textContent = doc.adventure[id].game_name;
    
    let imgtag = document.createElement('img');
    imgtag.src = doc.adventure[id].URL_img;
    document.getElementById('image').appendChild(imgtag);

    document.getElementById('genre').textContent = "genre : " + doc.adventure[id].genre;
    document.getElementById('platform').textContent = "platform : " + doc.adventure[id].Platform;
    document.getElementById('headtext2').textContent = "รายละเอียดของเกม";
    document.getElementById('desc').textContent = doc.adventure[id].desc;
    document.getElementById('developer').textContent = "developer :" + doc.adventure[id].Developer;
    document.getElementById('publisher').textContent = "publisher :" + doc.adventure[id].Developer;
    document.getElementById('storelink').textContent = "storelink :" + doc.adventure[id].Developer;

    // recommended_requirement
    document.getElementById('CPU').textContent = "CPU :" + doc.adventure[id].System_requirement.minimum_requirement.CPU;
    document.getElementById('Capacity').textContent = "Capacity :" + doc.adventure[id].System_requirement.minimum_requirement.Capacity;
    document.getElementById('GPU').textContent = "GPU :" + doc.adventure[id].System_requirement.minimum_requirement.GPU;
    document.getElementById('OS').textContent = "OS :" + doc.adventure[id].System_requirement.minimum_requirement.OS;
    document.getElementById('RAM').textContent = "RAM :" + doc.adventure[id].System_requirement.minimum_requirement.RAM;

}
window.addEventListener("load", function () {
    var loading = document.getElementById("loading");
    loading.style.opacity = 0;
    setTimeout(destroyLoading, 1000);
    function destroyLoading(params) {
        document.body.removeChild(loading);
    }
});
/* function renderGame(doc) {
    for (let i = 0; i < doc.adventure.length; i++) {
        let divcontent = document.createElement('div');
        divcontent.classList.add('content');
        let btnlink = document.createElement('button');
        btnlink.classList.add('btnlink');
        btnlink.textContent = "button";
        btnlink.addEventListener("click", function(){
            window.open("output-gamedetail.html");
        });

        divcontent.textContent = doc.adventure[i].game_name;

        divcontent.appendChild(btnlink)

        gameList.appendChild(divcontent);

    }
} */