let jatekosok = ['kapitany','gyogyito','ersek','nador'];
let telepulesek = ['jt','falu','var'];
let termeles = ['norm','arany'];
let allapot = ['egs','bet'];

function openPlayer(evt, playerName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(playerName).style.display = "block";
  evt.currentTarget.className += " active";

} 
function plus(t_id){
  var mezo;
  var ertek;
  mezo = t_id.currentTarget.id.split('_');
  ertek = $('#'+mezo[0]+'_'+mezo[1]+'_'+mezo[2]+'_'+mezo[3]).text();
  ertek ++;
  $('#'+mezo[0]+'_'+mezo[1]+'_'+mezo[2]+'_'+mezo[3]).text(ertek);
  // console.log(ertek);
  $('#'+mezo[0]+'_termeny').text(ertek);
  $('#'+mezo[0]+'_arany').text(ertek);

}
function minus(t_id){
  var mezo;
  var ertek;
  mezo = t_id.currentTarget.id.split('_');
  ertek = $('#'+mezo[0]+'_'+mezo[1]+'_'+mezo[2]+'_'+mezo[3]).text();
  ertek --;
  $('#'+mezo[0]+'_'+mezo[1]+'_'+mezo[2]+'_'+mezo[3]).text(ertek);
  $('#'+mezo[0]+'_termeny').text(ertek);
  $('#'+mezo[0]+'_arany').text(ertek);
}

// $('#defaultOpen').click();
document.getElementById('defaultOpen').click();
$('.plus').click(function (e) { 
  plus(e);
  
});

$('.minus').click(function (e) { 
  minus(e);
  
});

// jatekosok.forEach((ja) => {
//   console.log(ja);
// });