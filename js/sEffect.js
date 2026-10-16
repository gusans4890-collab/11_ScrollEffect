// 버튼을 클릭해서 이동하고 애니메이션 주기
const $li = document.querySelectorAll(".nav ul li a");

$li.forEach(function (li) {
    li.addEventListener("click", function (e) {
        e.preventDefault(); // #의 기본 기능을 차단

        const $href = document.querySelector(li.getAttribute("href"));
        $href.scrollIntoView({ behavior: "smooth" });
        // a링크의 애니메이션 만들기
    });
});

// 스크롤이 됐을 때
window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop >= document.getElementById("section1").offsetTop - 2) {
        document.querySelectorAll(".nav ul li").forEach(function (li) {
            li.classList.remove("active");
        });
        document.querySelector(".nav ul li:nth-child(1)").classList.add("active");
    }
    if (scrollTop >= document.getElementById("section2").offsetTop - 2) {
        document.querySelectorAll(".nav ul li").forEach(function (li) {
            li.classList.remove("active");
        });
        document.querySelector(".nav ul li:nth-child(2)").classList.add("active");
    }
    if (scrollTop >= document.getElementById("section3").offsetTop - 2) {
        document.querySelectorAll(".nav ul li").forEach(function (li) {
            li.classList.remove("active");
        });
        document.querySelector(".nav ul li:nth-child(3)").classList.add("active");
    }
    if (scrollTop >= document.getElementById("section4").offsetTop - 2) {
        document.querySelectorAll(".nav ul li").forEach(function (li) {
            li.classList.remove("active");
        });
        document.querySelector(".nav ul li:nth-child(4)").classList.add("active");
    }
    if (scrollTop >= document.getElementById("section5").offsetTop - 2) {
        document.querySelectorAll(".nav ul li").forEach(function (li) {
            li.classList.remove("active");
        });
        document.querySelector(".nav ul li:nth-child(5)").classList.add("active");
    }
    if (scrollTop >= document.getElementById("section6").offsetTop - 2) {
        document.querySelectorAll(".nav ul li").forEach(function (li) {
            li.classList.remove("active");
        });
        document.querySelector(".nav ul li:nth-child(6)").classList.add("active");
    }
    if (scrollTop >= document.getElementById("section7").offsetTop - 2) {
        document.querySelectorAll(".nav ul li").forEach(function (li) {
            li.classList.remove("active");
        });
        document.querySelector(".nav ul li:nth-child(7)").classList.add("active");
    }
    if (scrollTop >= document.getElementById("section8").offsetTop - 2) {
        document.querySelectorAll(".nav ul li").forEach(function (li) {
            li.classList.remove("active");
        });
        document.querySelector(".nav ul li:nth-child(8)").classList.add("active");
    }
    if (scrollTop >= document.getElementById("section9").offsetTop - 2) {
        document.querySelectorAll(".nav ul li").forEach(function (li) {
            li.classList.remove("active");
        });
        document.querySelector(".nav ul li:nth-child(9)").classList.add("active");
    }
    // info 출력
    document.querySelector(".scroll span").innerText = parseInt(scrollTop);

    document.querySelector(".offset1").innerText = parseInt(document.getElementById("section1").offsetTop) + "px";
    document.querySelector(".offset2").innerText = parseInt(document.getElementById("section2").offsetTop) + "px";
    document.querySelector(".offset3").innerText = parseInt(document.getElementById("section3").offsetTop) + "px";
    document.querySelector(".offset4").innerText = parseInt(document.getElementById("section4").offsetTop) + "px";
    document.querySelector(".offset5").innerText = parseInt(document.getElementById("section5").offsetTop) + "px";
    document.querySelector(".offset6").innerText = parseInt(document.getElementById("section6").offsetTop) + "px";
    document.querySelector(".offset7").innerText = parseInt(document.getElementById("section7").offsetTop) + "px";
    document.querySelector(".offset8").innerText = parseInt(document.getElementById("section8").offsetTop) + "px";
    document.querySelector(".offset9").innerText = parseInt(document.getElementById("section9").offsetTop) + "px";
});
