var email_btn = document.querySelector("#toggle");
if (email_btn) {
    document.querySelector("#toggle").addEventListener("click", function() {
        document.querySelector("#emailBox").style.display = 'contents';
    });
}