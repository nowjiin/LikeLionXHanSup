document.addEventListener("DOMContentLoaded", function() {
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.598550, 127.015065),
        zoom: 14
    });

      //var로 식당별 위,경도 설정
    var 
        all = new naver.maps.LatLng(37.598550, 127.015065),
        skuniv = new naver.maps.LatLng(37.611087, 127.014065),
        gilum = new naver.maps.LatLng(37.604389, 127.025590),
        reset = new naver.maps.LatLng(37.60700258639104, 126.95625001298839),
        sunshinuniv = new naver.maps.LatLng(37.592698, 127.016554),
        jeongneungmarket = new naver.maps.LatLng(37.608643, 127.009053),
        // 여기 부터 음식점
        // 학교 앞 상권
        kmaratang = new naver.maps.LatLng(37.6115258,127.0136753),
        mkpocha = new naver.maps.LatLng(37.6105983,127.01427),
        tongtongpig = new naver.maps.LatLng(37.6104824 ,127.0143755),
        hola = new naver.maps.LatLng(37.6104563 ,127.0151146),
        wawapocha = new naver.maps.LatLng(37.6117386 ,127.0131451),
        mygreek = new naver.maps.LatLng(37.610395, 127.014684),
        grandmadarak = new naver.maps.LatLng(37.610447, 127.014368),
        piglove = new naver.maps.LatLng(37.6103857, 127.014516),
        songgangru = new naver.maps.LatLng(37.6111966, 127.0136037);
        skpocha = new naver.maps.LatLng(37.610268, 127.01456),
        ebari = new naver.maps.LatLng(37.612023, 127.013426);
        
        // 정릉골 상권
        donbuza = new naver.maps.LatLng(37.610419,127.009644),
        jueunson = new naver.maps.LatLng(37.613675, 127.009906),
        rapleraple = new naver.maps.LatLng(37.613652, 127.009983),
        yangsanbak = new naver.maps.LatLng(37.6136407, 127.0100206),
        taepeungyang = new naver.maps.LatLng(37.613259, 127.01039),
        zzangsi = new naver.maps.LatLng(37.612993, 127.010401),
        sumakarong = new naver.maps.LatLng(37.612963, 127.010374),
        esulro = new naver.maps.LatLng(37.612561, 127.010126),
        jini = new naver.maps.LatLng(37.612535, 127.009847),
        miso = new naver.maps.LatLng(37.61236, 127.009742),
        mantasushi = new naver.maps.LatLng(37.612198, 127.00962),
        thedual = new naver.maps.LatLng(37.6120971, 127.0095129),
        groompasta = new naver.maps.LatLng(37.6120971, 127.0095129),
        ttgaejil = new naver.maps.LatLng(37.611876, 127.009653),
        jeongneunggalbi = new naver.maps.LatLng(37.6117827, 127.0095842),
        bok2oldchiken = new naver.maps.LatLng(37.6120971, 127.0095129),
        humanchikenggichi = new naver.maps.LatLng(37.61166, 127.009291),
        onebilliard = new naver.maps.LatLng(37.611584, 127.009499),
        goldcodari = new naver.maps.LatLng(37.611584, 127.009499),
        sul2rang = new naver.maps.LatLng(37.611227, 127.009353),
        pizzaschool = new naver.maps.LatLng(37.611337, 127.009091),
        happy0in = new naver.maps.LatLng(37.611345, 127.009041),
        miramcos = new naver.maps.LatLng(37.611226, 127.008931),
        hopepocha = new naver.maps.LatLng(37.61118, 127.008853),
        sunnong = new naver.maps.LatLng(37.611124, 127.008897),
        janggogi = new naver.maps.LatLng(37.611059, 127.008946),
    

        // 성신여대 상권
        iasi = new naver.maps.LatLng(37.5912475, 127.0177866),
        witchkitchen = new naver.maps.LatLng(37.5925366, 127.0176514),
        kangkumok = new naver.maps.LatLng(37.5917114, 127.0170225),
        kimtaewan = new naver.maps.LatLng(37.591136, 127.0166329),
        choidaepae = new naver.maps.LatLng(37.5920665, 127.0170747),
        vistro = new naver.maps.LatLng(37.5918422, 127.0179869),
        lalanoodle = new naver.maps.LatLng(37.5908858, 127.0196889),
        sukhan = new naver.maps.LatLng(37.5915536, 127.0168843),
        miu = new naver.maps.LatLng(37.5894858, 127.0190102),
        choi = new naver.maps.LatLng(37.592279, 127.0179879),
        rainbowbeer = new naver.maps.LatLng(37.591758, 127.017576),
        heroboardgame = new naver.maps.LatLng(37.590872, 127.018815),
        ilu = new naver.maps.LatLng(37.5917375, 127.0171492),
    
        //버튼 클릭 이벤트 처리
        $("#to-all").css({
            backgroundColor: '#ff4d26',
            borderColor: 'transparent',
            color: '#ffffff'
        });
        $("#to-all").on("click", function(e) {
            e.preventDefault();
            map.setZoom(14, true);
            map.panTo(all);
        })
        $("#to-skuniv").on("click", function(e) {
            e.preventDefault();
            map.setZoom(17, true);
            map.panTo(skuniv);
        })
        $("#to-gilum").on("click", function(e) {
            e.preventDefault();
            map.panTo(gilum);
        })
        $("#to-jeongneungmarket").on("click", function(e) {
            e.preventDefault();
            map.panTo(jeongneungmarket);
        })
        $("#to-sunshinuniv").on("click", function(e) {
            e.preventDefault();
            map.setZoom(16, true);
            map.panTo(sunshinuniv);
        })
        $("#to-20").on("click", function(e) {
            e.preventDefault();
            map.setZoom(20, true);
        });
        $("#reset").on("click", function(e) {
            e.preventDefault();
            map.setZoom(7, true);
            map.setCenter(37.60700258639104, 126.95625001298839);
        });
    //성신여대 polyline
    var polyline = new naver.maps.Polyline({
        map: map,
        path: [
            new naver.maps.LatLng(37.588011, 127.017786),
            new naver.maps.LatLng(37.593792, 127.011656),
            new naver.maps.LatLng(37.595507, 127.017621),
            new naver.maps.LatLng(37.593781, 127.020344),
            new naver.maps.LatLng(37.589483, 127.019808),
            new naver.maps.LatLng(37.588011, 127.017786)
        ]
    });
    //보국문 polyline
    var polyline = new naver.maps.Polyline({
        map: map,
        path: [
            new naver.maps.LatLng(37.614883, 127.011667), //신한은행(우체국)
            new naver.maps.LatLng(37.612010, 127.011537),
            new naver.maps.LatLng(37.611710, 127.011587),
            new naver.maps.LatLng(37.609816, 127.010387),
            new naver.maps.LatLng(37.609356, 127.007737), //
            new naver.maps.LatLng(37.613301, 127.007002), //정릉4동 주민센터
            new naver.maps.LatLng(37.614883, 127.011667)  //신한은행(우체국)
        ]
    });
    //학교앞 상권 polyline
    var polyline = new naver.maps.Polyline({
        map: map,
        path: [
            new naver.maps.LatLng(37.612369, 127.013418), // 연꽃 어린이집(polyline시작)
            new naver.maps.LatLng(37.611811, 127.015123), // 아파트쪽 두번째선
            new naver.maps.LatLng(37.610224, 127.015986), // 밑 세번째선
            new naver.maps.LatLng(37.609877, 127.014903), // 네번째
            new naver.maps.LatLng(37.609941, 127.014361), // 다섯번째
            new naver.maps.LatLng(37.610570, 127.013985), // 5번째
            new naver.maps.LatLng(37.610947, 127.013135), // 7번째
            new naver.maps.LatLng(37.611658, 127.012345), // 8번째
            new naver.maps.LatLng(37.612369, 127.013418)  // 연꽃 어린이집(polyline시작)
        ]
    });
    
    //마커 marker
    var HOME_PATH = window.HOME_PATH || '.';
    var position = [
        skuniv, // 북악
        gilum,
        sunshinuniv, //성신여대
        jeongneungmarket, //정릉시장
        // new naver.maps.LatLng(latitude, longitude),
        // ...
    ];
    var sku_position = [
        //서경대 앞 음식점 목록
        kmaratang, //경성 마라탕
        mkpocha, //민규형 포차
        tongtongpig, //통통 돼지
        hola, //올라
        wawapocha, //와와닭발
        mygreek, //마이그릭
        grandmadarak, //할머니 다락방
        piglove, //퇘사랑
        songgangru, // 송강루
        skpocha, //서경포차
        ebari, //이 바리 꼴로리
    ];
    var jeongneung_position = [
        donbuza, //정릉돈부자
        jueunson, //주은이네손맛
        rapleraple, //라플라플
        yangsanbak, //양산박
        taepeungyang, //태평양수산
        zzangsi, //짱시 스낵
        sumakarong, //수마카롱
        esulro, //이슬로
        jini, //지니
        miso, //미소농수산물
        mantasushi, //만타 스시
        thedual, //더듀얼로스터즈 밑에랑 장소가 똑같음..
        groompasta, //구름파스타
        ttgaejil, //뜨개질방
        jeongneunggalbi, //정릉갈비
        bok2oldchiken, //복이 옛날통닭
        humanchikenggichi, //인류닭꼬치
        onebilliard, //원당구장
        goldcodari, //황금코다리 정릉점
        sul2rang, //술이랑
        pizzaschool, //피자스쿨 정릉점
        happy0in, //해피공인중개사무소
        miramcos, //미람코스메틱
        hopepocha, //보국문 호프포차
        sunnong, //태양농산물
        janggogi, //장고기
    ];
    var sswu_position = [
        iasi, //이야시
        witchkitchen, //마녀주방
        kangkumok, //강금옥
        kimtaewan, //김태완스시
        choidaepae, //최대패
        vistro, //비스트로
        lalanoodle, //라라면가
        sukhan, //서
        miu, //미우
        choi, //최씨 양식?
        rainbowbeer, //무지개맥주
        heroboardgame, //히어로 보드게임
        ilu,//일루
    ];
    // 각 마커에 대한 정보를 정의합니다.
    var sku_marker = [
        {
        position: skuniv,
        content: '<h3>서경대학교</h3>\
            <div>서경대 정보</div>'
        }
    ];
    var sswu_marker = [
        {
            position: sunshinuniv,
            content: '<h3>성신여대</h3>\
                <div>성신여대 정보</div>'
        }
    ];
    var etc_marker = [
        {
        position: gilum,
        content: '<h3>길음역</h3>\
                <div>길음역 정보</div>'
        }
    ];
    
    //핀 정보 설정
    var sku_markerInfos = [
        {
            sku_position: kmaratang,
            title :'경성마라탕',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/kmaratang.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 현금 및 계좌이체시 캔음료 제공(중국음료는 1000원 추가)',
            content3: '- 쿠폰10장 꿔바로우 제공',
            content4: '',            
            content5: '',
            content6: ''            
        },
        {
            sku_position: mkpocha,
            title :'민규형 포차',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/default.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 안주류 2만원 이상 결제시 황도 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''   
        },
        {
            sku_position: tongtongpig,
            title :'통통 돼지 ',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/tongtongpig.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 고기 3+1 제공(기간X)',
            content3: '- 현금 결제시 5% 할인',
            content4: '',            
            content5: '',
            content6: ''   
        },
        {
            sku_position: hola,
            title :'올라',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/hola.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 현금 및 계좌이체시 10% 할인',
            content3: '- 생맥주 3500원, 병소주 4000원', 
            content4: '- 10만원 이상 주문시 서비스 제공',
            content5: '',   
            content6: ''   

        },
        {
            sku_position: wawapocha,
            title :'와와 닭발 & 포차',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/wawapocha.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 4만원 이상 주문시 간단한 안주 제공',
            content3: '- 요청시 소주 라벨링 작업(좋은데이)', 
            content4: '- 15명 이상 현수막 제작', 
            content5: '- 컨디션 스틱 한병당 1개',
            content6: '- 현금결제시 3% 자체 적립',

        },
        {
            sku_position: mygreek,
            title :'마이그릭',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/mygreek.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 10% 할인(단, 할인 품목 제외)',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {
            sku_position: grandmadarak,
            title :'할머니 다락방',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/grandmadarak.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 1인 1음료 주문시 디저트 10% 할인',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {
            sku_position: piglove,
            title :'퇘사랑',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/piglove.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 현금 및 계좌이체시 10% 할인',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {
            sku_position: songgangru,
            title :'송강루',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/songgangru.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 매장 직접 전화 주문시 세트메뉴 할인',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },{
            sku_position: skpocha,
            title :'서경포차',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/skpocha.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 현금 및 계좌이체시 10% 할인',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {
            sku_position: ebari,
            title :'이 바리 꼴로리',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/ebari.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 1만원 이상 현금 및 계좌이체시 5% 할인(최대 3000원)',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        }
    ];
    var jeongneung_markerInfos = [
        {
            jeongneung_position: donbuza,
            title:'돈부자',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: jueunson,
            title:'주은이네손맛',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: rapleraple,
            title:'라플라플',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: yangsanbak,
            title:'양산박',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: taepeungyang,
            title:'태평양수산',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: zzangsi,
            title:'짱시 스낵',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: sumakarong,
            title:'수마카롱',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: esulro,
            title:'이슬로',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: jini,
            title:'지니',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: miso,
            title:'미소농수산물',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: mantasushi,
            title:'만타스시',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: thedual,
            title:'더듀얼로스터즈',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: groompasta,
            title:'구름파스타',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: ttgaejil,
            title:'뜨개질방',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: jeongneunggalbi,
            title:'정릉갈비',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: bok2oldchiken,
            title:'복이 옛날통닭',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: humanchikenggichi,
            title:'인류닭꼬치',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: onebilliard,
            title:'원당구장',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: goldcodari,
            title:'황금코다리 정릉점',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: sul2rang,
            title:'술이랑',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: pizzaschool,
            title:'피자스쿨 정릉점',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: happy0in,
            title:'해피공인중개사무소',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: miramcos,
            title:'미람코스메틱',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: hopepocha,
            title:'보국문 호프포차',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: sunnong,
            title:'태양농산물',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {
            jeongneung_position: janggogi,
            title:'장고기',
            sub_title:'정릉골 상권',
            image_url:'',
            content1: '🔥제휴 내용🔥',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },

    ];
    var sswu_markerInfos = [
        {
            sswu_position: iasi,
            title :'이자카야 이야시',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/iasi.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 테이블당 아이스 홍시 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {
            sswu_position: witchkitchen,
            title :'마녀주방',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/witch.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 학생 인증시 탄산음료 or 에이드 1잔 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''   
        },
        {
            sswu_position: kangkumok,
            title :'강금옥쭈꾸미',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/kangkumok.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 2인분 주문시 볶음밥 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {
            sswu_position: kimtaewan,
            title :'김태완스시 성신여대점',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/kimtaewan.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 랜덤초밥 제공 or 튀김류 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {
            sswu_position: choidaepae,
            title :'최대패',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/choi.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 테이블당 소주 한 병 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {
            sswu_position: vistro,
            title :'비스트로홈',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/vistro.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 테이블당 디저트 빙수 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''   
        },
        {
            sswu_position: lalanoodle,
            title :'라라면가 ',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/lala.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 매장 방문시 2인 기준 음료수 제공, 공기밥 무료 제공/포장',    
            content3: '- 배달(배민한집배달, 배민, 쿠팡이츠)시 요청사항에 원하는 음료 작성시 제공',
            content4: '', 
            content5: '', 
            content6: '' 
        },
        {//
            sswu_position: sukhan,
            title :'석관 인생곱창',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/sukhon.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 서경대생 2인 이상 포함 방문 후 5만원 이상 주문시 10% 할인',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {
            sswu_position: miu,
            title :'미우',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/miu.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 테이블당 소주 한 병 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''   
        },
        {
            sswu_position: choi,
            title :'쵸이양식',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/choi_yangsik.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 음식 주문 후 인스타 태그 시 음료 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {
            sswu_position: rainbowbeer,
            title :'무지개맥주',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/rainbow.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 서경대생 2인 이상 포함 방문 후 5만원 이상 주문시 10% 할인',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {
            sswu_position: heroboardgame,
            title :'히어로보드게임카페',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/hero.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 최종 결제시 20% 할인',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''   
        },
        {
            sswu_position: ilu,
            title :'ILU:일루',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/ilu.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 10% 할인',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
    ];
    
    //지역별 마커
    //서경대 마커
    var markerOptions = {
        position: skuniv,
        map: map,
        icon: {
            url: HOME_PATH + '/assets/pin_sku.png',
            size: new naver.maps.Size(50, 52),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26)
        }
    };
    var marker = new naver.maps.Marker(markerOptions);
    //성신여대 마커
    var markerOptions = {
        position: sunshinuniv,
        map: map,
        icon: {
            url: HOME_PATH + '/assets/pin_sswu.png',
            size: new naver.maps.Size(50, 52),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26)
        }
    };
    var marker = new naver.maps.Marker(markerOptions);
    //보국문역 (정릉골) 마커
    var markerOptions = {
        position: jeongneungmarket,
        map: map,
        icon: {
            url: HOME_PATH + '/assets/pin_jeongneung.png',
            size: new naver.maps.Size(50, 52),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26)
        }
    };
    var marker = new naver.maps.Marker(markerOptions);
    
    // 각 마커를 생성하고 지도에 추가합니다.
    //서경대 앞 마커
    sku_markerInfos.forEach(function(info) {
        var markerOptions = {
            position: info.sku_position,
            map: map,
            icon: {
                url: HOME_PATH + '/assets/pin_green.png',
                size: new naver.maps.Size(50, 52),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(25, 26)
            }
        };
        var marker = new naver.maps.Marker(markerOptions);
        // 클릭 이벤트를 추가합니다.
        naver.maps.Event.addListener(marker, 'click', function() {
            
            openModal(info);        
        });
        naver.maps.Event.addListener(map, 'click', function() {
            closeModal(); // 지도 클릭 시 모달 닫기
        });
    });
    // 정릉골 마커 jeongneung_position
    jeongneung_markerInfos.forEach(function(info) {
        var markerOptions = {
            position: info.jeongneung_position,
            map: map,
            icon: {
                url: HOME_PATH + '/assets/pin_blue.png',
                size: new naver.maps.Size(50, 52),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(25, 26)
            }
        };
        var marker = new naver.maps.Marker(markerOptions);
        // 클릭 이벤트를 추가합니다.
        naver.maps.Event.addListener(marker, 'click', function() {
            openModal(info);        
        });
        naver.maps.Event.addListener(map, 'click', function() {
            closeModal(); // 지도 클릭 시 모달 닫기
        });
    });

    //성신여대역 마커
    sswu_markerInfos.forEach(function(info) {
        var markerOptions = {
            position: info.sswu_position,
            map: map,
            icon: {
                url: HOME_PATH + '/assets/pin_purple.png',
                size: new naver.maps.Size(50, 52),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(25, 26)
            }
        };
        var marker = new naver.maps.Marker(markerOptions);
    
        // 클릭 이벤트 추가
        naver.maps.Event.addListener(marker, 'click', function() {
            openModal(info);        
        });
        naver.maps.Event.addListener(map, 'click', function() {
            closeModal(); // 지도 클릭 시 모달 닫기
        });
    });
    
      // 모든 버튼 요소를 가져옴.
    var buttons = document.querySelectorAll('.control-btn');
      // 각 버튼에 대해 클릭 이벤트를 추가.
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
              // 모든 버튼의 배경색, 테두리 색상, 글자색을 원래대로 복원.
            buttons.forEach(function(btn) {
                btn.style.backgroundColor = '#ffffff';
                btn.style.borderColor = '#e8e9ed';
                btn.style.color = '#5c5d61';
            });
            // 클릭된 버튼의 배경색을 변경.
            button.style.backgroundColor = '#ff4d26';
              // 클릭된 버튼의 테두리를 제거.
            button.style.borderColor = 'transparent';
              // 클릭된 버튼의 글자색을 변경.
            button.style.color = '#ffffff';
              // 이후 추가적인 동작을 정의할 수 있습니다.
        });
    });
});

