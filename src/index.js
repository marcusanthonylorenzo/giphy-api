import $ from 'jquery';
import "./css/styles.css";

//process.env.API_KEY
$("#search").click(function () {

  let request = new XMLHttpRequest();
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=cheeseburgers`;

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let imgUrl = response.data[0].images.original.url;
      console.log(imgUrl);

      $("#test-img").attr("src", imgUrl);

    }
  };

  request.open("GET", url, true);

  request.send();
});

