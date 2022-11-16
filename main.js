//PARTES
  //base
document.getElementById('base').addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "visible";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });


//base branca
document.getElementById('whitebase').addEventListener('click', function(e){
  corselecionada = window.getComputedStyle(document.querySelector("#whitebase + label span")).backgroundColor;
  document.querySelectorAll(".base").forEach(v => v.style.fill = corselecionada);
  document.getElementById('CB').style.backgroundColor = corselecionada;
});

//base preta
document.getElementById('blackbase').addEventListener('click', function(e){
  corselecionada = window.getComputedStyle(document.querySelector("#blackbase + label span")).backgroundColor;
  document.querySelectorAll(".base").forEach(v => v.style.fill = corselecionada);
  document.getElementById('CB').style.backgroundColor = corselecionada;
});
//base azul
document.getElementById('bluebase').addEventListener('click', function(e){
  corselecionada = window.getComputedStyle(document.querySelector("#bluebase + label span")).backgroundColor;
  document.querySelectorAll(".base").forEach(v => v.style.fill = corselecionada);
  document.getElementById('CB').style.backgroundColor = corselecionada;
});    
//base vermelha
document.getElementById('redbase').addEventListener('click', function(e){
  corselecionada = window.getComputedStyle(document.querySelector("#redbase + label span")).backgroundColor;
  document.querySelectorAll(".base").forEach(v => v.style.fill = corselecionada);
  document.getElementById('CB').style.backgroundColor = corselecionada;
});  

document.getElementById('yellowbase').addEventListener('click', function(e){
  corselecionada = window.getComputedStyle(document.querySelector("#yellowbase + label span")).backgroundColor;
  document.querySelectorAll(".base").forEach(v => v.style.fill = corselecionada);
  document.getElementById('CB').style.backgroundColor = corselecionada;
});  
//base verde
document.getElementById('greenbase').addEventListener('click', function(e){
  corselecionada = window.getComputedStyle(document.querySelector("#greenbase + label span")).backgroundColor;
  document.querySelectorAll(".base").forEach(v => v.style.fill = corselecionada);
  document.getElementById('CB').style.backgroundColor = corselecionada;
}); 

document.getElementById('greenbase').addEventListener('click', function(e){
  corselecionada = window.getComputedStyle(document.querySelector("#greenbase + label span")).backgroundColor;
  document.querySelectorAll(".base").forEach(v => v.style.fill = corselecionada);
  document.getElementById('CB').style.backgroundColor = corselecionada;
});
document.getElementById('basebase1').addEventListener('click', function(e){
  corselecionada = window.getComputedStyle(document.querySelector("#basebase1 + label span")).backgroundColor;
  document.querySelectorAll(".base").forEach(v => v.style.fill = corselecionada);
  document.getElementById('CB').style.backgroundColor = corselecionada;
});
document.getElementById('basebase2').addEventListener('click', function(e){
  corselecionada = window.getComputedStyle(document.querySelector("#basebase2 + label span")).backgroundColor;
  document.querySelectorAll(".base").forEach(v => v.style.fill = corselecionada);
  document.getElementById('CB').style.backgroundColor = corselecionada;
});
document.getElementById('basebase3').addEventListener('click', function(e){
  corselecionada = window.getComputedStyle(document.querySelector("#basebase3 + label span")).backgroundColor;
  document.querySelectorAll(".base").forEach(v => v.style.fill = corselecionada);
  document.getElementById('CB').style.backgroundColor = corselecionada;
});
document.getElementById('basebase4').addEventListener('click', function(e){
  corselecionada = window.getComputedStyle(document.querySelector("#basebase4 + label span")).backgroundColor;
  document.querySelectorAll(".base").forEach(v => v.style.fill = corselecionada);
  document.getElementById('CB').style.backgroundColor = corselecionada;
});
document.getElementById('basebase5').addEventListener('click', function(e){
  corselecionada = window.getComputedStyle(document.querySelector("#basebase5 + label span")).backgroundColor;
  document.querySelectorAll(".base").forEach(v => v.style.fill = corselecionada);
  document.getElementById('CB').style.backgroundColor = corselecionada;
});



