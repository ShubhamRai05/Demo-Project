

const accordianItems = document.querySelectorAll(".accordian-item");

accordianItems.forEach((item) => {
    const title = item.querySelector(".accordian-title");
    const content = item.querySelector(".accordian-content");
    const icon = item.querySelector("#check");

    title.addEventListener("click", () => {
        accordianItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
                otherItem.querySelector(".accordian-content").style.display = "none";
                otherItem.querySelector("#check").classList.remove("fa-circle-check");
                otherItem.querySelector("#check").classList.add("fa-circle");
                otherItem.querySelector(".accordian-title").style.fontWeight = "normal";
                otherItem.querySelector("#check").style.color = "gray";
            }
        });

        let activeItem = item.classList.toggle("active");
        if (activeItem) {
            content.style.display = "block";
            icon.classList.add("fa-circle-check");
            icon.classList.remove("fa-circle");
            title.style.fontWeight = "bold";
            icon.style.color = "orange"
        } else {
            content.style.display = "none";
            icon.classList.add("fa-circle");
            icon.classList.remove("fa-circle-check");
            title.style.fontWeight = "normal";
            icon.style.color = "grey"
        }
    });
});




