
var image = document.getElementById('paisaje');

console.log(image)
console.log(image.src)
var downloadingImage = new Image()
downloadingImage.onload = function(){
  image.src = this.src
}
downloadingImage.src = "http://www.ismedioambiente.com/wp-content/uploads/2011/06/Convenio-Europeo-del-Paisaje.jpg";

