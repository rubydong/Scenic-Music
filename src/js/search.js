/*
Developed by Ryan O'Day
HackRPI 2015 Project
*/
//-----------------API Keys--------------------------------
//Tripadvisor api key: 6df2666f-a98d-4502-84a4-8b70540e0628
//---------------------------------------------------------

function getLocation(){
	console.log("Hello World!");
	var loc=[];
 	var address = document.getElementById("searchbox").value;
  var apikey_tripadvisor = "6df2666f-a98d-4502-84a4-8b70540e0628";
  var locid;
  var loctype;
  
  var results_parser = function(results, status) {
	if (status == google.maps.GeocoderStatus.OK) {
		loc[0]=results[0].geometry.location.lat();
		loc[1]=results[0].geometry.location.lng();
		console.log("Lat & Longitude (in results_parser):",loc);
		var idurl = "http://api.tripadvisor.com/api/partner/2.0/map/" + loc[0] + "," + loc[1] + "?key=" + apikey_tripadvisor;
		console.log("URI:",idurl);
		 $.ajax({
					type: "GET",
					cache: true,
					url: idurl,
					dataType: 'json',
					success: function(result){
					  var data = result.data;
					  console.log("Got result data:", data);
					  locid = data[0].location_id;
					  console.log("Loc id:",locid);
					  //Get tripadvisor category
						var caturl = "http://api.tripadvisor.com/api/partner/2.0/location/" + locid + "?key=" + apikey_tripadvisor;
						console.log("URI (round 2):",caturl);
						 $.ajax({
									type: "GET",
									cache: true,
									url: caturl,
									dataType: 'json',
									success: function(response){
										console.log("Response success:",response.attraction_types[0].name);
									},
									error: function (msg) {
										console.log("Response failure:", msg);
												var errOutput = document.getElementById('error');
													errOutput.innerHTML = msg.responseText;
									}
								});
					},
					error: function (msg) {
								var errOutput = document.getElementById('error');
									errOutput.innerHTML = msg.responseText;
					}
				});
    }else{
    	var errOutput = document.getElementById('error');
    	errOutput.innerHTML = "There was an error attempting to locate the entered location.";
  	}
  }
  
  var geocoder = new google.maps.Geocoder();
  //Get latitude and longitude
  geocoder.geocode( { 'address': address}, results_parser );
  //------------------------
  //Get tripadvisor location id
    
  //-------------------------
  
  }
