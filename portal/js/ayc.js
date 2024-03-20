document.addEventListener("DOMContentLoaded", function () {
    // Dummy data (replace with your actual data)
    var userData = [
      { name: "Harrison", employmentStatus: "Reviewed" },
      { name: "John", employmentStatus: "UnReviewed" },
      // Add more user data here
    ];

    // Process data to get the count of employed and unemployed users
    var employedCount = userData.filter(user => user.employmentStatus === "Reviewed").length;
    var unemployedCount = userData.filter(user => user.employmentStatus === "UnReviewed").length;

    // Create Chart.js chart
    var ctx = document.getElementById("applications").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Reviewed", "UnReviewed"],
        datasets: [{
          data: [employedCount, unemployedCount],
          backgroundColor: ["#36A2EB", "#FF6384"],
        }],
      },
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Dummy data (replace with your actual data)
    var userData = [
      { name: "Harrison", employmentStatus: "Employed" },
      { name: "John", employmentStatus: "Unemployed" },
      // Add more user data here
    ];

    // Process data to get the count of employed and unemployed users
    var employedCount = userData.filter(user => user.employmentStatus === "Employed").length;
    var unemployedCount = userData.filter(user => user.employmentStatus === "Unemployed").length;

    // Create Chart.js chart
    var ctx = document.getElementById("employmentChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Employed", "Unemployed"],
        datasets: [{
          data: [employedCount, unemployedCount],
          backgroundColor: ["#36A2EB", "#FF6384"],
        }],
      },
    });
  });
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