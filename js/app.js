function goToVibe(vibe){
    localStorage.setItem("selectedVibe", vibe);
    window.location.href = "vibe.hmtl";
}
function goToHome(){
    window.location.href = "index.html";
}
function goToQuiz(){
    window.location.href = "quiz.html";
}
function loadVibe(){
    const selected = localStorage.getItem("selectedVibe");
    const vibe = vibes[selected];
    if(!vibe){
        return;
    }
    document.getElementById("vibe-name").textContent = vibe.name;
    document.getElementById("vibe-description").textContent = vibe.description;
    const list = document.getElementById("activities-list");
    list.innerHTML = "";
    vibe.activties.forEach(actvities => {
        const li = document.createElement("li");
        li.textContent = activity;
        list.appendChild(li);
    });
    document.getElementById("playlist-link").innerHTML = `<iframe src="${vibe.playlist}"
    width="100%" height="152" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
    </iframe>`;
}
const vibes = {
    workout : {
        name: "Work Out",
        description: "confidence. no skips. energy.",
        activities : [
            "Connect your headphones",
            "Stretch",
            "Hydrate",
            "Lock in"
        ],
        playlist: "https://open.spotify.com/playlist/4Z5XHU0qHOdkvOuMyd910x?si=6e1991ff30584d50"
    },
    cozy : {
        name: "Cozy Comfort",
        description: "soft. warm. safe.",
        activities: [
            "Light a candle",
            "Make tea",
            "Get a blanket",
            "Relax"
        ],
        playlist: "https://open.spotify.com/playlist/5kNfxwZ0im4pVOreFeKx0V?si=7ab06b04ab4745a1"
    },
    aux : {
        name: "Aux Ready",
        description: "youre in control",
        activities: [
            "Roll the windows down",
            "Hands on the wheel",
            "Volume up",
            "Enjoy the ride"
        ],
        playlist: "https://open.spotify.com/playlist/5K4vxIZ6Ucxb9n1vPe8gWa?si=b15647b538e74475"
    },
    heylol: {
        name: "...hey lol",
        description: "we all know why youre here",
        activities: [
            "Text them",
            "Turn down the lights",
            "Set the mood",
            "freak lmao"
        ],
        playlist: "https://open.spotify.com/playlist/55iqyYvZoeGbUBlAt8L0Ws?si=27e72d2053974503"
    },
    lockin: {
        name: "Lock In",
        description: "focus. concentrate. flow.",
        activities: [
            "Find a quiet space",
            "Turn off notifications",
            "Open assignments",
            "Dive in"
        ],
        playlist: "https://open.spotify.com/playlist/5K4vxIZ6Ucxb9n1vPe8gWa?si=b15647b538e74475"
    }
};