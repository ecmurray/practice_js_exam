var hover_display = document.querySelectorAll('.thumbnail');
if (hover_display) {
    hover_display.addEventListener("mouseover", e => {
        var B = [1, 2, 3];
        for (A of B) {
            if (hover_display[A].src == e.src) {
                //document.getElementsByClassName("thumbnail")[0].src returns the link without the url() braces
                document.querySelector('#display').style.backgroundImage = url(hover_display[A].src);
                document.querySelector("#display").innerHTML = e.alt;
            }
        }
    });
}