// This function hides the Video when it's done
function hideVideo() {
    var video = document.getElementsByClassName("DisplayVideo")[0];
    video.pause();
    video.style.display = "none"; // Video ausblenden
}

// This function displays the video when the keys WIN+SHIFT+R are pressed
document.addEventListener('keydown', function(event) {
    if (event.metaKey && event.shiftKey && event.key === "R") {
        var video = document.getElementsByClassName("DisplayVideo")[0];

        if (video.paused) 
        {
            video.style.display = "block";
            video.play();
        } 
        else 
        {
            hideVideo();
        }
    }
});
