var navbar = document.querySelector(".nav_section");
navbar.addEventListener('mouseover', function () {
    console.log('마우스가 올라왔음');
})
navbar.addEventListener('mouseout', function () {
    console.log('마우스가 나갔음');
})