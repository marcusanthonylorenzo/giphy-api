export default class GifGenerator {  
  static getGifs(input) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url =  `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${input}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  static getTrending(){
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}`;      
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}