document.addEventListener("DOMContentLoaded", function () {
    const notificationDropdownToggle = document.getElementById("notificationDropdownToggle");
    const notificationDropdownMenu = document.getElementById("notificationDropdownMenu");

    notificationDropdownToggle.addEventListener("click", function (event) {
        event.preventDefault();
        if (notificationDropdownMenu.style.display === "block") {
            notificationDropdownMenu.style.display = "none";
        } else {
            notificationDropdownMenu.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const messageDropdownToggle = document.getElementById("messageDropdownToggle");
    const messageDropdownMenu = document.getElementById("messageDropdownMenu");

    messageDropdownToggle.addEventListener("click", function (event) {
        event.preventDefault();
        if (messageDropdownMenu.style.display === "block") {
            messageDropdownMenu.style.display = "none";
        } else {
            messageDropdownMenu.style.display = "block";
        }
    });
});
 document.addEventListener("DOMContentLoaded", function () {
        
        document.body.addEventListener("focusout", function (event) {
            // Check if focus has moved outside the message dropdown toggle and menu
            if (!messageDropdownToggle.contains(event.relatedTarget) &&
                !messageDropdownMenu.contains(event.relatedTarget)) {
                messageDropdownMenu.style.display = "none";
            }
            if (!notificationDropdownToggle.contains(event.relatedTarget) &&
                !notificationDropdownMenu.contains(event.relatedTarget)) {
                    notificationDropdownMenu.style.display = "none";
            }
        });
    });