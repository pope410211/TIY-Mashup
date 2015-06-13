$.getJSON('/../../api/brewery-db/zombiekiller.json')
 .then(function(zombiekiller){
   console.log(zombiekiller);

   $beername = $('#beername');
   $beername.text(zombiekiller.data.name);

   $abvvalue = $('#abvvalue');
   $abvvalue.text(zombiekiller.data.abv);

   $describe = $('#describe');
   $describe.text(zombiekiller.data.description);

   $catdes = $('#catdes');
   $catdes.text(zombiekiller.data.style.description);

 });
