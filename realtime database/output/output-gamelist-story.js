var dbRef = firebase.database().ref('gamelists');
dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    // renderGame(data);
    showstory_pc(data);
    showstory_playstation(data);
    showstory_Nintendo(data);
});

var div_container = document.querySelector('.container-fluid');

function showstory_pc(doc) {
    let div_headtext = document.createElement('div');
    div_headtext.classList.add('headtext');
    div_headtext.classList.add('display-3');
    div_headtext.textContent = "PC";

    let div_slider = document.createElement('div');
    div_slider.classList.add('slider');
    div_slider.classList.add('owl-carousel');

    for (let i = 0; i < doc.story.length; i++) {
        if (doc.story[i].Platform == "PC") {
            let div_card = document.createElement('div');
            div_card.classList.add('card');

            let div_img = document.createElement('div');
            div_img.classList.add('img');
            let img_tag = document.createElement('img');
            img_tag.src = doc.story[i].URL_img;
            div_img.appendChild(img_tag);

            let div_content = document.createElement('div');
            div_content.classList.add('content');

            let div_title = document.createElement('div');
            div_title.classList.add('title');
            div_title.textContent = doc.story[i].game_name;

            let div_subtitle = document.createElement('div');
            div_subtitle.classList.add('sub-title');
            div_subtitle.textContent = doc.story[i].Publisher;

            let div_btn = document.createElement('div');
            div_btn.classList.add('btn');

            let button = document.createElement('button');
            button.id = i;
            button.classList.add('story');
            button.onclick = function () { showgame(this.id) };
            button.addEventListener("click", function () {
                window.location.href = "output-gamedetail-story.html";
                localStorage.setItem("id3", button.id);
            });
            button.textContent = "Read more";

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
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    });
}

function showstory_playstation(doc) {
    let div_headtext = document.createElement('div');
    div_headtext.classList.add('headtext');
    div_headtext.classList.add('display-3');
    div_headtext.textContent = "Playstation";

    let div_slider = document.createElement('div');
    div_slider.classList.add('slider');
    div_slider.classList.add('owl-carousel');

    for (let i = 0; i < doc.story.length; i++) {
        if (doc.story[i].Platform == "Playstation") {
            let div_card = document.createElement('div');
            div_card.classList.add('card');

            let div_img = document.createElement('div');
            div_img.classList.add('img');
            let img_tag = document.createElement('img');
            img_tag.src = doc.story[i].URL_img;
            div_img.appendChild(img_tag);

            let div_content = document.createElement('div');
            div_content.classList.add('content');

            let div_title = document.createElement('div');
            div_title.classList.add('title');
            div_title.textContent = doc.story[i].game_name;

            let div_subtitle = document.createElement('div');
            div_subtitle.classList.add('sub-title');
            div_subtitle.textContent = doc.story[i].Publisher;

            let div_btn = document.createElement('div');
            div_btn.classList.add('btn');

            let button = document.createElement('button');
            button.id = i;
            button.classList.add('story');
            button.onclick = function () { showgame(this.id) };
            button.addEventListener("click", function () {
                window.location.href = "output-gamedetail-story.html";
                localStorage.setItem("id3", button.id);
            });
            button.textContent = "Read more";

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
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    });
}

function showstory_Nintendo(doc) {
    let div_headtext = document.createElement('div');
    div_headtext.classList.add('headtext');
    div_headtext.classList.add('display-3');
    div_headtext.textContent = "Nintendo";

    let div_slider = document.createElement('div');
    div_slider.classList.add('slider');
    div_slider.classList.add('owl-carousel');

    for (let i = 0; i < doc.story.length; i++) {
        if (doc.story[i].Platform == "Nintendo") {
            let div_card = document.createElement('div');
            div_card.classList.add('card');

            let div_img = document.createElement('div');
            div_img.classList.add('img');
            let img_tag = document.createElement('img');
            img_tag.src = doc.story[i].URL_img;
            div_img.appendChild(img_tag);

            let div_content = document.createElement('div');
            div_content.classList.add('content');

            let div_title = document.createElement('div');
            div_title.classList.add('title');
            div_title.textContent = doc.story[i].game_name;

            let div_subtitle = document.createElement('div');
            div_subtitle.classList.add('sub-title');
            div_subtitle.textContent = doc.story[i].Publisher;

            let div_btn = document.createElement('div');
            div_btn.classList.add('btn');

            let button = document.createElement('button');
            button.id = i;
            button.classList.add('story');
            button.onclick = function () { showgame(this.id) };
            button.addEventListener("click", function () {
                window.location.href = "output-gamedetail-story.html";
                localStorage.setItem("id3", button.id);
            });
            button.textContent = "Read more";

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
window.addEventListener("load", function () {
    var loading = document.getElementById("loading");
    loading.style.opacity = 0;
    setTimeout(destroyLoading, 1000);
    function destroyLoading(params) {
        document.body.removeChild(loading);
    }
});
/* function renderGame(doc) {
    for (let i = 0; i < doc.story.length; i++) {
        let divcontent = document.createElement('div');
        divcontent.classList.add('content');
        let btnlink = document.createElement('button');
        btnlink.classList.add('btnlink');
        btnlink.textContent = "button";
        btnlink.addEventListener("click", function(){
            window.open("output-gamedetail.html");
        });

        divcontent.textContent = doc.story[i].game_name;

        divcontent.appendChild(btnlink)

        gameList.appendChild(divcontent);

    }
} */