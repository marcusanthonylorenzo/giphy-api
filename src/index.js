import $ from 'jquery';
import "./css/styles.css";
import GifGenerator from './js/apiLogic.js';

//process.env.API_KEY
$("#search").click(function () {
  //get input, clear input
  let input = $("#input").val();
  $("#image-block").text("");
  $("#input").text("");

  //create promise from new Promise object.
  let promise = GifGenerator.getGifs(input);
  //promise.then (if response is successful, .then doSometing().)
  promise.then(function(response) {
    const parsedResponse = JSON.parse(response);
    console.log(parsedResponse, parsedResponse.data);
    buildImgs(parsedResponse.data);
    console.log("success!");
  });
});

$("#trending").click(function () {

  $("#image-block").text("");
  //create promise, different static method.
  let promise = new GifGenerator.getTrending();
  promise.then((response) => {
    const parsedResponse = JSON.parse(response);
    buildImgs(parsedResponse.data);
    console.log("Now Trending.");
  });
});

function buildImgs(data) {
  data.forEach(img => {
    const src = img.images.original.url;
    console.log(src);
    $("#image-block").append(`<img src='${src} alt='gif'>`);
  });
}
