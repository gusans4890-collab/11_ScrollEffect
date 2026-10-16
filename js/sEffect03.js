// 버튼 클릭해서 이동하고 애니메이션 주기
const $btn = document.querySelectorAll(".nav ul li a");

$btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const $href = document.querySelector(btn.getAttribute("href"));
        $href.scrollIntoView({ behavior: "smooth" });
    });
});

//스크롤 효과
let scrollInfo = document.querySelector(".scroll span");
let nav = document.querySelector("nav");
let contentItem = document.querySelectorAll(".contentItem");
let li = document.querySelectorAll(".nav ul li");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    // if (scrollTop > 0) {
    //     nav.classList.add("show");
    // } else {
    //     nav.classList.remove("show");
    // }

    // 삼향연산지
    // 조건 ? true : false
    scrollTop > 0 ? nav.classList.add("show") : nav.classList.remove("show");

    //버튼
    // if (scrollTop >= document.querySelector("#section2").offsetTop) {
    //     document.querySelectorAll(
    //         ".nav ul li".forEach((li) => {
    //             li.classlist.remove("active");
    //         }),
    //     );
    //     document.querySelector(".nav ul li:nth-child(2)").classlist.add("active");
    // }

    //for

    document.querySelectorAll(".content_item").forEach((elem, index) => {
        if (scrollTop >= elem.offsetTop - 2) {
            document.querySelectorAll(".nav ul li").forEach((li) => {
                li.classList.remove("active");
            });
            document.querySelector(".nav ul li:nth-child(" + (index + 1) + ")").classList.add("active");
        }
    });

    //forEach
    contentItem.forEach((item, index) => {
        if (scrollTop >= item.offsetTop) {
            li.forEach((li) => {
                li.classlist.remove("active");
            });
            // document.querySelector("nav ul li nth:child(" + (index + 1) + ")").classlist.add("active");
            document.querySelector(`.nav ul li:nth-child(${index + 1})`).classList.add("active");
        }

        document.querySelector(".nav ul li:nth-child(1)").classList.add("active");
    });

    //info
    scrollInfo.innerText = parseInt(scrollTop);
});
