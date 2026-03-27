document.addEventListener("DOMContentLoaded", function () {

    const progressBar = document.querySelector('[role="progressbar"] > div');
    const doneSound = document.getElementById('doneSound');

    if (progressBar) {
        progressBar.addEventListener('animationend', function () {
            doneSound.play();
        });
    }

    const hoverSound = document.getElementById("hoverSound");
    const buttons = document.querySelectorAll(".hoverBtn");

    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });

    const clickSound = document.getElementById("clickSound");
    const neutralSound = document.getElementById("neutralSound");

    document.addEventListener("click", (event) => {
        const clickable = event.target.closest("a, button");

        if (clickable) {
            clickSound.currentTime = 0;
            clickSound.play();
        } else {
            neutralSound.currentTime = 0;
            neutralSound.play();
        }
    });

});