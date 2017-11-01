

$(document).ready(function() {
    
var tableInfo = [null, null, null, null, null, null, null, null, null]




var currentTable = 0;

$(".available").click(function(){
$("#form").show();
currentTable = $(this).data("tablenum");
$("#tableNumber").text("Table Number: " + currentTable);
});

    

  
$(function(){
$('#xbox').click(function(){
$('#form').hide();  
});
});
 
$(function(){    
$("#reserve").click(function() {
$('#form').hide();

});
});


    
});

// function getNumberFromTable(table) {
// return parseInt ( $(table).text().trim() );

// $("available").on("click", function(){
// $("#reservation").css("display", "block"
// lastTableClicked = this;
 // var tableNum = $(this).text();
// $("#tableNumber").text("Table Number: " + tableNum);


// div id= tableNumber 

 // $("saveButton").on("click", function () {

  
  // 1. add reserved class to the table
  //   $(lastTableClicked).addClass("reserved").removeClass("available");
     
  // 2. store the info from form
// var name = $("#name").val();
 //    var partySize = $("#partsySize).val();
 //   var reservation = {
 //                      name: name,
//                       partySize: partySize
 //                      };
//                       console.log(reservation);
// var tableNum = getNumberFromTable(lastTableClicked)
// tableReservations[tableNum] = reservation;
  // 3. hide the form
// $('#reservation").css("display", "none");
// });

// how to mouseover effect on a button...
// $('.available').on('mouseover', function() {
 //   $(this).toggle 
/ }
                   
// how to add hover on tables clicked
                   // delegated events
                   // $(".table").on("mouseenter", function() {
 //                  var tableNum = getNumberFromTable(this);
 //                   if ($(this).hasClass("reserved")) {
 //                 var reservation = tableReservations [tableNum]
    //               })