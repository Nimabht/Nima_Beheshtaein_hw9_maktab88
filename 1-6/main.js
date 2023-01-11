$(() => {
  $(".dropdown").hover(
    function () {
      console.log("aha");
      $(this).children(".drop-content").slideDown("slow");
    },
    function () {
      console.log("aha");
      $(this).children(".drop-content").slideUp("slow");
    }
  );
});
