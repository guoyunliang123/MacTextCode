var obj = {
  x: 200,
  y: 300,
  z: 400
};
var key;
for(key in obj) {
  if(obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}