// ----------------------------------------------------------------

function openModal(markerInfo) {
    var modalTitle = document.getElementById('modal-title');
    var modalContent = document.getElementById('modal-content');
    var modalsub_title = document.getElementById('sub-title');
    var modalImage = document.getElementById('image');
    var modalContent1 = document.getElementById('modal-content1');
    var modalContent2 = document.getElementById('modal-content2');
    var modalContent3 = document.getElementById('modal-content3');
    var modalContent4 = document.getElementById('modal-content4');
    var modalContent5 = document.getElementById('modal-content5');
    var modalContent6 = document.getElementById('modal-content6');



    modalTitle.innerText = markerInfo.title;
    modalsub_title.innerText = markerInfo.sub_title;
    modalImage.src = markerInfo.image_url;
    modalContent1.innerText = markerInfo.content1;
    modalContent2.innerText = markerInfo.content2;
    modalContent3.innerText = markerInfo.content3;
    modalContent4.innerText = markerInfo.content4;
    modalContent5.innerText = markerInfo.content5;
    modalContent6.innerText = markerInfo.content6;


    modal.style.display = 'block';
}

// 모달을 닫는 함수
function closeModal() {
    var modal = document.getElementById('modal');
    var modalOverlay = document.getElementById('modal-overlay');
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
}

// 모달 외부를 클릭했을 때 모달을 닫는 이벤트 추가
document.getElementById('modal-overlay').addEventListener('click', closeModal);

// 지도를 클릭했을 때 모달을 닫는 이벤트 추가
naver.maps.Event.addListener(map, 'click', function() {
    closeModal(); // 지도 클릭 시 모달 닫기
});


window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};


