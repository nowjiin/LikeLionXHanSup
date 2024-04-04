window.onload = function() {
    var imageURLs =
    [
     " ./assets/jeongneung_markerInfos_img/bok2oldchiken.jpg",
      "./assets/jeongneung_markerInfos_img/cookieforest.jpg",    
      "./assets/jeongneung_markerInfos_img/donbuza.jpg",
      "./assets/jeongneung_markerInfos_img/esulro.jpg",
      "./assets/jeongneung_markerInfos_img/goldcodari.jpg",    
      "./assets/jeongneung_markerInfos_img/groompasta.jpg",    
      "./assets/jeongneung_markerInfos_img/happy0in.jpg",
      "./assets/jeongneung_markerInfos_img/hopepocha.jpg",        
      "./assets/jeongneung_markerInfos_img/humanchikenggichi.jpg",
      "./assets/jeongneung_markerInfos_img/janggogi.jpg",
      "./assets/jeongneung_markerInfos_img/jeongneunggalbi.jpg", 
      "./assets/jeongneung_markerInfos_img/jeongneungzzuggume.jpg",
      "./assets/jeongneung_markerInfos_img/jini.jpg",
      "./assets/jeongneung_markerInfos_img/jueunson.jpg",
      "./assets/jeongneung_markerInfos_img/kaimo.jpg",
      "./assets/jeongneung_markerInfos_img/mantasushi.jpg",
      "./assets/jeongneung_markerInfos_img/miramcos.jpg",
      "./assets/jeongneung_markerInfos_img/miso.jpg",
      "./assets/jeongneung_markerInfos_img/pizzaschool.jpg",
      "./assets/jeongneung_markerInfos_img/rapleraple.jpg",
      "./assets/jeongneung_markerInfos_img/rarakimbab.jpg",
      "./assets/jeongneung_markerInfos_img/sul2rang.jpg",
      "./assets/jeongneung_markerInfos_img/sumakarong.jpg",
      "./assets/jeongneung_markerInfos_img/sunnong.jpg",
      "./assets/jeongneung_markerInfos_img/taepeungyang.jpg",
      "./assets/jeongneung_markerInfos_img/thedual.jpg",
      "./assets/jeongneung_markerInfos_img/ttgaejil.jpg",
      "./assets/jeongneung_markerInfos_img/yangsanbak.jpg",
      "./assets/jeongneung_markerInfos_img/zzangsi.jpg",
      "./assets/market_markerInfos_img/badasanghup.jpg",
      "./assets/market_markerInfos_img/bakgrandma.jpg",
      "./assets/market_markerInfos_img/bluesaetak.jpg",
      "./assets/market_markerInfos_img/bonganuroongzi.jpg",
      "./assets/market_markerInfos_img/bongha.jpg",
      "./assets/market_markerInfos_img/chosunbutumak.jpg",
      "./assets/market_markerInfos_img/cookieforest.jpg",
      "./assets/market_markerInfos_img/dauga.jpg",
      "./assets/market_markerInfos_img/deliciusbbq.jpg",
      "./assets/market_markerInfos_img/dongsungkamja.jpg",
      "./assets/market_markerInfos_img/dorimanfish.jpg",
      "./assets/market_markerInfos_img/eunhaekamja.jpg",
      "./assets/market_markerInfos_img/gapeung.jpg",
      "./assets/market_markerInfos_img/ggabaegi.jpg",
      "./assets/market_markerInfos_img/gil2maratang.jpg",
      "./assets/market_markerInfos_img/gogigumtu.jpg",
      "./assets/market_markerInfos_img/gogosanghae.jpg",
      "./assets/market_markerInfos_img/gohang.jpg",
      "./assets/market_markerInfos_img/hanbangjok.jpg",
      "./assets/market_markerInfos_img/illmezip.jpg",
      "./assets/market_markerInfos_img/jangtu.jpg",
      "./assets/market_markerInfos_img/jeongneungzzuggume.jpg",
      "./assets/market_markerInfos_img/jongro.jpg",
      "./assets/market_markerInfos_img/lifesoolzip.jpg",
      "./assets/market_markerInfos_img/mansingyang.jpg",
      "./assets/market_markerInfos_img/mukguri.jpg",
      "./assets/market_markerInfos_img/ourgopchang.jpg",
      "./assets/market_markerInfos_img/oursaetak.jpg",
      "./assets/market_markerInfos_img/pandatanghuru.jpg",
      "./assets/market_markerInfos_img/samdaegogi.jpg",
      "./assets/market_markerInfos_img/seoulbulgogi.jpg",
      "./assets/market_markerInfos_img/sigang.jpg",
      "./assets/market_markerInfos_img/slowcafe.jpg",
      "./assets/market_markerInfos_img/sun2kimbab.jpg",
      "./assets/market_markerInfos_img/theonechicken.jpg",
      "./assets/market_markerInfos_img/together.jpg",
      "./assets/market_markerInfos_img/unninae.jpg",
      "./assets/market_markerInfos_img/woojonghaejang.jpg",
      "./assets/market_markerInfos_img/yogerpresso.jpg",
      "./assets/sku_markerInfos_img/default.jpg",
      "./assets/sku_markerInfos_img/ebari.jpg",
      "./assets/sku_markerInfos_img/grandmadarak.jpg",
      "./assets/sku_markerInfos_img/hola.jpg",
      "./assets/sku_markerInfos_img/jokbal.jpg",
      "./assets/sku_markerInfos_img/kmaratang.jpg",
      "./assets/sku_markerInfos_img/mkpocha.jpg",
      "./assets/sku_markerInfos_img/mygreek.jpg",
      "./assets/sku_markerInfos_img/piglove.jpg",
      "./assets/sku_markerInfos_img/skpocha.jpg",
      "./assets/sku_markerInfos_img/songgangru.jpg",
      "./assets/sku_markerInfos_img/wawapocha.jpg",
      "./assets/sku_markerInfos_img/tongtongpig.jpg",
      "./assets/sswu_markerInfos_img/choi.jpg",
      "./assets/sswu_markerInfos_img/choidaepae.jpg",
      "./assets/sswu_markerInfos_img/choi_yangsik.jpg",
      "./assets/sswu_markerInfos_img/hero.jpg",
      "./assets/sswu_markerInfos_img/iasi.jpg",
      "./assets/sswu_markerInfos_img/ilu.jpg",
      "./assets/sswu_markerInfos_img/kangkumok.jpg",
      "./assets/sswu_markerInfos_img/kimtaewan.jpg",
      "./assets/sswu_markerInfos_img/lalanoodle.jpg",
      "./assets/sswu_markerInfos_img/miu.jpg",
      "./assets/sswu_markerInfos_img/rainbowbeer.jpg",
      "./assets/sswu_markerInfos_img/sabukgil.jpg",
      "./assets/sswu_markerInfos_img/sukhan.jpg",
      "./assets/sswu_markerInfos_img/sukhon.jpg",
      "./assets/sswu_markerInfos_img/vistro.jpg",
      "./assets/sswu_markerInfos_img/witchkitchen.jpg"
  
    ];
  
    function preloadImages(imageURLs) {
      for (var i = 0; i < imageURLs.length; i++) {
        var img = new Image();
        img.src = imageURLs[i];
      }
    }
    
    preloadImages(imageURLs);
  }