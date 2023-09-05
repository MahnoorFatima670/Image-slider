$(document).ready(function() {
    // Initialize variables
    var currentIndex = 0;
    var slides = $(".slide");

    // Function to show the current slide
    function showSlide(index) {
        slides.hide();
        slides.eq(index).show();
    }

    // Initial display
    showSlide(currentIndex);

    // Click event for "Next" button
    $("#next").click(function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Click event for "Previous" button
    $("#prev").click(function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
});
