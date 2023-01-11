$(() => {
  $(".title").on("click", function () {
    //Reset all arrows exept clicked one
    $("i").not($(this).children("i")).attr("class", "bi bi-caret-right-fill");
    //Handle clicked one arrow
    $(this).children("i").attr("class") == "bi bi-caret-right-fill"
      ? $(this).children("i").attr("class", "bi bi-caret-down-fill")
      : $(this).children("i").attr("class", "bi bi-caret-right-fill");
    //Reset all desc exept clicked one
    $(".description")
      .not($(this).parent().children(".description"))
      .slideUp("fast");
    //Handle clicked one desc
    $(this).parent().children(".description").slideToggle("fast");
  });

  //handle hover
  $(".title").hover(
    function () {
      $(this).css("background-color", "#ffffd7");
    },
    function () {
      $(this).css("background-color", "white");
    }
  );
});
