$.getJSON('/../../api/brewery-db/zombie-killer.json')
 .then(function(message){
   console.log(message);

   $beerName = $('h4.beername');
   $beerName.text(message.name);

 });

$.getJSON('/../../api/youtube/b-nektar.json')
.then(function(bnektar){
  console.log(bnektar);

  $vidTitle = $('h4#nektar');
  $vidTitle.text(bnektar.title);


})
