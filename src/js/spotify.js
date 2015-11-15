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
										var array = response.playlists.items;
										var opls = "";
										for (var i = 0;i<array.length;i++){
										  var item = array[i];
										  opls += "<a href=\"" + item.external_urls.spotify + "\" target=\"_blank\" <img src=\"" + item.images[1].url + "\" alt=\"" + item.images[1].url + " width=200 height=200></a>";
										}
										document.getElementById("output").innerHTML = opls;
									},
									error: function (msg) {
										console.log("Response failure:", msg);
									}
								});
}
