$(document).ready(function() {

    // Efek smooth scrolling saat tombol diklik
    $("#cta-button").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#commit-button").offset().top
        }, 1000); // Waktu animasi 1000ms
    });

    // Feedback saat tombol "Saya Berkomitmen" diklik
    $("#commit-button").on("click", function() {
        alert("Terima kasih atas komitmen Anda! Mari kita jaga bumi bersama.");
    });
});