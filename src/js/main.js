$.getJSON('/../../api/brewery-db/zombie-killer.json')
 .then(function(message){
   console.log(message);

   $beername = $('.beername');
   $beername.text(message.name);

 });

$.getJSON('/../../api/youtube/mead.json')
.then(function(mead){
  console.log(mead);

  
})