document.querySelector("#cordabase").addEventListener('change', ()=>{
  if(corselecionada == "rgb(0, 0, 0)"){
    document.querySelectorAll(".base.ab").forEach(v => v.style.stroke = "white");
    document.querySelectorAll(".basecostas").forEach(v => v.style.stroke = "white");
    document.querySelectorAll(".mangalonga").forEach(v => v.style.stroke = "white");
    document.querySelectorAll(".mangacurta").forEach(v => v.style.stroke = "white");
    document.querySelectorAll(".bordacarcela").forEach(v => v.style.stroke = "white");
    document.querySelectorAll(".tracobolso").forEach(v => v.style.fill = "white");
  }else{
    document.querySelectorAll(".base.ab").forEach(v => v.style.stroke = "black");
    document.querySelectorAll(".basecostas").forEach(v => v.style.stroke = "black");
    document.querySelectorAll(".mangalonga").forEach(v => v.style.stroke = "black");
    document.querySelectorAll(".mangacurta").forEach(v => v.style.stroke = "black");
    document.querySelectorAll(".bordacarcela").forEach(v => v.style.stroke = "black");
    document.querySelectorAll(".tracobolso").forEach(v => v.style.fill = "black");
  }
})


  //botoes
document.getElementById('botoes').addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel1').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "visible";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "visible";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "visible";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  document.getElementById('whitebase1').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#whitebase1 + label span")).backgroundColor;
    document.querySelectorAll(".carcela").forEach(v => v.style.fill = corselecionada);
    document.getElementById('BT').style.backgroundColor = corselecionada;
  });
  
  //carcela preta
  document.getElementById('blackbase1').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#blackbase1 + label span")).backgroundColor;
    document.querySelectorAll(".carcela").forEach(v => v.style.fill = corselecionada);
    document.getElementById('BT').style.backgroundColor = corselecionada;
  });
  //carcela azul
  document.getElementById('bluebase1').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#bluebase1 + label span")).backgroundColor;
    document.querySelectorAll(".carcela").forEach(v => v.style.fill = corselecionada);
    document.getElementById('BT').style.backgroundColor = corselecionada;
  });    
  //carcela vermelha
  document.getElementById('redbase1').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#redbase1 + label span")).backgroundColor;
    document.querySelectorAll(".carcela").forEach(v => v.style.fill = corselecionada);
    document.getElementById('BT').style.backgroundColor = corselecionada;
  });  
  
  document.getElementById('yellowbase1').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#yellowbase1 + label span")).backgroundColor;
    document.querySelectorAll(".carcela").forEach(v => v.style.fill = corselecionada);
    document.getElementById('BT').style.backgroundColor = corselecionada;
  });  
  //carcela verde
  document.getElementById('greenbase1').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#greenbase1 + label span")).backgroundColor;
    document.querySelectorAll(".carcela").forEach(v => v.style.fill = corselecionada);
    document.getElementById('BT').style.backgroundColor = corselecionada;
  }); 

document.getElementById('carcelacarcela1').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#carcelacarcela1 + label span")).backgroundColor;
    document.querySelectorAll(".carcela").forEach(v => v.style.fill = corselecionada);
    document.getElementById('BT').style.backgroundColor = corselecionada;
});
document.getElementById('carcelacarcela2').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#carcelacarcela2 + label span")).backgroundColor;
    document.querySelectorAll(".carcela").forEach(v => v.style.fill = corselecionada);
    document.getElementById('BT').style.backgroundColor = corselecionada;
});
document.getElementById('carcelacarcela3').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#carcelacarcela3 + label span")).backgroundColor;
    document.querySelectorAll(".carcela").forEach(v => v.style.fill = corselecionada);
    document.getElementById('BT').style.backgroundColor = corselecionada;
});
document.getElementById('carcelacarcela4').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#carcelacarcela4 + label span")).backgroundColor;
    document.querySelectorAll(".carcela").forEach(v => v.style.fill = corselecionada);
    document.getElementById('BT').style.backgroundColor = corselecionada;
});
document.getElementById('carcelacarcela5').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#carcelacarcela5 + label span")).backgroundColor;
    document.querySelectorAll(".carcela").forEach(v => v.style.fill = corselecionada);
    document.getElementById('CB').style.backgroundColor = corselecionada;
});



