function displayPlaylist(src){
 	var subc = src;
	var searchquery = generalize(subc);
  var spotifyurl = "https://api.spotify.com/v1/search?q=" + searchquery + "&type=playlist&market=US";
   $.ajax({
									type: "GET",
									cache: true,
									url: spotifyurl,
									dataType: 'json',
									success: function(response){
										console.log("Response success:",response);
										var array = response.playlists.items;
										var opls = "";
										var item = array[0];
										window.open(item.external_urls.spotify);
									},
									error: function (msg) {
										console.log("Response failure:", msg);
									}
								});
}
