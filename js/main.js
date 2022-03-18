function goToEinleitung() {
    document.getElementById("einleitung").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });

    document.getElementById(1).style = "background-color: yellow";
    setTimeout(function() { document.getElementById(1).style = "background-color: none"; }, 1000);
}

function goToHauptteil() {
    document.getElementById("hauptteil").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });

    document.getElementById(2).style = "background-color: yellow";
    setTimeout(function() { document.getElementById(2).style = "background-color: none"; }, 1000);
}

function goToSchluss() {
    document.getElementById("schluss").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });

    document.getElementById(3).style = "background-color: yellow";
    setTimeout(function() { document.getElementById(3).style = "background-color: none"; }, 1000);
}

function goToFazit() {
    document.getElementById("fazit").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });

    document.getElementById(4).style = "background-color: yellow";
    setTimeout(function() { document.getElementById(4).style = "background-color: none"; }, 1000);
}

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    console.log(scrolled);

    /* Für Einleitung */
    if (scrolled < 299) {
        document.getElementById("side1").style = "color: royalblue;";
    }
    if (scrolled > 299) {
        document.getElementById("side1").style = "color: black; padding-left: 5px; font-weight: bold; border-left: 3px solid hsla(206,100%,35%,1);";
    }
    if (scrolled > 699) {
        document.getElementById("side1").style = "color: royalblue;";
    }

    /* Für Hauptteil */
    if (scrolled < 699) {
        document.getElementById("side2").style = "color: royalblue;";
    }
    if (scrolled > 699) {
        document.getElementById("side2").style = "color: black; padding-left: 5px; font-weight: bold; border-left: 3px solid hsla(206,100%,35%,1);";
    }
    if (scrolled > 999) {
        document.getElementById("side2").style = "color: royalblue; border-left-color: coral;";
    }

    /* Für Schluss */
    if (scrolled < 999) {
        document.getElementById("side3").style = "color: royalblue;";
    }
    if (scrolled > 999) {
        document.getElementById("side3").style = "color: black; padding-left: 5px; font-weight: bold; border-left: 3px solid hsla(206,100%,35%,1);";
    }
    if (scrolled > 1399) {
        document.getElementById("side3").style = "color: royalblue;";
    }

    /* Für Fazit */
    if (scrolled < 1399) {
        document.getElementById("side4").style = "color: royalblue;";
    }
    if (scrolled > 1399) {
        document.getElementById("side4").style = "color: black; padding-left: 5px; font-weight: bold; border-left: 3px solid hsla(206,100%,35%,1);";
    }
})