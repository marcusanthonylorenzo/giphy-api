import $ from 'jquery';
import "./css/styles.css";

//process.env.API_KEY
$("#search").click(function () {

  let input = $("#input").val();
  let request = new XMLHttpRequest();
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${input}`;

  $("#image-block").text("");
  $("#input").text("");

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      buildImgs(response.data);
    }
  };

  request.open("GET", url, true);

  request.send();
});

$("#trending").click(function () {

  let request = new XMLHttpRequest();
  let url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}`;
  $("#image-block").text("");

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      buildImgs(response.data);
    }
  };

  request.open("GET", url, true);

  request.send();
});

function buildImgs(data) {
  data.forEach(img => {
    const src = img.images.original.url;
    console.log(src);
    $("#image-block").append(`<img src='${src} alt='gif'>`);
  });
}