document.querySelector("#trocapala").addEventListener('change', ()=>{
  if(corselecionada == "rgb(0, 0, 0)"){
    document.querySelectorAll(".carcela").forEach(v => v.style.stroke = "white");
  }else{
    document.querySelectorAll(".carcela").forEach(v => v.style.stroke = "black");
}})


  //gola exterior
document.getElementById('gola1').addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel2').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "visible";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "visible";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "visible";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  document.getElementById('whitebase2').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#whitebase2 + label span")).backgroundColor;
    document.querySelectorAll(".gola").forEach(v => v.style.fill = corselecionada);
    document.getElementById('ge').style.backgroundColor = corselecionada;
  });
  
  //gola preta
  document.getElementById('blackbase2').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#blackbase2 + label span")).backgroundColor;
    document.querySelectorAll(".gola").forEach(v => v.style.fill = corselecionada);
    document.getElementById('ge').style.backgroundColor = corselecionada;
  });
  //gola azul
  document.getElementById('bluebase2').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#bluebase2 + label span")).backgroundColor;
    document.querySelectorAll(".gola").forEach(v => v.style.fill = corselecionada);
    document.getElementById('ge').style.backgroundColor = corselecionada;
  });    
  //gola vermelha
  document.getElementById('redbase2').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#redbase2 + label span")).backgroundColor;
    document.querySelectorAll(".gola").forEach(v => v.style.fill = corselecionada);
    document.getElementById('ge').style.backgroundColor = corselecionada;
  });  
  
  document.getElementById('yellowbase2').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#yellowbase2 + label span")).backgroundColor;
    document.querySelectorAll(".gola").forEach(v => v.style.fill = corselecionada);
    document.getElementById('ge').style.backgroundColor = corselecionada;
  });  
  //gola verde
  document.getElementById('greenbase2').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#greenbase2 + label span")).backgroundColor;
    document.querySelectorAll(".gola").forEach(v => v.style.fill = corselecionada);
    document.getElementById('ge').style.backgroundColor = corselecionada;
  }); 

document.getElementById('golagola1').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#golagola1 + label span")).backgroundColor;
    document.querySelectorAll(".gola").forEach(v => v.style.fill = corselecionada);
    document.getElementById('ge').style.backgroundColor = corselecionada;
});
document.getElementById('golagola2').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#golagola2 + label span")).backgroundColor;
    document.querySelectorAll(".gola").forEach(v => v.style.fill = corselecionada);
    document.getElementById('ge').style.backgroundColor = corselecionada;
});
document.getElementById('golagola3').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#golagola3 + label span")).backgroundColor;
    document.querySelectorAll(".gola").forEach(v => v.style.fill = corselecionada);
    document.getElementById('ge').style.backgroundColor = corselecionada;
});
document.getElementById('golagola4').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#golagola4 + label span")).backgroundColor;
    document.querySelectorAll(".gola").forEach(v => v.style.fill = corselecionada);
    document.getElementById('ge').style.backgroundColor = corselecionada;
});
document.getElementById('golagola5').addEventListener('click', function(e){
    corselecionada = window.getComputedStyle(document.querySelector("#golagola5 + label span")).backgroundColor;
    document.querySelectorAll(".gola").forEach(v => v.style.fill = corselecionada);
    document.getElementById('ge').style.backgroundColor = corselecionada;
});



document.querySelector("#cordagolacarcela").addEventListener('change', ()=>{
  if(corselecionada == "rgb(0, 0, 0)"){
    document.querySelectorAll(".gola").forEach(v => v.style.stroke = "white");
  }else{
    document.querySelectorAll(".gola").forEach(v => v.style.stroke = "black");
}})


  //gola interior
