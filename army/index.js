var navbar = document.querySelector(".nav_section");
navbar.addEventListener('mouseover', function () {
    console.log('마우스가 올라왔음');
})
navbar.addEventListener('mouseout', function () {
    console.log('마우스가 나갔음');
})

//상단바에 마우스 올렸을 경우에 발생하는 이벤트


var news_img = document.querySelector(".gongji_center1 li img");
news_img.addEventListener('mouseover', function () {
    console.log('마우스가 올라왔음');
})
news_img.addEventListener('mouseout', function () {
    console.log('마우스가 나갔음');
})