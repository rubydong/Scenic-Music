/*
Developed by Ryan O'Day and Jack Zheng
HackRPI 2015 Project
*/
function generalize (subcat) { 
	switch (subcat) {
    //------------------- Museums 
    case "art galleries":
    case "science museums":
    case "museums":
    case "military museums":
    case "maritime museums":
    case "history museums":
    case "children\'s museums":
    case "wax museums":
    case "art museums":
    case "transportation museums":
    case "sports museums":
    case "specialty museums":
    case "natural history museums":
    case "museum complexes":
      return "beethoven"
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
    case "reservations":
    case "national parks":
    case "nature centers":
    case "nature reserves":
    case "nature trails":
    case "waterfalls":
    case "waterways":
    case "trails"
    case "trams":
    case "urban parks":
    case "valleys":
    case "volcanos":
    case "state parks":
    case "rivers":
    case "road biking trails":
    case "scenic drives":
    case "scenic railroads":
    case "scenic/historic walking areas":
    case "ponds":
    case "parks":
    case "lakes":
    case "hot springs/geysers":
    case "islands":
    case "forests":
    case "hiking trails":
    case "deserts":
    case "dams ":
    case "caverns/caves":
    case "bays":
    case "wildlife parks":
    case "ranches":
    case "reefs":
    case "motorcycle trails":
    case "mountain biking trails":
    case "off road vehicle trails ":
    case "equestrian trails":
    case "farms":
    case "all terrain vehicle trails":
    case "biking trails":
      return "soothing"
    //----------------------------------
    //---------------------------------- Entertainment
    case "zoos":
    case "water parks":
    case "theater districts":
    case "theaters":
    case "sports camps/clinics":
    case "sports complexes":
    case "ski areas":
    case "snowboard ski areas":
    case "race car tracks":
    case "performances":
    case "playgrounds":
    case "observation decks/towers":
    case "observatories/planetariums":
    case "movie theaters":
    case "malls":
    case "golf courses":
    case "game/entertainment centers":
    case "dinner theaters":
    case "disney":
    case "dog tracks ":
    case "downhill ski areas":
    case "bowling alleys":
    case "arenas/stadiums/fields":
    case "aquariums":
    case "amusement/theme parks":
    case "cross-country ski areas ":
    case "concerts":
    case "horse tracks":
    case "horseback riding stables":
    case "jogging paths/tracks":
      return "motivation"
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
      return ""
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
    case "coffeehouses":
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
      return "elevator"
    //----------------------------------
    //----------------------------------
    case "casinos":
      return "casino"
    //----------------------------------
    //---------------------------------- tourist
    case "resort communities":
    case "onsen":
    case "onsen resort":
    case "military bases/facilities":
    case "lighthouses":
    case "landmarks/points of interest":
    case "battlefields":
    case "lookouts":
    case "missions":
      return "adventure"
    //----------------------------------
    //----------------------------------
    case "cemeteries":
      return "calm"
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
      return "ominous"
    //----------------------------------
    //----------------------------------
    case "ships":
    case "bridges":
    case "ferries":
      return "background music"
    //----------------------------------  
	}
}
