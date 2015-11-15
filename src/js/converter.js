/*
Developed by Ryan O'Day and Jack Zheng
HackRPI 2015 Project
*/
function generalize (subcat) {
	switch (subcat) {
    //------------------- Museums
    case "museums":
    case "military museums":
    case "maritime museums":
    case "children\'s museums":
    case "wax museums":
    case "transportation museums":
    case "sports museums":
    case "specialty museums":
    case "museum complexes":
      return "beethoven"
      
    case "science museums":
    case "natural history museums":
    case "history museums":
    	return "mozart"
      
    case "art museums":
    case "art galleries":
      return "yiruma"
    
    //---------------------------
    //--------------------------Bars/Clubs
    case "bars/clubs":
    case "cigar bars":
      return "soothing"
      
    case "gay bars":
      return "disco"
      
    case "blues bars":
      return "blues"
      
    case "country western bars":
      return "country"
      
    case "jazz bars":
    case "Sit Down":
    case "Cafe":
      return "jazz"
      
    case "karaoke bars":
      return "pop"
      
    case "piano bars":
      return "piano"
      
    case "comedy clubs":
      return "jazz"
      
    case "dance clubs/discos ":
      return "edm"
      
    case "health clubs":
      return "workout"
    //-----------------------------
    //----------------------------- Nature
    case "national parks":
    case "nature centers":
    case "nature reserves":
    case "trams":
    case "urban parks":
    case "valleys":
    case "volcanos":
    case "state parks":
    case "scenic drives":
    case "scenic railroads":
    case "parks":
    case "islands":
    case "forests":
    case "deserts":
    case "dams ":
    case "caverns/caves":
    case "ranches":
    case "reefs":
    case "farms":
      return "soothing"
      
    case "bays":
    case "lakes":
    case "hot springs/geysers":
    case "ponds":
    case "rivers":
    case "waterfalls":
    case "waterways":
    	return "jurassic park"
    
      
    case "all terrain vehicle trails":
    case "biking trails":   
    case "motorcycle trails":
    case "mountain biking trails":
    case "off road vehicle trails ":
    case "hiking trails":
    case "road biking trails":
    case "nature trails":
    case "trails":
    case "jogging paths/tracks":
    case "equestrian trails":
    case "scenic/historic walking areas":
      	return "running music"
    //----------------------------------
    //---------------------------------- Entertainment
  
    case "sports camps/clinics":
    case "sports complexes":
    case "ski areas":
    case "snowboard ski areas":
    case "race car tracks":
    case "playgrounds":
    case "malls":
    case "golf courses":
    case "downhill ski areas":
    case "bowling alleys":
    case "arenas/stadiums/fields":
    case "cross-country ski areas ":
      return "motivation"
      
    case "observation decks/towers":
    case "observatories/planetariums":
      	return "elevator music"
      
    case "dinner theaters":
    case "movie theaters":
    case "theater districts":
    case "theaters":
      	return "opera"
    
    case "wildlife parks":
    case "zoos":
    case "horse tracks":
    case "horseback riding stables":
    case "dog tracks ":
    case "aquariums":
      return "neon trees"
    
    case "disney":
    case "water parks":
    case "concerts":
    case "game/entertainment centers":
    case "amusement/theme parks":
    case "performances":
    case "Attraction":
    case "Outdoors":
      return "pop rock"
    //----------------------------------Mystic
    case "ancient ruins":
    case "castles":
    case "fountains":
    case "monuments":
    case "geological formations":
    case "statues":
    case "canyons":
    case "mountains":
    case "mysterious sites":
      return "mystic"
    //----------------------------------
    //----------------------------------Peaceful
    case "spas":
    case "gardens":
      return "peaceful"
    //----------------------------------
    //----------------------------------Religious
    case "churches/cathedrals/temples":
      return "religious"
    //----------------------------------
    //----------------------------------Historic
    case "historic homes":
    case "historic sites":
    case "historic villages":
    case "historic walking areas":
      return "renaissance"
    //----------------------------------
    //----------------------------------
    case "operas":
      return "opera"
    //----------------------------------
    //----------------------------------
    case "symphonies":
      return "symphony"
    //----------------------------------
    //----------------------------------
    case "ballets":
      return "ballet"
    //----------------------------------
    //----------------------------------
    case "wineries":
    case "breweries":
    case "ships":
    case "bridges":
    case "ferries":
      return "ambient"
    //---------------------------------- shopping
    case "town centers/squares/plazas":
    case "shops":
    case "specialty shops":
    case "factory outlets":
    case "department stores":
    case "educational sites":
    case "flea/street markets":
    case "antique shops":
      return "chart"
    //----------------------------------
    //----------------------------------Elevator
    case "architectural buildings":
    case "civic centers":
    case "factory tours":
    case "public transportation systems":
    case "tourist/visitor centers":
    case "tours":
    case "government buildings":
    case "group tours/boats":
    case "libraries":
    case "other":
    case "convention centers":
    case "streets":
    case "neighborhoods":
    case "Neighborhoods":
    case "Islands":
    case "Fast Food":
    case "Deli":
      return "elevator"
      
    case "coffeehouses":
    	return "coffeehouse music"
    //----------------------------------
    //----------------------------------
    case "casinos":
      return "casino"
    //----------------------------------
    //---------------------------------- tourist
    case "resort communities":
    case "military bases/facilities":
    case "lighthouses":
    case "landmarks/points of interest":
    case "lookouts":
    case "missions":
    case "Hotel":
    case "Bed and Breakfast":
    case "Specialty Lodging":
    case "reservations":
      return "adventure"
      
    case "battlefields":
      return "battle" 
      
  	case "onsen":
    case "onsen resort":
    	return "traditional"
    //----------------------------------
    //----------------------------------
    case "cemeteries":
      return "ominous"
    //----------------------------------
    //----------------------------------
    case "beaches":
    case "wharfs/piers":
    case "marinas":
      return "summer"
    //----------------------------------
    //----------------------------------
    case "ghost towns":
    case "mines":
    case "old jails":
      return "thriller"
    //----------------------------------
    //----------------------------------
    //----------------------------------
      
      
    
	}
}
