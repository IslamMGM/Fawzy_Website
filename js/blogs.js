document.querySelectorAll(".read_more_alert").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    Swal.fire({
      title: "عذرًا",
      text: "سيكون المقال متوفر قريبًا",
      icon: "info",
      confirmButtonText: "OK",
      customClass: {
        popup: "my-swal-popup",
        title: "my-swal-title",
        htmlContainer: "my-swal-text",
        confirmButton: "my-swal-button",
      },
    });
  });
});
