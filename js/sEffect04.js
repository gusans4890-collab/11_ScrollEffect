// 버튼 클릭해서 이동하고 애니메이션 주기
document.querySelectorAll(".nav ul li a").forEach((li) => {
    li.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

//스크롤
let $nav = document.querySelector("nav");

let lastscrollTop = 0; // 이전 스크롤 위치를 저장할 변수

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastscrollTop) {
        $nav.classList.add("hide");
    } else {
        $nav.classList.remove("hide");
    }

    console.log("현재 scrollTop값" + scrollTop);
    console.log("이전 scrollTop값" + lastscrollTop);

    lastscrollTop = scrollTop; // 현재 위치를 다음 비교를 위해 저장

    //메뉴
    let contentItem = document.querySelectorAll(".content_item");
    let navLi = document.querySelectorAll(".nav ul li");

    contentItem.forEach((item, idx) => {
        if (scrollTop >= item.offsetTop) {
            navLi.forEach((li) => {
                li.classList.remove("active");
            });
            document.querySelector(`.nav ul li:nth-child(${idx + 1})`).classList.add("active");
        }
    });
    // info
    document.querySelector(".scroll span").innerText = parseInt(scrollTop);
});
