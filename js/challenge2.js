var copy_address_btn = document.querySelector("#billing");
if (copy_address_btn) {
    //get all inputs with the attribute "value" and has the attribute "value" that is not blank:
    //input[value][type="checkbox"]:not([value=""])

    document.querySelector('input[type="checkbox"][name="useBilling"]').addEventListener("click", function() {
        // copy_address_btn.innerHTML.select();
        // copy_address_btn.innerHTML.setSelectionRange(0, 99999);
        // navigator.clipboard.writeText(copy_address_btn.innerHTML.value);
        
        // var copy_html = document.querySelector("#billing").innerHTML;
        document.querySelector("#home").innerHTML = copy_address_btn.innerHTML;
    });
}