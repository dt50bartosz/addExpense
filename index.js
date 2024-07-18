$("#open-navbar-menu").click(function(){
    $(".menu-components").show();

});


$("#close-menu-drop").click(function() {
    $(".menu-components").hide();
});



$("#close-modal-btn").click(function() {
    $(".modal").hide();
    $('#comment-section').css('display', 'none');
});

$('input[name="addComment"]').change(function() {
    if ($('#commentYes').is(':checked')) {
        $('#comment-section').css('display', 'flex');
        
    } else {
        $('#comment-section').css('display', 'none');
    }

});


$("#food").click(function() {
    $(".modal").show();
    $("#income-type").text("Food");
});

$("#rent").click(function() {
    $(".modal").show();
    $("#income-type").text("Rent");
});

$("#transport").click(function() {
    $(".modal").show();
    $("#income-type").text("Transport");
});

$("#telephone").click(function() {
    $(".modal").show();
    $("#income-type").text("Telephone");
});

$("#health-care").click(function() {
    $(".modal").show();
    $("#income-type").text("Health Care");
});

$("#clothes").click(function() {
    $(".modal").show();
    $("#income-type").text("Clothes");
});

$("#hygiene").click(function() {
    $(".modal").show();
    $("#income-type").text("Hygiene");
});

$("#family").click(function() {
    $(".modal").show();
    $("#income-type").text("Family");
});

$("#entertainment").click(function() {
    $(".modal").show();
    $("#income-type").text("Entertainment");
});

$("#vacation").click(function() {
    $(".modal").show();
    $("#income-type").text("Vacation");
});

$("#books").click(function() {
    $(".modal").show();
    $("#income-type").text("Books");
});

$("#savings").click(function() {
    $(".modal").show();
    $("#income-type").text("Savings");
});

$("#retirement-plan").click(function() {
    $(".modal").show();
    $("#income-type").text("Retirement Plan");
});

$("#debts").click(function() {
    $(".modal").show();
    $("#income-type").text("Debts");
});

$("#charity").click(function() {
    $(".modal").show();
    $("#income-type").text("Charity");
});

$("#other").click(function() {
    $(".modal").show();
    $("#income-type").text("Other");
});

