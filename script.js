// Select all expand buttons and all accordian contents
const expandBtns = document.querySelectorAll("#expand-btn");
const accordianContents = document.querySelectorAll(".accordian-content");

// Loop through each button and add an event listener
expandBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Toggle the corresponding accordian content
        accordianContents[index].classList.toggle("slide-in");
        btn.classList.toggle("rotate");
    });
});
