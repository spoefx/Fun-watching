let acc = document.getElementsByClassName("btn-faq");


for (let i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function () {
        let desc = this.nextElementSibling;

        if (desc.style.display == "none") {
            desc.style.display = "block"
        } else {
            desc.style.display="none"
        }
    })
}