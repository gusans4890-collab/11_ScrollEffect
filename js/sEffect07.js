// 버튼을 클릭해서 이동하고 애니메이션 추가
document.querySelectorAll(".nav ul li a").forEach((li) => {
    li.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    // if (scrollTop >= document.getElementById("section1")) {
    //     document.querySelector(".nav ul li:nth:child(1)").classList.add("active");
    // }if (scrollTop >= document.getElementById("section2")) {
    //     document.querySelector(".nav ul li:nth:child(2)").classList.add("active");
    // }if (scrollTop >= document.getElementById("section3")) {
    //     document.querySelector(".nav ul li:nth:child(3)").classList.add("active");
    // }

    //for
    // for (let i = 1; i <= 9; i++) {
    //     if (scrollTop >= document.getElementById("section" + i).offsetTop) {
    //         document.querySelectorAll(".nav ul li").forEach((menu) => {
    //             menu.classList.remove("active");
    //         });

    //         document.querySelector(`.nav ul li:nth-child(${i})`).classList.add("active");
    //     }
    // }

    //forEach
    let contentItem = document.querySelectorAll(".content_item");
    let navLi = document.querySelectorAll(".nav ul li");
    let contentDesc = document.querySelectorAll(".content_item_desc");

    contentItem.forEach((item, index) => {
        if (scrollTop >= item.offsetTop) {
            // 네비
            navLi.forEach((li) => {
                li.classList.remove("active");
            });
            document.querySelector(`.nav ul li:nth-child(${index + 1})`).classList.add("active");

            //전체 글자 나타나기
            contentDesc[index].classList.add("show");
        } else {
            contentDesc[index].classList.remove("show");
        }
    });
});
