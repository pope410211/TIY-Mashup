
$.getJSON('/../../api/youtube/b-nektar.json')
.then(function(bnektar){
  console.log(bnektar);

  $vidTitle = $('#nektar');
  $vidTitle.text(bnektar.title);

  $vidPlayer = $('iframe');
  $vidPlayer.attr(bnektar.html);

  $vidIMG = $('.vidimg');
  $vidIMG.attr(bnektar.thumbnail_url)



});
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
