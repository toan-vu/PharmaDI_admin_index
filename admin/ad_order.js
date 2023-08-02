// const buttons = document.querySelectorAll(".fa-bars");
// const contents = document.querySelectorAll(".sidebar, .navbar");

// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     buttons.forEach(button=>{button.classList.remove('active')});
//   button.classList.toggle('active');

//   contents.forEach(contents=>{contents.classList.remove('active')});
//   contents[index].classList.toggle('active');
//   })

// })

// const toggle = document.querySelector(".fa-bars");
// const sidebar = document.querySelector(".sidebar");

// toggle.addEventListener('click', () => {
//     sidebar.classList.toggle('active');
// })

const ball = document.querySelector(".fa-bars");
const items = document.querySelectorAll(
  ".sidebar, .navbar, .content, .navbar-user"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});