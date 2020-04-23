let jatekosok = ['kapitany','gyogyito','ersek','nador'];
let telepulesek = ['jt','falu','var'];
let telepulesek_szorzo = [1,3,5];
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

  frissit([playerName]);
} 
function plus(t_id){
  var mezo;
  var ertek;
  var mibol;
  var mit;

  mezo = t_id.currentTarget.id.split('_');
  if (mezo[3]=='bet'){
    mibol=mezo[1]+'_'+mezo[2]+'_egs';
    mit=mezo[1]+'_'+mezo[2]+'_bet';
  }

  if (mezo[3]=='egs'){
    if (mezo[1]=='jt')
      mibol='';
    if (mezo[1]=='falu')
      mibol='jt_'+mezo[2]+'_egs';
    if (mezo[1]=='var')
      mibol='falu_'+mezo[2]+'_egs';
    mit=mezo[1]+'_'+mezo[2]+'_egs';
  }

  if (mibol==''){
    ertek = $('#'+mezo[0]+'_'+mit).text();
    ertek ++;
    $('#'+mezo[0]+'_'+mit).text(ertek);
  }else{
    ertek=$('#'+mezo[0]+'_'+mibol).text();
    if(ertek>0){
      ertek --;
      $('#'+mezo[0]+'_'+mibol).text(ertek);
      
      ertek = $('#'+mezo[0]+'_'+mit).text();
      ertek ++;
      $('#'+mezo[0]+'_'+mit).text(ertek);
    }
  }
  frissit(mezo);
}
function minus(t_id){
  var mezo;
  var ertek;
  mezo = t_id.currentTarget.id.split('_');
  ertek = $('#'+mezo[0]+'_'+mezo[1]+'_'+mezo[2]+'_'+mezo[3]).text();
  if(ertek>0){
    ertek --;
    $('#'+mezo[0]+'_'+mezo[1]+'_'+mezo[2]+'_'+mezo[3]).text(ertek);
    if (mezo[3]=='bet'){
      ertek = $('#'+mezo[0]+'_'+mezo[1]+'_'+mezo[2]+'_egs').text();
      ertek++;
      $('#'+mezo[0]+'_'+mezo[1]+'_'+mezo[2]+'_egs').text(ertek);
    }
  }

  frissit(mezo);
}
function frissit(mezo){
  let termeny=0;
  let arany=0;

  // let jatekosok = ['kapitany','gyogyito','ersek','nador'];
  // let telepulesek = ['jt','falu','var'];
  // let termeles = ['norm','arany'];
  // let allapot = ['egs','bet'];

  // jatekosok.forEach((ja) => {
  //   console.log(ja);
  // });

  ertek = $('#'+mezo[0]+'_'+mezo[1]+'_'+mezo[2]+'_'+mezo[3]).text();
  for (i=0;i<telepulesek.length;i++){
    if(i<2)
      termeny += ($('#'+mezo[0]+'_'+telepulesek[i]+'_norm_egs').text())*telepulesek_szorzo[i];
    else
    arany += ($('#'+mezo[0]+'_'+telepulesek[i]+'_norm_egs').text())*telepulesek_szorzo[i];
      
    arany += ($('#'+mezo[0]+'_'+telepulesek[i]+'_arany_egs').text())*telepulesek_szorzo[i];
  };
  
  $('#'+mezo[0]+'_termeny').text(termeny);
  $('#'+mezo[0]+'_arany').text(arany);
}

// $('#defaultOpen').click();
document.getElementById('defaultOpen').click();
$('.plus').click(function (e) { 
  plus(e);
  
});

$('.minus').click(function (e) { 
  minus(e);
  
});

