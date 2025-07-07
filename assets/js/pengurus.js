var btnPengurusAll = document.querySelectorAll(".personContent .personDetail .app-card")
btnPengurusAll.forEach(btnPengurus => {
    btnPengurus.addEventListener("click", function () {
        const pagePerson = document.querySelector(".personContent .container-xl")
        const pageDetailPerson = document.querySelector(".detail-personContent .container-xl")
        const name = btnPengurus.getAttribute("data-account")
        if (name == "") {
            pagePerson.classList.remove("display-content")
            pageDetailPerson.classList.add("display-content")
        } else {
            pagePerson.classList.add("display-content")
            pageDetailPerson.classList.remove("display-content")
            $('.list-detail-content').load(`./data/data_pengurus_detail.php?key=${name}`, function () {}).hide().fadeIn("slow");

        }
    })
});

var btnBackData = document.querySelector(".detail-personContent .back-data")
btnBackData.addEventListener("click", function () {
    const pagePerson = document.querySelector(".personContent .container-xl")
    const pageDetailPerson = document.querySelector(".detail-personContent .container-xl")
    $('.list-detail-content').empty()
    pagePerson.classList.remove("display-content")
    pageDetailPerson.classList.add("display-content")
})