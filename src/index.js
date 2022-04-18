import $ from 'jquery';
import "./css/styles.css";

//process.env.API_KEY
$("#search").click(function () {

  let input = $("#input").val();
  let request = new XMLHttpRequest();
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${input}`;

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let imgUrl = response.data[0].images.original.url;
      console.log(imgUrl);
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