document.getElementById('gola2').addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel3').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "visible";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "visible";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "visible";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //Gola interior branco
  document.getElementById('whitebase3').addEventListener('click', function(e){
    document.querySelectorAll(".faixacolorida").forEach(v => v.style.display = "none");
    document.querySelectorAll(".faixabranca").forEach(v => v.style.display = "none");
    document.getElementById('gi').style.backgroundColor = "#fff";
  });
  //Gola interior preta
document.getElementById('blackbase3').addEventListener('click', function(e){
  document.querySelectorAll(".faixacolorida").forEach(v => v.style.display = "block");
  document.querySelectorAll(".faixabranca").forEach(v => v.style.display = "block");
  document.querySelectorAll(".faixacolorida").forEach(v => v.style.fill = "#DD0707");
  document.getElementById('gi').style.backgroundColor = "#DD0707";
  });
  //Gola interior azul
document.getElementById('bluebase3').addEventListener('click', function(e){
  document.querySelectorAll(".faixacolorida").forEach(v => v.style.display = "block");
  document.querySelectorAll(".faixabranca").forEach(v => v.style.display = "block");
  document.querySelectorAll(".faixacolorida").forEach(v => v.style.fill = "#C0FF00");
  document.getElementById('gi').style.backgroundColor = "#C0FF00";
  });    

document.getElementById('redbase3').addEventListener('click', function(e){
  document.querySelectorAll(".faixacolorida").forEach(v => v.style.display = "block");
  document.querySelectorAll(".faixabranca").forEach(v => v.style.display = "block");
  document.querySelectorAll(".faixacolorida").forEach(v => v.style.fill = "#E7E8E9");
  document.getElementById('gi').style.backgroundColor = "#E7E8E9";
  });    

document.getElementById('yellowbase3').addEventListener('click', function(e){
  document.querySelectorAll(".faixacolorida").forEach(v => v.style.display = "none");
  document.querySelectorAll(".faixabranca").forEach(v => v.style.display = "block");
  document.getElementById('gi').style.backgroundColor = "#E7E8E9";
  });    

    //punho
document.getElementById('punho').addEventListener('click', function(e){
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "visible";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";
  });

document.getElementById('whitebase4').addEventListener('click', function(e){
  document.querySelectorAll(".punhocanhao").forEach(v => v.style.display = "block");
  document.querySelectorAll(".punhoregulagem").forEach(v => v.style.display = "none");
  document.querySelectorAll(".punhocanhaocarcela").forEach(v => v.style.display = "none");
  document.querySelectorAll(".punhoelastico").forEach(v => v.style.display = "none");
  });

  document.getElementById('blackbase4').addEventListener('click', function(e){
    document.querySelectorAll(".punhocanhao").forEach(v => v.style.display = "none");
    document.querySelectorAll(".punhoregulagem").forEach(v => v.style.display = "block");
    document.querySelectorAll(".punhocanhaocarcela").forEach(v => v.style.display = "none");
    document.querySelectorAll(".punhoelastico").forEach(v => v.style.display = "none");
  });

