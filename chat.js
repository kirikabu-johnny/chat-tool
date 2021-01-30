$('#messageInput').on('keypress', (e) => {
  let username = $('option:selected').val();
  let message = $("#messageInput").val();
  let indiname = $('option:selected').text();

  if (e.keyCode == 13) {
    if (username == "inagaki") {
      let messageElement = $("<il><p class='sender_name me'>" + indiname + "</p><p class='right_balloon'>" + message + "</p><p class='clear_balloon'></p></il>");
      $("#messages").append(messageElement);
    }
    else {
      let messageElement = $("<il><p class='sender_name'>" + indiname + "</p><p class='left_balloon'>" + message + "</p><p class='clear_balloon'></p></il>");
      $("#messages").append(messageElement);
    }
  }
});


$(document).ready(function() {
  hsize = $(window).height();
  $(".panel-default").css("height", hsize + "px");

});

$(window).resize(function() {
  hsize = $(window).height();
  $(".panel-default").css("height", hsize + "px");
});
