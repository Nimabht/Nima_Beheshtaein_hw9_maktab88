$(() => {
  let div = $("<div>Hover on me!</div>")
    .css({
      "background-color": "red",
      color: "white",
      "text-align": "center",
      border: "1px solid black",
      padding: "4rem 7rem",
      margin: "14rem auto",
      overflow: "hidden",
      width: "10rem",
    })
    .hover(
      function () {
        div.css("background-color", "blue");
      },
      function () {
        div.css("background-color", "red");
      }
    );

  $("body").append(div);
});
