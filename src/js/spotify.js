function displayPlaylist(){
 	var subc = window.location.hash.substr(1); 
	var searchquery = generalize(subc);
  var spotifyurl = "https://api.spotify.com/v1/search?q=" + searchquery + "&type=playlist&market=US";
   $.ajax({
									type: "GET",
									cache: true,
									url: spotifyurl,
									dataType: 'json',
									success: function(response){
										console.log("Response success:",response);
									},
									error: function (msg) {
										console.log("Response failure:", msg);
									}
								});
}
