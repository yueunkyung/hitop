// 생성자 함수...
// 새로운 인스턴스를 하나 만든다.
// new Date();

// 객체는 추상적인 관념 같은거 => 설계도
// 객체만이 가질 수 있는 특징 === 속성(properties/field/memberfield/status)
// 코끼리.키, 코끼리.몸무게, 코끼리.상아길이
// 코끼리.먹다(), 코끼리.달린다(), 코끼리.잔다(), 코끼리.날다()  ==> 행위/method

// new 코끼리()    // 생성자 함수
// new를 생성자라고 하고 new 코끼리를 생성자 함수라고 함

// 소나타.컬러, 소나타.속도, 소나타.바퀴
// 소나타.엑셀을 밟다(), 소나타.브레이크를 걸다();
// new 소나타("red");
// const Person = {};
// let arr = [];s
// let 학생1 = {
//     키: 180,
//     몸무게: 80,
//     혈액형: "A"
// };
// let 학생2 = {
//     키: 185,
//     몸무게: 90
// };
// let 학생3 = {
//     키: 178,
//     몸무게: 75
// };

new Swiper("#mainVisual", {
    effect: "slide", //cube, fade,...
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: "#mainVisual .next",
        prevEl: "#mainVisual .prev",
    },
    pagination: {
        el: "#mainVisual .paginationBox .pagination",
        //type: "bullets",
        clickable: true,
    },
}); // 생성자 함수
