document.getElementById("submitNewLocation").addEventListener("click", updateLocation);

function updateLocation(){
  var sel = document.getElementById("trucks").value;

  var m = JSON.parse(("foodtrucks.json").toString());
  m.for(int i = 0; i < m.length(); i++){
    if(m[i].name == this.name){
      m[i].latitude = lat;
      m[i].longitude = lon;
    }
  }
  fs.writeFile("foodtrucks.json", JSON.stringify(m));
};

//cb callback func
function getPos(cb) {
  navigator.geolocation.getCurrentPosition(
      cb,
      function(error){
        alert(error.message);
      }, {
        enableHighAccuracy: true
    ,timeout : 5000
      }
      );
  }