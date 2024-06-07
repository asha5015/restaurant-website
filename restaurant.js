function orderAdded() {
    var message = document.getElementById("message");
    message.classList.remove("hidden");
    setTimeout(function() {
        message.classList.add("hidden");
    }, 3000);
}