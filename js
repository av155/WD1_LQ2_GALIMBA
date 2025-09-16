window.onload = function() {

  var addButtons = document.querySelectorAll(".friend button");

  for (var i = 0; i < addButtons.length; i++) {
    addButtons[i].onclick = function() {
      alert("Friend request sent!");
    };
  }

  var likeButtons = document.querySelectorAll(".actions button:first-child");

  for (var j = 0; j < likeButtons.length; j++) {
    likeButtons[j].onclick = function() {
      alert("You liked this post!");
    };
  }

};
