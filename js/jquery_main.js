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

Splitting();

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

//첫번째꺼 다 끝나면 그 다음이 실행되게 하는 timeline 함수 활용
const mainTL = gsap.timeline();
/*
mainTL
    .from("#mainVisual .slogan .main .char", {
        y: -100,
        opacity: 0,
        ease: "bounce",
        duration: 1.5,
        // stagger: 0.05,
        stagger: {
            amount: 1.5,
            //from: "end", //start, end, random, edge
            //each: 0.1,
        },
    })
    .from(
        "#mainVisual .slogan .sub .char",
        {
            x: 100,
            opacity: 0,
            ease: "power4",
            duration: 1.5,
            // stagger: 0.05,
            stagger: {
                amount: 1.5,
                //from: "end", //start, end, random, edge
                //each: 0.1,
            },
        },
        1, //무조건 1초 뒤에 실행하겠다
    );
*/

mainTL
    .from("#logo", { y: -100, opacity: 0 })
    .from("#gnb .list > li", {
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".online", {
        opacity: 0,
    })
    .from(".all", {
        opacity: 0,
    })
    .from(
        "#mainVisual .slogan .main .char",
        {
            opacity: 0,
            y: -100,
            ease: "bounce",
            duration: 1.5,
            stagger: {
                amount: 1,
            },
        },
        1,
    )
    .from(
        "#mainVisual .slogan .sub .char",
        {
            opacity: 0,
            x: 100,
            ease: "back",
            duration: 1.5,
            stagger: {
                amount: 1,
            },
        },
        "-=1", // 바로 앞에 있는 무비 클립에서 1초를 당기겠다 (상대적 개념)
        "subEnd", // 깃발 꽂은 클립 기준으로(현재의 기준)
    )
    .from(
        "#mainVisual .prev",
        {
            opacity: 0,
            x: -100,
        },
        "subEnd-=0.5", // 깃발 꽂은 클립 기준으로 -0.5초
    )
    .from(
        "#mainVisual .next",
        {
            opacity: 0,
            x: 100,
        },
        "subEnd-=0.5", // 깃발 꽂은 클립 기준으로
    )
    .from("#mainVisual .pagination", {
        opacity: 0,
        y: 100,
    })
    .from("#mainVisual .iconScroll", {
        opacity: 0,
        y: 100,
    });

//alias
const gnbList = $("#gnb > .list > li");
// const gnbList = document.querySelectorAll("#gnb > .list > li");
gnbList.on("mouseenter", function () {
    // callback함수
    // console.log("this", this);
    // console.log("$(this)", $(this)); //wrapping
    $(this).find(".depth02").stop().slideDown(200);
});

gnbList.on("mouseleave", function () {
    $(this).find(".depth02").stop().slideUp(100);
});

$(window).on("mousemove", function (e) {
    // console.log("e", e);
    gsap.to("#cursor", {
        left: e.clientX - $("#cursor").width() / 2,
        top: e.clientY - $("#cursor").height() / 2,
        ease: "power3",
        duration: 1,
    });
});

const header = $("#header");

$(window).on("scroll", function () {
    // console.log("scrollTop", $(window).scrollTop());
    // console.log("height", $(document).height());
    const st = $(window).scrollTop();
    if (st > 0) header.addClass("scroll");
    else header.removeClass("scroll");
});

$(".tabBox .tabMenu li").on("click", function () {
    const idx = $(this).index();
    $(this).addClass("on").siblings("li").removeClass("on");
    const selectTabContents = $(this).parents(".tabMenu").siblings(".tabContents").find(">ul>li").eq(idx);
    selectTabContents.show().siblings("li").hide();
    //show() css display: block
});
