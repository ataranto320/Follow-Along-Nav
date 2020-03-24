const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
    // console.log("enter");
    this.classList.add("trigger-enter");
    setTimeout(() => this.classList.add("trigger-enter-active"), 150);
    background.classList.add("open");
    // setTimeout(function() {
    //     console.log(this);
    //     this.classList.add("trigger-enter-active");
    // }, 150);
}

function handleLeave() {
    // console.log("leave");
    this.classList.remove("trigger-enter", "trigger-enter-active");
    background.classList.remove("open");
}

triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach(trigger => trigger.addEventListener("mouselease", handleLeave));