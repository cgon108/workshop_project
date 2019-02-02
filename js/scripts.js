// alert ("Hello World!");
// alert(2 + 2);
// alert(4 * "2");
// alert(8 + "2");
$(document).ready(function() {
  // alert("jQuery is working");
  // alert($("#css-item").text());
  // alert($(".list-item").text());
  // alert($())
  $("#goal-button").click(function() {
    alert("Hi")
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val ("");
  })
})
