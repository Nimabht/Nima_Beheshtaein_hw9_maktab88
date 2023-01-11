$(() => {
  $("#increase").on("click", () => {
    let width = +$(".progress-bar").css("width").slice(0, -2);
    $(".progress-bar").css("width", width + 60);
    (width + 60) / 6 <= 100 ? $("#percent").html(`${(width + 60) / 6}%`) : null;
  });
});
