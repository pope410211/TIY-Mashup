$.getJSON('/../../api/brewery-db/zombie-killer.json')
 .then(function(zombieKiller){
   console.log(zombieKiller);

   $beerTitle = $('.beername');
   $beerTitle.text(zombieKiller.name);

 });

$.getJSON('/../../api/youtube/b-nektar.json')
.then(function(bnektar){
  console.log(bnektar);

  $vidTitle = $('#nektar');
  $vidTitle.text(bnektar.title);


});
