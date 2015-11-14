/*
Developed by Ryan O'Day and Jack Zheng
HackRPI 2015 Project
*/
//-----------------API Keys--------------------------------
//Tripadvisor api key: 6df2666f-a98d-4502-84a4-8b70540e0628
//---------------------------------------------------------

function getLocation(){
	var loc=[];
 	var address = document.getElementById("searchbox").value;
  var apikey_tripadvisor = "6df2666f-a98d-4502-84a4-8b70540e0628";
  var locid;
  var loctype;
  
  //Get latitude and longitude
  geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			loc[0]=results[0].geometry.location.lat();
      loc[1]=results[0].geometry.location.lng();
    }else{
    	var errOutput = document.getElementById('error');
    	errOutput.innerHTML = "There was an error attempting to locate the entered location.";
  	}
  //------------------------
  //Get tripadvisor location id
    var idurl = "http://api.tripadvisor.com/api/partner/2.0/map/" + loc[0] + "," + loc[1] + "?key=" + apikey_tripadvisor;
     $.ajax({
                type: "GET",
                cache: true,
                url: idurl,
                dataType: 'json',
                success: function(data){
                  locid = data[0].location_id;
                },
                error: function (msg) {
      						var errOutput = document.getElementById('error');
    							errOutput.innerHTML = msg.responseText;
                }
            });
  //-------------------------
  //Get tripadvisor category
    var caturl = "http://api.tripadvisor.com/api/partner/2.0/location/" + locid + "?key=" + apikey_tripadvisor;
     $.ajax({
                type: "GET",
                cache: true,
                url: caturl,
                dataType: 'json',
                success: function(data){
                  loctype = data.subcategory.;
                  alert(data);
                },
                error: function (msg) {
      						var errOutput = document.getElementById('error');
    							errOutput.innerHTML = msg.responseText;
                }
            });
  }
