// 버튼을 클릭해서 이동하고 애니메이션 추가
document.querySelectorAll(".nav ul li a").forEach((li) => {
    li.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// 한 글자씩 쪼개기
document.querySelectorAll(".content_item_desc").forEach((elem) => {
    let text = elem.innerText;
    let split = text.split("").join("</span><span>");
    elem.innerHTML = "<span>" + split + "</span>";
});

let conItem = document.querySelectorAll(".content_item");
let span = document.querySelectorAll(".content_item_desc span");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    conItem.forEach((item) => {
        if (scrollTop >= item.offsetTop) {
            span.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add("show");
                }, 50 * idx);
            });
        }
    });
});