document.getElementById('bluebase4').addEventListener('click', function(e){
  document.querySelectorAll(".punhocanhao").forEach(v => v.style.display = "block");
  document.querySelectorAll(".punhoregulagem").forEach(v => v.style.display = "none");
  document.querySelectorAll(".punhocanhaocarcela").forEach(v => v.style.display = "block");
  document.querySelectorAll(".punhoelastico").forEach(v => v.style.display = "none");
  });    

  document.getElementById('redbase4').addEventListener('click', function(e){
    document.querySelectorAll(".punhocanhao").forEach(v => v.style.display = "none");
  document.querySelectorAll(".punhoregulagem").forEach(v => v.style.display = "none");
  document.querySelectorAll(".punhocanhaocarcela").forEach(v => v.style.display = "none");
  document.querySelectorAll(".punhoelastico").forEach(v => v.style.display = "block");
  });  



   //vistaE
   const btnvistaE = document.getElementById('vista');
  btnvistaE.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel4').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "visible";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "visible";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "visible";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //vistaE branco
  const bntcorvistaEbranco = document.getElementById('whitebase5');
  bntcorvistaEbranco.addEventListener('click', function(e){
    document.querySelectorAll(".bolso01").forEach(v => v.style.display = "none");
    document.querySelectorAll(".bolso02").forEach(v => v.style.display = "none");
    document.querySelectorAll(".bolso03").forEach(v => v.style.display = "none");
    document.querySelectorAll(".bolso04").forEach(v => v.style.display = "none");
    document.getElementById('VE').style.backgroundColor = "#fff";
  });

  //vistaE preta
  const btncorvistaEpreto = document.getElementById('blackbase5');
  btncorvistaEpreto.addEventListener('click', function(e){
    document.querySelectorAll(".bolso01").forEach(v => v.style.display = "block");
    document.querySelectorAll(".bolso02").forEach(v => v.style.display = "none");
    document.querySelectorAll(".bolso03").forEach(v => v.style.display = "none");
    document.querySelectorAll(".bolso04").forEach(v => v.style.display = "none");
    document.getElementById('VE').style.backgroundColor = "#fff";
  });
  //vistaE azul
  const btncorvistaEazul = document.getElementById('bluebase5');
  btncorvistaEazul.addEventListener('click', function(e){
    document.querySelectorAll(".bolso01").forEach(v => v.style.display = "block");
    document.querySelectorAll(".bolso02").forEach(v => v.style.display = "block");
    document.querySelectorAll(".bolso03").forEach(v => v.style.display = "none");
    document.querySelectorAll(".bolso04").forEach(v => v.style.display = "none");
    document.getElementById('VE').style.backgroundColor = "#fff";
  });    
  //vistaE vermelha
  const btncorvistaEvermelha = document.getElementById('redbase5');
  btncorvistaEvermelha.addEventListener('click', function(e){
    document.querySelectorAll(".bolso01").forEach(v => v.style.display = "block");
    document.querySelectorAll(".bolso02").forEach(v => v.style.display = "block");
    document.querySelectorAll(".bolso03").forEach(v => v.style.display = "block");
    document.querySelectorAll(".bolso04").forEach(v => v.style.display = "none");
    document.getElementById('VE').style.backgroundColor = "#fff";
  });  
  //vistaE amarela
  const btncorvistaEamarela = document.getElementById('yellowbase5');
  btncorvistaEamarela.addEventListener('click', function(e){
    document.querySelectorAll(".bolso01").forEach(v => v.style.display = "block");
    document.querySelectorAll(".bolso02").forEach(v => v.style.display = "block");
    document.querySelectorAll(".bolso03").forEach(v => v.style.display = "block");
    document.querySelectorAll(".bolso04").forEach(v => v.style.display = "block");
    document.getElementById('VE').style.backgroundColor = "#fff";
  });  




  //vistaD
  const btnvistaD = document.getElementById('vista1');
  btnvistaD.addEventListener('click', function(e){
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "visible";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";
  });
  //vistaD branco
  const bntcorvistaDbranco = document.getElementById('whitebase6');
  bntcorvistaDbranco.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#fff";
    document.getElementById('VD').style.backgroundColor = "#fff";
  });

  //vistaD preta
  const btncorvistaDpreto = document.getElementById('blackbase6');
  btncorvistaDpreto.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#000";
    document.getElementById('VD').style.backgroundColor = "#000";
  });
  //vistaD azul
  const btncorvistaDazul = document.getElementById('bluebase6');
  btncorvistaDazul.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "blue";
    document.getElementById('VD').style.backgroundColor = "blue";
  });    
  //vistaD vermelha
  const btncorvistaDvermelha = document.getElementById('redbase6');
  btncorvistaDvermelha.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "red";
    document.getElementById('VD').style.backgroundColor = "red";
  });  
  //vistaD amarela
  const btncorvistaDamarela = document.getElementById('yellowbase6');
  btncorvistaDamarela.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "yellow";
    document.getElementById('VD').style.backgroundColor = "yellow";
  });  
  //vistaD verde
  const btncorvistaDverde = document.getElementById('greenbase6');
  btncorvistaDverde.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "green";
    document.getElementById('VD').style.backgroundColor = "green";
  });



  //Bolso Faixa
  const btnbolsoF = document.getElementById('bolsobtn');
  btnbolsoF.addEventListener('click', function(e){
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "visible";
    document.getElementById('coresBB').style.visibility = "hidden";
  });
  //Bolso Faixa branco
  const bntcorbolsoFbranco = document.getElementById('whitebase7');
  bntcorbolsoFbranco.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#fff";
    document.getElementById('BSF').style.backgroundColor = "#fff";
  });

  //Bolso Faixa preta
  const btncorbolsoFpreto = document.getElementById('blackbase7');
  btncorbolsoFpreto.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#000";
    document.getElementById('BSF').style.backgroundColor = "#000";
  });
  //Bolso Faixa azul
  const btncorbolsoFazul = document.getElementById('bluebase7');
  btncorbolsoFazul.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "blue";
    document.getElementById('BSF').style.backgroundColor = "blue";
  });    
  //Bolso Faixa vermelha
  const btncorbolsoFvermelha = document.getElementById('redbase7');
  btncorbolsoFvermelha.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "red";
    document.getElementById('BSF').style.backgroundColor = "red";
  });  
  //Bolso Faixa amarela
  const btncorbolsoFamarela = document.getElementById('yellowbase7');
  btncorbolsoFamarela.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "yellow";
    document.getElementById('BSF').style.backgroundColor = "yellow";
  });  
  //Bolso Faixa verde
  const btncorbolsoFverde = document.getElementById('greenbase7');
  btncorbolsoFverde.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "green";
    document.getElementById('BSF').style.backgroundColor = "green";
  });



  //Bolso Faixa
  const btnbolsoB = document.getElementById('bolso1');
  btnbolsoB.addEventListener('click', function(e){
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "visible";
  });
  //Bolso Faixa branco
  const bntcorbolsoBbranco = document.getElementById('whitebase8');
  bntcorbolsoBbranco.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#fff";
    document.getElementById('BB').style.backgroundColor = "#fff";
  });

  //Bolso Faixa preta
  const btncorbolsoBpreto = document.getElementById('blackbase8');
  btncorbolsoBpreto.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#000";
    document.getElementById('BB').style.backgroundColor = "#000";
  });
  //Bolso Faixa azul
  const btncorbolsoBazul = document.getElementById('bluebase8');
  btncorbolsoBazul.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "blue";
    document.getElementById('BB').style.backgroundColor = "blue";
  });    
  //Bolso Faixa vermelha
  const btncorbolsoBvermelha = document.getElementById('redbase8');
  btncorbolsoBvermelha.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "red";
    document.getElementById('BB').style.backgroundColor = "red";
  });  
  //Bolso Faixa amarela
  const btncorbolsoBamarela = document.getElementById('yellowbase8');
  btncorbolsoBamarela.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "yellow";
    document.getElementById('BB').style.backgroundColor = "yellow";
  });  
  //Bolso Faixa verde
  const btncorbolsoBverde = document.getElementById('greenbase8');
  btncorbolsoBverde.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "green";
    document.getElementById('BB').style.backgroundColor = "green";
  });


  //bolso on/off
 /* const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById('bolsofrente').style.visibility = "visible";
      document.getElementById('bolso12').style.visibility = "visible";
      document.getElementById('bolsofaixa').style.visibility = "visible";
    }else {
      document.getElementById('bolsofrente').style.visibility = "hidden";
      document.getElementById('bolso12').style.visibility = "hidden";
      document.getElementById('bolsofaixa').style.visibility = "hidden";
    }
  });*/
  

  document.getElementById('switch-shadow3').addEventListener('click', function(e){
    if(document.getElementById('switch-shadow3').checked){
      document.querySelectorAll(".botoes1").forEach(v => v.style.display = "none")
    }else {
      document.querySelectorAll(".botoes1").forEach(v => v.style.display = "block");
    }
  });

  $('#trocamodelo').on('change', function() {
    if($('input[name=toggle2]:checked').val() == "true"){
      document.querySelectorAll(".modelofechado").forEach(v => v.style.display = "none");
      document.querySelectorAll(".modeloaberto").forEach(v => v.style.display = "block");
      document.querySelectorAll(".gola01").forEach(v => v.style.display = "none");
      document.querySelectorAll(".gola02").forEach(v => v.style.display = "none");
      document.querySelectorAll(".gola03").forEach(v => v.style.display = "block");
      document.querySelectorAll(".gola04").forEach(v => v.style.display = "block");
    }else{
      document.querySelectorAll(".modelofechado").forEach(v => v.style.display = "block");
      document.querySelectorAll(".modeloaberto").forEach(v => v.style.display = "none");
      document.querySelectorAll(".gola01").forEach(v => v.style.display = "block");
      document.querySelectorAll(".gola02").forEach(v => v.style.display = "block");
      document.querySelectorAll(".gola03").forEach(v => v.style.display = "none");
      document.querySelectorAll(".gola04").forEach(v => v.style.display = "none");
    }
  });

  $('#trocabolso').on('change', function() {
    if($('input[name=toggle1]:checked').val() == "true"){
      document.querySelectorAll(".fechado").forEach(v => v.style.display = "none")
      document.querySelectorAll(".aberto").forEach(v => v.style.display = "block");
    }else{
      document.querySelectorAll(".fechado").forEach(v => v.style.display = "block");
      document.querySelectorAll(".aberto").forEach(v => v.style.display = "none");
    }
  });

  $('#trocamanga').on('change', function() {
    if($('input[name=toggle]:checked').val() == "true"){
      document.querySelectorAll(".mangalonga").forEach(v => v.style.display = "none")
      document.querySelectorAll(".mangacurta").forEach(v => v.style.display = "block");
    }else{
      document.querySelectorAll(".mangalonga").forEach(v => v.style.display = "block");
      document.querySelectorAll(".mangacurta").forEach(v => v.style.display = "none");
    }
  });

  document.getElementById('gola01').addEventListener('click', (e)=>{
    document.querySelector(".golapolo").style.display = "block";
    document.querySelector(".golaitaliana").style.display = "none";
  });
  document.getElementById('gola02').addEventListener('click', (e)=>{
    document.querySelector(".golapolo").style.display = "none";
    document.querySelector(".golaitaliana").style.display = "block";

  });
  document.getElementById('gola03').addEventListener('click', (e)=>{
    document.querySelector(".golapadre").style.display = "block";
    document.querySelector(".golapololonga").style.display = "none";
  });
  document.getElementById('gola04').addEventListener('click', (e)=>{
    document.querySelector(".golapadre").style.display = "none";
    document.querySelector(".golapololonga").style.display = "block";
  });

  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.querySelector('.modelo')).then(function(blob){
      window.saveAs(blob, "Uniformizar.png");
      
    })
  })
 });

 //upload
 var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

  var canvas = new fabric.Canvas('list');
  let uploader = document.getElementById("uploader");
  uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
  var image = new Image();
  image.src = e.target.result;
  image.onload = function() {
    var img = new fabric.Image(image);
    img.set({
      left: 100,
      top: 60
    });
    img.scaleToWidth(200);
    canvas.add(img).setActiveObject(img).renderAll();
    }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
  document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});


function deleteObject(eventData, transform) {
      var target = transform.target;
      var canvas = target.canvas;
          canvas.remove(target);
      canvas.requestRenderAll();
  };

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(imga, -size/2, -size/2, size, size);
  ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.querySelector(".frente").style.display = "none";
      document.querySelector(".costas").style.display = "block";
  }else{
    document.querySelector(".frente").style.display = "block";
    document.querySelector(".costas").style.display = "none";
  }
});
 

document.getElementById('botaocor').addEventListener('click', function(e){
  console.log('teste')
});

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorbotoes').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "visible";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "block";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorgola').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "visible";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "block";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorvista').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "visible";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorcarcela').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "block";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
