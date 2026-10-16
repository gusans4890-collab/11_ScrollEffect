// 버튼 클릭해서 이동하고 애니메이션 주기
document.querySelectorAll(".nav ul li a").forEach((li) => {
    li.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    let contentItem = document.querySelectorAll(".content_item");

    contentItem.forEach((item, idx) => {
        // 버튼
        if (scrollTop >= item.offsetTop) {
            document.querySelectorAll(".nav ul li").forEach((li) => {
                li.classList.remove("active");
            });

            document.querySelector(".nav ul li:nth-child(" + (idx + 1) + ")").classList.add("active");
        }

        let scroll = (scrollTop - item.offsetTop) * 0.1;
        let scroll2 = (scrollTop - item.offsetTop) * 0.2;

        item.querySelector(".content_item_city").style.transform = "translateY(" + scroll + "px)";
        // item.querySelector(".content_item_country").style.transform = "translateY(" + -scroll2 + "px)";
        item.querySelector(".content_item_img").style.transform = "translateX(" + -scroll2 + "px)";
        item.querySelector(".content_item_desc").style.transform = "translateX(" + scroll + "px)";
    }); // forEach 닫기

    // info
    document.querySelector(".scroll span").innerText = parseInt(scrollTop);
});
