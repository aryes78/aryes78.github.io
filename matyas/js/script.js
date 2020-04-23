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
    if (mezo[1]=='jt'){
      if (mezo[2]=='arany')
        mibol='jt_norm_egs';
      else
        mibol='';
    }
    if (mezo[1]=='falu'){
      if (mezo[2]=='arany')
        mibol='falu_norm_egs';
      else
        mibol='jt_'+mezo[2]+'_egs';
    }
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

  for (i=0;i<telepulesek.length;i++){
    if(i<2)
      termeny += ($('#'+mezo[0]+'_'+telepulesek[i]+'_norm_egs').text())*telepulesek_szorzo[i];
    else
    arany += ($('#'+mezo[0]+'_'+telepulesek[i]+'_norm_egs').text())*telepulesek_szorzo[i];
      
    arany += ($('#'+mezo[0]+'_'+telepulesek[i]+'_arany_egs').text())*telepulesek_szorzo[i];
  };
  
  $('#'+mezo[0]+'_termeny').text(termeny);
  $('#'+mezo[0]+'_arany').text(arany);
  kiment();
}
function kiment(){
  var adatok='[';

  for (j=0;j<jatekosok.length;j++){
    adatok +='[';
    for (t=0;t<telepulesek.length;t++){
      adatok +='[';
      for (te=0;te<termeles.length;te++){
        adatok +='[';
        for (a=0;a<allapot.length;a++){
          adatok +='[';
          adatok += $('#'+jatekosok[j]+'_'+telepulesek[t]+'_'+termeles[te]+'_'+allapot[a]).text();
          adatok +='],';
        }
        adatok=adatok.substring(0, adatok.length - 1); 
        adatok +='],';
      }
      
      adatok=adatok.substring(0, adatok.length - 1); 
      adatok +='],';
    }
    adatok=adatok.substring(0, adatok.length - 1); 
    adatok +='],';
  }
  
  adatok=adatok.substring(0, adatok.length - 1); 
  adatok+=']';

  // console.log( adatok);
  
  //console.log(JSON.parse( adatok));
  localStorage.matyas_adatok = adatok;
}
function betolt(){
  var adatok = JSON.parse(localStorage.matyas_adatok);

  for (j=0;j<jatekosok.length;j++){
    for (t=0;t<telepulesek.length;t++){
      for (te=0;te<termeles.length;te++){
        for (a=0;a<allapot.length;a++){
          $('#'+jatekosok[j]+'_'+telepulesek[t]+'_'+termeles[te]+'_'+allapot[a]).text(adatok[j][t][te][a] );
        }
      }
    }
  }
}

var r = confirm("Folytatod az előző játékot?");
if (r == true) {
  betolt();
} 


document.getElementById('defaultOpen').click();
$('.plus').click(function (e) { 
  plus(e);
  
});

$('.minus').click(function (e) { 
  minus(e);
  
});

