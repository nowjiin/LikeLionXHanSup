document.addEventListener("DOMContentLoaded", function () {
  var sku_markerInfos = [
    {
      //
      title: "경성마라탕",
      sub_title: "서경대 상권",
      image_url: "./assets/sku_markerInfos_img/kmaratang.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 현금 및 계좌이체시 캔음료 제공(중국음료는 1000원 추가)",
      content3: "- 쿠폰10장 꿔바로우 제공",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "민규형 포차",
      sub_title: "서경대 상권",
      image_url: "./assets/sku_markerInfos_img/mkpocha.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 안주류 2만원 이상 결제시 황도 제공",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "통통 돼지 ",
      sub_title: "서경대 상권",
      image_url: "./assets/sku_markerInfos_img/tongtongpig.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 고기 3+1 제공(기간X)",
      content3: "- 현금 결제시 5% 할인",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "올라",
      sub_title: "서경대 상권",
      image_url: "./assets/sku_markerInfos_img/hola.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 현금 및 계좌이체시 10% 할인",
      content3: "- 생맥주 3500원, 병소주 4000원",
      content4: "- 10만원 이상 주문시 서비스 제공",
      content5: "",
      content6: "",
    },
    {
      //
      title: "와와 닭발 & 포차",
      sub_title: "서경대 상권",
      image_url: "./assets/sku_markerInfos_img/wawapocha.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 4만원 이상 주문시 간단한 안주 제공",
      content3: "- 요청시 소주 라벨링 작업(좋은데이)",
      content4: "- 15명 이상 현수막 제작",
      content5: "- 컨디션 스틱 한병당 1개",
      content6: "- 현금결제시 3% 자체 적립",
    },
    {
      //
      title: "마이그릭",
      sub_title: "서경대 상권",
      image_url: "./assets/sku_markerInfos_img/mygreek.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 10% 할인(단, 할인 품목 제외)",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "할머니 다락방",
      sub_title: "서경대 상권",
      image_url: "./assets/sku_markerInfos_img/grandmadarak.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 1인 1음료 주문시 디저트 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "퇘사랑",
      sub_title: "서경대 상권",
      image_url: "./assets/sku_markerInfos_img/piglove.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 현금 및 계좌이체시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "송강루",
      sub_title: "서경대 상권",
      image_url: "./assets/sku_markerInfos_img/songgangru.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 매장 직접 전화 주문시 세트메뉴 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "서경포차",
      sub_title: "서경대 상권",
      image_url: "./assets/sku_markerInfos_img/skpocha.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 현금 및 계좌이체시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "이 바리 꼴로리",
      sub_title: "서경대 상권",
      image_url: "./assets/sku_markerInfos_img/ebari.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 1만원 이상 현금 및 계좌이체시 5% 할인(최대 3000원)",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "가장 맛있는 족발",
      sub_title: "서경대 상권",
      image_url: "./assets/sku_markerInfos_img/jokbal.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 현금 및 계좌이체 시 5% 할인",
      content3: "- 학생증 인증 시 테이블 당 음료, 주류, 주먹밥 택 1 제공",
      content4: "- 포장시 음료 서비스",
      content5:
        "- 전화로 주문 시 현금, 계좌 배민 가격으로 진행, 리뷰 서비스 동일",
      content6: "",
    },
  ];
  var jeongneung_markerInfos = [
    {
      //
      title: "돈부자",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/donbuza.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "주은이네손맛",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/jueunson.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "라플라플",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/rapleraple.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "양산박",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/yangsanbak.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "태평양수산",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/taepeungyang.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "짱시 스낵",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/zzangsi.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "수마카롱",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/sumakarong.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "카이모",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/kaimo.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "이슬로",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/esulro.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "지니",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/jini.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "미소농수산물",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/miso.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "만타스시",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/mantasushi.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "더듀얼로스터즈",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/thedual.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "구름파스타",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/groompasta.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "뜨개질방",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/ttgaejil.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "정릉갈비",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/jeongneunggalbi.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "복이 옛날통닭",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/bok2oldchiken.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "인류닭꼬치",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/humanchikenggichi.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "원당구장",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/onebilliard.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "황금코다리 정릉점",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/goldcodari.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "술이랑",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/sul2rang.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "피자스쿨 정릉점",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/pizzaschool.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "해피공인중개사무소",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/happy0in.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 복비 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "미람코스메틱",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/miramcos.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "보국문 호프포차",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/hopepocha.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "태양농산물",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/sunnong.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "장고기",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/janggogi.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "라라김밥",
      sub_title: "정릉골 상권",
      image_url: "./assets/jeongneung_markerInfos_img/rarakimbab.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
  ];
  var sswu_markerInfos = [
    {
      //
      title: "이자카야 이야시",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/iasi.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 테이블당 아이스 홍시 제공",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "마녀주방",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/witchkitchen.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 학생 인증시 탄산음료 or 에이드 1잔 제공",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "강금옥쭈꾸미",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/kangkumok.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 2인분 주문시 볶음밥 제공",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "김태완스시 성신여대점",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/kimtaewan.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 랜덤초밥 제공 or 튀김류 제공",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "최대패",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/choidaepae.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 테이블당 소주 한 병 제공",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "비스트로홈",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/vistro.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 테이블당 디저트 빙수 제공",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "라라면가 ",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/lalanoodle.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 매장 방문시 2인 기준 음료수 제공, 공기밥 무료 제공/포장",
      content3:
        "- 배달(배민한집배달, 배민, 쿠팡이츠)시 요청사항에 원하는 음료 작성시 제공",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "석관 인생곱창",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/sukhan.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 서경대생 2인 이상 포함 방문 후 5만원 이상 주문시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "미우",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/miu.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 테이블당 소주 한 병 제공",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "쵸이양식",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/choi.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 음식 주문 후 인스타 태그 시 음료 제공",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "무지개맥주",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/rainbowbeer.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 서경대생 2인 이상 포함 방문 후 5만원 이상 주문시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "히어로보드게임카페",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/hero.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 최종 결제시 20% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "ILU:일루",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/ilu.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      title: "새벽길 빨간오뎅",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/sabukgil.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      title: "연꼬치 성신여대",
      sub_title: "성신여대 상권",
      image_url: "./assets/sswu_markerInfos_img/yeonggochi.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 서경대 학생 : 현금 or 계좌이체시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
  ];
  //정릉 시장 정보
  var market_markerInfos = [
    {
      //
      title: "바다생협",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/badasanghup.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "한방족발",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/hanbangjok.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "가평상회",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/gapeung.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "시장순대",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/sigang.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "봉화떡집",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/bongha.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "언니네 김밥",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/unninae.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "장터축산물",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/jangtu.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "슬로우카페 달팽이",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/slowcafe.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "삼대 고깃집",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/samdaegogi.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "먹거리 곱창",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/mukguri.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "순이김밥",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/sun2kimbab.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "동숭감자탕",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/dongsungkamja.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "꽈배기 스토리",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/ggabaegi.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "백할매 고깃집",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/bakgrandma.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "판다 탕후루",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/pandatanghuru.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "종로떡집",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/jongro.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "같이가치 정릉덮밥",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/together.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "우리동네세탁소",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/oursaetak.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "무한리필 고기굼터",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/gogigumtu.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "고향반찬",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/gohang.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "만싱양꼬치",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/mansingyang.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "두리만횟집",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/dorimanfish.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "요거프레소",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/yogerpresso.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "일미집",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/illmezip.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "우리맛 곱창",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/ourgopchang.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "인생술집",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/lifesoolzip.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "다우가(자사부왕만두)",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/dauga.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "아주맛있는빠베큐",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/deliciusbbq.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "우종해장국",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/woojonghaejang.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "본가누릉지 백숙",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/bonganuroongzi.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "은혜감자탕",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/eunhaekamja.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "블루세탁",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/bluesaetak.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "서울불고기",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/seoulbulgogi.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "더원치킨",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/theonechicken.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "길이마라탕",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/gil2maratang.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "조선부뚜막",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/chosunbutumak.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "정릉쭈꾸미",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/jeongneungzzuggume.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "쿠키포레스트",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/cookieforest.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "고고상회",
      sub_title: "정릉골 상권",
      image_url: "./assets/market_markerInfos_img/gogosanghae.jpg",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
  ];
  var etc_markerInfos = [
    {
      //
      title: "시장을 여는 사람들",
      sub_title: "기타 제휴 상권",
      image_url: "./assets/market_markerInfos_img/",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      //
      title: "이름",
      sub_title: "기타 제휴 상권",
      image_url: "./assets/market_markerInfos_img/",
      content1: "🔥제휴 내용🔥",
      content2: "- 3만원 결제 시 10% 할인",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
    },
    {
      title: "화화돈",
      sub_title: "혜화 제휴 상권",
      image_url: "./assets/etc_markerInfos_img/hwahwapig.png",
      content1: "🔥제휴 내용🔥",
      content2: "- 방문시 에이드 제공",
      content3: "- 매번 새로운 프로모션 진행",
      content4: "",
      content5: "",
      content6: "",
    },
  ];

  function openModal(markerInfo) {
    var modalContainer = document.createElement("div");
    modalContainer.classList.add("modal");

    var modalTitle = document.createElement("h2");
    modalTitle.id = "modal-title";
    modalTitle.innerText = markerInfo.title;
    modalContainer.appendChild(modalTitle);

    var subtitleNButtonContainer = document.createElement("div");
    subtitleNButtonContainer.classList.add("subtitle-n-button-container");
    modalContainer.appendChild(subtitleNButtonContainer);

    // 부제목 생성 및 추가
    var subTitle = document.createElement("div");
    subTitle.id = "sub-title";
    subTitle.innerText = markerInfo.sub_title;
    subtitleNButtonContainer.appendChild(subTitle);

    // 네이버 지도 열기 버튼 추가
    var naverMapButton = document.createElement("button");
    naverMapButton.id = "naver-map-button"; // 버튼에 ID 할당
    naverMapButton.addEventListener("click", function () {
      openNaverMap(markerInfo.title);
    });
    subtitleNButtonContainer.appendChild(naverMapButton);

    var imageContainer = document.createElement("div");
    var image = document.createElement("img");
    image.id = "image";
    imageContainer.id = "imageContainer";
    image.alt = "이미지";
    image.src = markerInfo.image_url;
    imageContainer.appendChild(image);
    modalContainer.appendChild(imageContainer);

    var contentContainer = document.createElement("div");
    contentContainer.id = "content-container";

    for (var i = 1; i <= 6; i++) {
      var modalContent = document.createElement("div");
      modalContent.id = "modal-content" + i;
      modalContent.innerText = markerInfo["content" + i];
      contentContainer.appendChild(modalContent);
    }

    modalContainer.appendChild(contentContainer);

    var listAll = document.getElementById("list_all");
    listAll.appendChild(modalContainer);
  }

  window.onload = function () {
    showMarkerInfos(
      sku_markerInfos.concat(
        jeongneung_markerInfos,
        sswu_markerInfos,
        market_markerInfos,
        etc_markerInfos
      )
    );
  };
  document.getElementById("to-all").addEventListener("click", function () {
    showMarkerInfos(
      sku_markerInfos.concat(
        jeongneung_markerInfos,
        sswu_markerInfos,
        market_markerInfos,
        etc_markerInfos
      )
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  document.getElementById("to-skuniv").addEventListener("click", function () {
    showMarkerInfos(sku_markerInfos);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document
    .getElementById("to-jeongneungmarket")
    .addEventListener("click", function () {
      showMarkerInfos(jeongneung_markerInfos);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

  document
    .getElementById("to-sunshinuniv")
    .addEventListener("click", function () {
      showMarkerInfos(sswu_markerInfos);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

  document
    .getElementById("to-jeongneung")
    .addEventListener("click", function () {
      showMarkerInfos(market_markerInfos);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

  document.getElementById("to-etc").addEventListener("click", function () {
    showMarkerInfos(etc_markerInfos);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  function showMarkerInfos(markerInfos) {
    // 모든 모달을 닫음
    closeAllModals();

    // 선택한 배열의 모달만 열기
    for (var i = 0; i < markerInfos.length; i++) {
      openModal(markerInfos[i]);
    }
  }

  // 모든 모달을 닫는 함수
  function closeAllModals() {
    var modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
      modal.remove(); // 모달을 삭제하여 새로 열릴 수 있도록 함
    });
  }

  // 네이버 지도로 이동하는 함수
  function openNaverMap(title) {
    // 가게 이름
    var mapaddress = title;

    // 네이버 지도 검색 URL
    var searchURL =
      "https://map.naver.com/v5/search/" + encodeURIComponent(mapaddress);

    // 새 창에서 네이버 지도 열기
    window.open(searchURL, "_blank");
  }
});
