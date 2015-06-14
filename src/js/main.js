
$("#dropbox").change(function beerchange() {
  if ($('#dropbox').val()=="zombieK") {
    console.log(beerchange);

// Youtube JSON
$.getJSON('/../../api/youtube/b-nektar.json')
.then(function(bnektar){
  console.log(bnektar);

  $vidTitle = $('#nektar');
  $vidTitle.text(bnektar.title);

  $vidDescript = $('#descript1');
  $vidDescript.text(bnektar.description);

});

$.getJSON('/../../api/youtube/mead.json')
.then(function(meads){
  console.log(meads);

  $vidTitle = $('#meadery');
  $vidTitle.text(meads.title);

  $vidDescript = $('#descript2');
  $vidDescript.text(meads.description);

  $vidPlay = $('#vid2');
  $vidPlay.add(meads.play);
});
// Beer JSON
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

   $beerimage = $('img', '.beerimage');
   $beerimage.attr('src', zombiekiller.data.labels.medium);

 });

   }

 else {

 $.getJSON('/../../api/brewery-db/kellerweis.json')
  .then(function(kellerweis){
    console.log(kellerweis);

    $beername = $('#beername');
    $beername.text(kellerweis.data.name);

    $abvvalue = $('#abvvalue');
    $abvvalue.text(kellerweis.data.abv);

    $describe = $('#describe');
    $describe.text(kellerweis.data.description);

    $catdes = $('#catdes');
    $catdes.text(kellerweis.data.style.description);

    $beerimage = $('img', '.beerimage');
    $beerimage.attr('src', kellerweis.data.labels.medium);

  });
}

});



// http://www.mkyong.com/jquery/how-to-set-a-dropdown-box-value-in-jquery/
