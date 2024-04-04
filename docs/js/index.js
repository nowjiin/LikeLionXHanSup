document.addEventListener("DOMContentLoaded", function() {
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.598550, 127.015065),
        zoom: 14
    });

      //var로 식당별 위,경도 설정
    var 
        all = new naver.maps.LatLng(37.598550, 127.015065),
        skuniv = new naver.maps.LatLng(37.611087, 127.014065),
        jeongneungmarket = new naver.maps.LatLng(37.612378, 127.009394),
        sunshinuniv = new naver.maps.LatLng(37.592698, 127.016554),
        etc = new naver.maps.LatLng(37.608851, 127.008738),
        reset = new naver.maps.LatLng(37.60700258639104, 126.95625001298839),
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
        songgangru = new naver.maps.LatLng(37.6111966, 127.0136037),
        skpocha = new naver.maps.LatLng(37.610268, 127.01456),
        ebari = new naver.maps.LatLng(37.612023, 127.013426),
        jokbal = new naver.maps.LatLng(37.610355, 127.015119),
        // 정릉골 상권
        donbuza = new naver.maps.LatLng(37.610419,127.009644),
        jueunson = new naver.maps.LatLng(37.613675, 127.009906),
        rapleraple = new naver.maps.LatLng(37.613652, 127.009983),
        yangsanbak = new naver.maps.LatLng(37.6136407, 127.0100206),
        taepeungyang = new naver.maps.LatLng(37.613259, 127.01039),
        zzangsi = new naver.maps.LatLng(37.612993, 127.010401),
        sumakarong = new naver.maps.LatLng(37.612963, 127.010374),
        kaimo = new naver.maps.LatLng(37.612792, 127.010298),
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
        rarakimbab = new naver.maps.LatLng(37.612396, 127.009769),
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
        sabukgil = new naver.maps.LatLng(37.591506, 127.016874),
        // 정릉 시장 상권
        badasanghup = new naver.maps.LatLng(37.608725, 127.009207),
        hanbangjok = new naver.maps.LatLng(37.608579, 127.009178),
        gapeung = new naver.maps.LatLng(37.60859, 127.00914),
        sigang = new naver.maps.LatLng(37.608578, 127.009214),
        bongha = new naver.maps.LatLng(37.608465, 127.009288),
        unninae = new naver.maps.LatLng(37.608547, 127.008768),
        jangtu = new naver.maps.LatLng(37.608465, 127.009681),//
        slowcafe = new naver.maps.LatLng(37.609382, 127.008528),
        samdaegogi = new naver.maps.LatLng(37.608763, 127.008739),
        mukguri = new naver.maps.LatLng(37.608489, 127.007833),
        sun2kimbab = new naver.maps.LatLng(37.608588, 127.008014),
        dongsungkamja = new naver.maps.LatLng(37.608754, 127.008604),
        ggabaegi = new naver.maps.LatLng(37.608595, 127.008267),
        bakgrandma = new naver.maps.LatLng(37.608594, 127.008302),
        pandatanghuru = new naver.maps.LatLng(37.608761, 127.008634),
        jongro = new naver.maps.LatLng(37.60878, 127.00818),
        together = new naver.maps.LatLng(37.608899, 127.007835),
        oursaetak = new naver.maps.LatLng(37.608463, 127.008722),
        gogigumtu = new naver.maps.LatLng(37.60878, 127.009273),
        gohang = new naver.maps.LatLng(37.602845, 127.012946),
        mansingyang = new naver.maps.LatLng(37.6087183, 127.009422),
        dorimanfish = new naver.maps.LatLng(37.608851, 127.008738),
        yogerpresso = new naver.maps.LatLng(37.608606, 127.008763),
        illmezip = new naver.maps.LatLng(37.608978, 127.009033),
        ourgopchang = new naver.maps.LatLng(37.6084375, 127.0088125),
        lifesoolzip = new naver.maps.LatLng(37.609276, 127.008036),
        dauga = new naver.maps.LatLng(37.608725, 127.00916),
        deliciusbbq = new naver.maps.LatLng(37.6082732, 127.0088461),
        woojonghaejang = new naver.maps.LatLng(37.6085777830425, 127.008756130915),
        bonganuroongzi = new naver.maps.LatLng(37.608841, 127.009363),
        eunhaekamja = new naver.maps.LatLng(37.608513, 127.008561),
        bluesaetak = new naver.maps.LatLng(37.609532, 127.007752),
        seoulbulgogi = new naver.maps.LatLng(37.608851, 127.009044),
        theonechicken = new naver.maps.LatLng(37.608389, 127.008819),
        gil2maratang = new naver.maps.LatLng(37.608422, 127.007808),
        chosunbutumak = new naver.maps.LatLng(37.608189, 127.008918),
        jeongneungzzuggume = new naver.maps.LatLng(37.607967, 127.008958),
        cookieforest = new naver.maps.LatLng(37.608403, 127.008564),
        gogosanghae = new naver.maps.LatLng(37.609138, 127.00787);


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
        });
        $("#to-skuniv").on("click", function(e) {
            e.preventDefault();
            map.setZoom(17, true);
            map.panTo(skuniv);
        });
        $("#to-etc").on("click", function(e) {
            e.preventDefault();
            map.setZoom(17, true);
            map.panTo(etc);
        });
        $("#to-jeongneungmarket").on("click", function(e) {
            e.preventDefault();
            map.setZoom(17, true);
            map.panTo(jeongneungmarket);
        });
        $("#to-sunshinuniv").on("click", function(e) {
            e.preventDefault();
            map.setZoom(16, true);
            map.panTo(sunshinuniv);
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
        etc,
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
        jokbal, //가장 맛있는 족발
    ];
    var jeongneung_position = [
        donbuza, //정릉돈부자
        jueunson, //주은이네손맛
        rapleraple, //라플라플
        yangsanbak, //양산박
        taepeungyang, //태평양수산
        zzangsi, //짱시 스낵
        sumakarong, //수마카롱
        kaimo, //카이모
        esulro, //이슬로건강원
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
        rarakimbab, //라라 김밥
    ];
    var sswu_position = [
        iasi, //이야시
        witchkitchen, //마녀주방
        kangkumok, //강금옥
        kimtaewan, //김태완스시
        choidaepae, //최대패
        vistro, //비스트로
        lalanoodle, //라라면가
        sukhan, //석관 인생곱창
        miu, //미우
        choi, //쵸이 양식
        rainbowbeer, //무지개맥주
        heroboardgame, //히어로 보드게임
        ilu,//일루
        sabukgil, // 새벽길 빨간오뎅
    ];
    var market_position = [
        badasanghup, //바다생협
        hanbangjok, //한방족발
        gapeung, //가평상회
        sigang, // 시장순대
        bongha, //봉화떡집
        unninae, //언니네 김밥
        jangtu, //장터축산물
        slowcafe, //슬로우카페 달팽이
        samdaegogi, //삼대 고기집
        mukguri, //먹거리 곱창
        sun2kimbab, //순이김밥
        dongsungkamja, //동숭감자탕
        ggabaegi, //꽈배기 스토리
        bakgrandma, //백할매 고기집
        pandatanghuru, //판다 탕후루
        jongro, //종로떡집
        together, //같이가치 정릉덮밥
        oursaetak, //우리동네 세탁소
        gogigumtu, //고기굼터
        gohang, //고향반찬
        mansingyang, //만싱양꼬치
        dorimanfish, //두리만횟집
        yogerpresso, //요거프레소
        illmezip, //일미집
        ourgopchang, //우리맛곱찹
        lifesoolzip, //인생술집
        dauga, //다우가(자사부왕만두)
        deliciusbbq, //아주맛있는바베큐
        woojonghaejang, //우종순대국
        bonganuroongzi, //본가누룽지백숙
        eunhaekamja, //은헤감자탕
        bluesaetak, //블루세탁
        seoulbulgogi, //서울불고기
        theonechicken, //더원치킨
        gil2maratang, //길이마라탕
        chosunbutumak, //조선부뚜막
        jeongneungzzuggume, //정릉쭈꾸미
        cookieforest, //쿠기 포레스트
        gogosanghae, //고고상회
    ]
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
        position: etc,
        content: '<h3>길음역</h3>\
                <div>길음역 정보</div>'
        }
    ];
    
    //핀 정보 설정
    var sku_markerInfos = [
        {//
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
        {//
            sku_position: mkpocha,
            title :'민규형 포차',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/mkpocha.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 안주류 2만원 이상 결제시 황도 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''   
        },
        {//
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
        {//
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
        {//
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
        {//
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
        {//
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
        {//
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
        {//
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
        },{//
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
        {//
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
        },
        {//
            sku_position: jokbal,
            title :'가장 맛있는 족발',
            sub_title : '서경대 상권',
            image_url : './assets/sku_markerInfos_img/jokbal.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 현금 및 계좌이체 시 5% 할인',
            content3: '- 학생증 인증 시 테이블 당 음료, 주류, 주먹밥 택 1 제공',
            content4: '- 포장시 음료 서비스',            
            content5: '- 전화로 주문 시 현금, 계좌 배민 가격으로 진행, 리뷰 서비스 동일',
            content6: ''  
        },
    ];
    var jeongneung_markerInfos = [
        {//
            jeongneung_position: donbuza,
            title:'돈부자',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/donbuza.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: jueunson,
            title:'주은이네손맛',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/jueunson.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: rapleraple,
            title:'라플라플',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/rapleraple.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: yangsanbak,
            title:'양산박',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/yangsanbak.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: taepeungyang,
            title:'태평양수산',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/taepeungyang.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: zzangsi,
            title:'짱시 스낵',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/zzangsi.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: sumakarong,
            title:'수마카롱',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/sumakarong.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: kaimo,
            title:'카이모',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/kaimo.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: esulro,
            title:'이슬로',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/esulro.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: jini,
            title:'지니',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/jini.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: miso,
            title:'미소농수산물',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/miso.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: mantasushi,
            title:'만타스시',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/mantasushi.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: thedual,
            title:'더듀얼로스터즈',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/thedual.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: groompasta,
            title:'구름파스타',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/groompasta.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: ttgaejil,
            title:'뜨개질방',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/ttgaejil.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: jeongneunggalbi,
            title:'정릉갈비',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/jeongneunggalbi.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: bok2oldchiken,
            title:'복이 옛날통닭',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/bok2oldchiken.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: humanchikenggichi,
            title:'인류닭꼬치',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/humanchikenggichi.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: onebilliard,
            title:'원당구장',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/onebilliard.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: goldcodari,
            title:'황금코다리 정릉점',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/goldcodari.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: sul2rang,
            title:'술이랑',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/sul2rang.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: pizzaschool,
            title:'피자스쿨 정릉점',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/pizzaschool.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: happy0in,
            title:'해피공인중개사무소',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/happy0in.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 복비 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: miramcos,
            title:'미람코스메틱',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/miramcos.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: hopepocha,
            title:'보국문 호프포차',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/hopepocha.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: sunnong,
            title:'태양농산물',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/sunnong.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: janggogi,
            title:'장고기',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/janggogi.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            jeongneung_position: rarakimbab,
            title:'라라김밥',
            sub_title:'정릉골 상권',
            image_url:'./assets/jeongneung_markerInfos_img/rarakimbab.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },

    ];
    var sswu_markerInfos = [
        {//
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
        {//
            sswu_position: witchkitchen,
            title :'마녀주방',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/witchkitchen.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 학생 인증시 탄산음료 or 에이드 1잔 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''   
        },
        {//
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
        {//
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
        {//
            sswu_position: choidaepae,
            title :'최대패',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/choidaepae.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 테이블당 소주 한 병 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {//
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
        {//
            sswu_position: lalanoodle,
            title :'라라면가 ',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/lalanoodle.jpg',
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
            image_url : './assets/sswu_markerInfos_img/sukhan.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 서경대생 2인 이상 포함 방문 후 5만원 이상 주문시 10% 할인',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {//
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
        {//
            sswu_position: choi,
            title :'쵸이양식',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/choi.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 음식 주문 후 인스타 태그 시 음료 제공',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {//
            sswu_position: rainbowbeer,
            title :'무지개맥주',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/rainbowbeer.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 서경대생 2인 이상 포함 방문 후 5만원 이상 주문시 10% 할인',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
        {//
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
        {//
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
        {//
            sswu_position: sabukgil,
            title :'새벽길 빨간오뎅',
            sub_title : '성신여대 상권',
            image_url : './assets/sswu_markerInfos_img/sabukgil.jpg',
            content1: '🔥제휴 내용🔥',
            content2: '- 3만원 결제 시 10% 할인',
            content3: '',
            content4: '',            
            content5: '',
            content6: ''  
        },
    ];
    //정릉 시장 정보
    var market_markerInfos = [
        {//
            market_position: badasanghup,
            title:'바다생협',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/badasanghup.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: hanbangjok,
            title:'한방족발',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/hanbangjok.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: gapeung,
            title:'가평상회',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/gapeung.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: sigang,
            title:'시장순대',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/sigang.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: bongha,
            title:'봉화떡집',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/bongha.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: unninae,
            title:'언니네 김밥',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/unninae.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: jangtu,
            title:'장터축산물',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/jangtu.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: slowcafe,
            title:'슬로우카페 달팽이',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/slowcafe.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: samdaegogi,
            title:'삼대 고깃집',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/samdaegogi.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: mukguri,
            title:'먹거리 곱창',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/mukguri.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: sun2kimbab,
            title:'순이김밥',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/sun2kimbab.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: dongsungkamja,
            title:'동숭감자탕',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/dongsungkamja.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: ggabaegi,
            title:'꽈배기 스토리',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/ggabaegi.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: bakgrandma,
            title:'백할매 고깃집',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/bakgrandma.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: pandatanghuru,
            title:'판다 탕후루',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/pandatanghuru.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: jongro,
            title:'종로떡집',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/jongro.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: together,
            title:'같이가치 정릉덮밥',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/together.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: oursaetak,
            title:'우리동네세탁소',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/oursaetak.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: gogigumtu,
            title:'무한리필 고기굼터',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/gogigumtu.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: gohang,
            title:'고향반찬',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/gohang.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: mansingyang,
            title:'만싱양꼬치',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/mansingyang.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: dorimanfish,
            title:'두리만횟집',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/dorimanfish.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: yogerpresso,
            title:'요거프레소',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/yogerpresso.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: illmezip,
            title:'일미집',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/illmezip.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: ourgopchang,
            title:'우리맛 곱창',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/ourgopchang.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: lifesoolzip,
            title:'인생술집',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/lifesoolzip.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: dauga,
            title:'다우가(자사부왕만두)',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/dauga.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: deliciusbbq,
            title:'아주맛있는빠베큐',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/deliciusbbq.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: woojonghaejang,
            title:'우종해장국',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/woojonghaejang.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: bonganuroongzi,
            title:'본가누릉지 백숙',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/bonganuroongzi.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: eunhaekamja,
            title:'은혜감자탕',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/eunhaekamja.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: bluesaetak,
            title:'블루세탁',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/bluesaetak.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: seoulbulgogi,
            title:'서울불고기',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/seoulbulgogi.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: theonechicken,
            title:'더원치킨',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/theonechicken.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: gil2maratang,
            title:'길이마라탕',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/gil2maratang.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: chosunbutumak,
            title:'조선부뚜막',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/chosunbutumak.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: jeongneungzzuggume,
            title:'정릉쭈꾸미',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/jeongneungzzuggume.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: cookieforest,
            title:'쿠키포레스트',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/cookieforest.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },
        {//
            market_position: gogosanghae,
            title:'고고상회',
            sub_title:'정릉골 상권',
            image_url:'./assets/market_markerInfos_img/gogosanghae.jpg',
            content1: '🔥제휴 내용🔥',
            content2:'- 3만원 결제 시 10% 할인',
            content3:'',
            content4:'',
            content5:'',
            content6:''
        },

    ]
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
    // 서경대 앞 마커
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

    //정릉시장 마커
    market_markerInfos.forEach(function(info) {
        var markerOptions = {
            position: info.market_position,
            map: map,
            icon: {
                url: HOME_PATH + '/assets/pin_yellow.png',
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

    //여기부터----------------------------------------------------------------------------
    var locationBtnHtml = '<a href="#" class="btn_mylct"><img src="./my_location.png" alt="내 위치"></a>';
    naver.maps.Event.once(map, 'init', function() {
        //customControl 객체 이용하기
        var customControl = new naver.maps.CustomControl(locationBtnHtml, {
            position: naver.maps.Position.TOP_RIGHT
        });
    
        customControl.setMap(map);
    
        naver.maps.Event.addDOMListener(customControl.getElement(), 'click', function() {
            navigator.geolocation.getCurrentPosition(function(position) {
                var currentPosition = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
                // 현재 위치로 맵 이동
                map.panTo(currentPosition);
            });
            map.setZoom(16, true);
        });
    });
    //여기까지 내 위치 마커 표시(버튼)
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
