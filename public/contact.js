$(".submit").on("click", function (event) {
    event.preventDefault();

    const myMail = "fatih.kagan.emre@gmail.com"
    const form = $(".emailForm")[0];
    const title = form[0].value;
    const content = form[1].value;
    const mailtoLink = `mailto:${encodeURIComponent(myMail)}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(content)}`;

    window.location.href = mailtoLink;  
});