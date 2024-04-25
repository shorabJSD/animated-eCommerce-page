 



const mobile_menu = document.getElementById("mobile_menu");
const nav_item = document.getElementById("nav_item");
const close_btn = document.getElementById("close_btn");
mobile_menu.addEventListener("click", ()=>{
    nav_item.style.right = "0";
})
close_btn.addEventListener("click", ()=>{
    nav_item.style.right = "-100%";
});

 














var main_img = document.getElementById("main_img");
var sm_img = document.getElementsByClassName("sm_img");

sm_img[0].onclick = function(){
    main_img.src = sm_img[0].src;
}
sm_img[1].onclick = function(){
    main_img.src = sm_img[1].src;
}
sm_img[2].onclick = function(){
    main_img.src = sm_img[2].src;
}
sm_img[3].onclick = function(){
    main_img.src = sm_img[3].src;
}