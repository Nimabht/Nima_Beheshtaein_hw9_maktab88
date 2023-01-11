$(() => {
  let div = $("<div>Click me and watch the text changes!</div>")
    .css({
      "background-color": "green",
      color: "white",
      border: "1px solid black",
      width: "500px",
      height: "200px",
      margin: "14rem auto",
      overflow: "hidden",
    })
    .on("click", function () {
      this.append("Click added some text!");
    });

  $("body").append(div);
});
