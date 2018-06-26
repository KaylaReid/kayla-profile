var images = [
  "http://missionhome.com/wp-content/uploads/2013/09/1024px-Kampala_26.08.2009_13-02-38.jpg",
  "https://www.theupperclass.net/images/trips/niagara-falls-toronto-canadian-adventure.jpg",
  "https://fthmb.tqn.com/PXzzQqocIHbH6P1AguwRlKFAtnM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/WWoHP-Diagon-Alley-56b7d96a3df78c0b1363baff.jpg"
];
var names = ["Uganda", "Canada", "The Wizarding World of Harry Potter"];

var places = ""
var placePics = ""
$("#see-places").click(function(){
 for (var i = 0; i < images.length; i++){
  $("#output-places").append(`<div class="card"><img id="place-images" src="${images[i]}" <p>${names[i]}</p></div>`);
 
 } 
  $("#see-places").hide()
})

