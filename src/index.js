import $ from 'jquery';
import "./css/styles.css";

//process.env.API_KEY
$("#search").click(function () {

  let request = new XMLHttpRequest();
  let url = `api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=cheeseburgers`;

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
    }
  };

  request.open("GET", url, true);

  request.send();
});

