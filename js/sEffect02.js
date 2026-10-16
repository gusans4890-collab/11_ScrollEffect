// 버튼 이동하기
const $dot = document.querySelectorAll(".dot>ul>li>a");

$dot.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault(); // #의 기능을 차단

        const $href = document.querySelector(element.getAttribute("href"));
        $href.scrollIntoView({ behavior: "smooth" });
    });
});

// 스크롤
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    // if (scrollTop >= document.getElementById("section1").offsetTop) {
    //     document.querySelectorAll(".dot ul li").forEach((li) => {
    //         li.classList.remove("active");
    //     });
    //     document.querySelector(".dot ul li:nth-child(1)").classList.add("active");
    // }
    // if (scrollTop >= document.getElementById("section2").offsetTop) {
    //     document.querySelectorAll(".dot ul li").forEach((li) => {
    //         li.classList.remove("active");
    //     });
    //     document.querySelector(".dot ul li:nth-child(2)").classList.add("active");
    // }
    // if (scrollTop >= document.getElementById("section3").offsetTop) {
    //     document.querySelectorAll(".dot ul li").forEach((li) => {
    //         li.classList.remove("active");
    //     });
    //     document.querySelector(".dot ul li:nth-child(3)").classList.add("active");
    // }
    // if (scrollTop >= document.getElementById("section4").offsetTop) {
    //     document.querySelectorAll(".dot ul li").forEach((li) => {
    //         li.classList.remove("active");
    //     });
    //     document.querySelector(".dot ul li:nth-child(4)").classList.add("active");
    // }
    // if (scrollTop >= document.getElementById("section5").offsetTop) {
    //     document.querySelectorAll(".dot ul li").forEach((li) => {
    //         li.classList.remove("active");
    //     });
    //     document.querySelector(".dot ul li:nth-child(5)").classList.add("active");
    // }
    // if (scrollTop >= document.getElementById("section6").offsetTop) {
    //     document.querySelectorAll(".dot ul li").forEach((li) => {
    //         li.classList.remove("active");
    //     });
    //     document.querySelector(".dot ul li:nth-child(6)").classList.add("active");
    // }
    // if (scrollTop >= document.getElementById("section7").offsetTop) {
    //     document.querySelectorAll(".dot ul li").forEach((li) => {
    //         li.classList.remove("active");
    //     });
    //     document.querySelector(".dot ul li:nth-child(7)").classList.add("active");
    // }
    // if (scrollTop >= document.getElementById("section8").offsetTop) {
    //     document.querySelectorAll(".dot ul li").forEach((li) => {
    //         li.classList.remove("active");
    //     });
    //     document.querySelector(".dot ul li:nth-child(8)").classList.add("active");
    // }
    // if (scrollTop >= document.getElementById("section9").offsetTop) {
    //     document.querySelectorAll(".dot ul li").forEach((li) => {
    //         li.classList.remove("active");
    //     });
    //     document.querySelector(".dot ul li:nth-child(9)").classList.add("active");
    // }

    // for 문
    // for (let i = 1; i <= 9; i++) {
    //     if (scrollTop >= document.getElementById("section" + i).offsetTop) {
    //         document.querySelectorAll(".dot ul li").forEach((li) => {
    //             li.classList.remove("active");
    //         });
    //         document.querySelector(".dot ul li:nth-child(" + i + ")").classList.add("active");
    //     }
    // }

    // forEach
    document.querySelectorAll(".content_item").forEach((elem, index) => {
        if (scrollTop >= elem.offsetTop) {
            document.querySelectorAll(".dot ul li").forEach((li) => {
                li.classList.remove("active");
            });
            document.querySelector(".dot ul li:nth-child(" + (index + 1) + ")").classList.add("active");
        }
    });

    //infor
    document.querySelector(".scroll span").innerText = parseInt(scrollTop);

    // for (let i = 1; i <= 9; i++) {
    //     document.querySelector(".offset" + i).innerText =
    //         parseInt(document.getElementById("section" + i).offsetTop) + "px";
    // }

    // foreach
    document.querySelectorAll(".info span").forEach((span, index) => {
        span.innerText = parseInt(document.getElementById("section" + (index + 1)).offsetTop) + "px";
    });

    // document.querySelector(".offset1").innerText = parseInt(document.getElementById("section1").offsetTop) + "px";
    // document.querySelector(".offset2").innerText = parseInt(document.getElementById("section2").offsetTop) + "px";
    // document.querySelector(".offset3").innerText = parseInt(document.getElementById("section3").offsetTop) + "px";
    // document.querySelector(".offset4").innerText = parseInt(document.getElementById("section4").offsetTop) + "px";
    // document.querySelector(".offset5").innerText = parseInt(document.getElementById("section5").offsetTop) + "px";
    // document.querySelector(".offset6").innerText = parseInt(document.getElementById("section6").offsetTop) + "px";
    // document.querySelector(".offset7").innerText = parseInt(document.getElementById("section7").offsetTop) + "px";
    // document.querySelector(".offset8").innerText = parseInt(document.getElementById("section8").offsetTop) + "px";
    // document.querySelector(".offset9").innerText = parseInt(document.getElementById("section9").offsetTop) + "px";
});
