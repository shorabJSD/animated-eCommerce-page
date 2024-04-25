 


// gsap animation;
 
gsap.from("#header ul li, #header a img", {
    y:-90,
    opacity:0,
    dealy:1,
    duration:1,
    scrollTrigger:{
        trigger:"#header",
        scroller:"body",
        stager:true,
        stagger:1,
    }
})  
gsap.from("#feature", {
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#feature",
        scroller:"body",
        // markers:true,
         start:"top 80%",
         end:"top 50%",
       scrub:2,
      
    }
})  
gsap.from(".pro_container .pro_header, .pro_container .pro_sm", {
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".pro_container .pro_header, .pro_container .pro_sm",
        scroller:"body",
        // markers:true,
         start:"top 80%",
         end:"top 30%",
         scrub:2,
      
    }
})  
 
gsap.from(".pro_feature", {
    y:400,
    opacity:0,
    scrollTrigger:{
        trigger:".pro_feature",
        scroller:"body",
        // markers:true,
         start:"top 80%",
         end:"top 50%",
         scrub:2,
      
    }
})  
 
gsap.from("#banner", {
    x:-500,
    opacity:0,
    scrollTrigger:{
        trigger:"#banner",
        scroller:"body",
        // markers:true,
         start:"top 80%",
         end:"top 50%",
         scrub:2,
      
    }
})  
gsap.from(".pro_container .pro_con_header, .pro_container .pro_con_sm", {
    y:300,
    opacity:0,
    scrollTrigger:{
        trigger:"#banner",
        scroller:"body",
        // markers:true,
         start:"top 80%",
         end:"top 50%",
         scrub:2,
      
    }
})  
gsap.from("#sm_banner .banner_box", {
   scale:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#sm_banner .banner_box",
        scroller:"body",
        // markers:true,
         start:"top 80%",
         end:"top 50%",
         scrub:2,
      
    }
})  
gsap.from("#banner3", {
   scale:0.5,
    opacity:0,
    rotate:360,
    scrollTrigger:{
        trigger:"#banner3",
        scroller:"body",
        // markers:true,
         start:"top 80%",
         end:"top 50%",
         scrub:2,
      
    }
})  
gsap.from("#newslater", {
   scale:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#newslater",
        scroller:"body",
        // markers:true,
         start:"top 70%",
         end:"top 70%",
         scrub:2,
      
    }
})  
 
gsap.from("#footer", {
   scale:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#footer",
        scroller:"body",
        // markers:true,
         start:"top 90%",
         end:"top 100%",
         scrub:2,
      
    }
})  
 
gsap.from("#blog .blog_box1", {
   y:200,
   opacity:0,
   delay:0.5,
   duration:0.5,
})  
gsap.from("#blog .blog_box2", {
   y:200,
   opacity:0,
   scrollTrigger:{
    trigger:"#blog .blog_box2",
    scoller:"body",
    start:"top 80%",
    end:"top 50%",
    // markers:true,
    scrub:3,
   }
})  
gsap.from("#blog .blog_box3", {
   y:200,
   opacity:0,
   scrollTrigger:{
    trigger:"#blog .blog_box3",
    scoller:"body",
    start:"top 80%",
    end:"top 50%",
    // markers:true,
    scrub:3,
   }
})  
 
gsap.from("#blog .blog_box4", {
   y:200,
   opacity:0,
   scrollTrigger:{
    trigger:"#blog .blog_box4",
    scoller:"body",
    start:"top 80%",
    end:"top 50%",
    // markers:true,
    scrub:3,
   }
})  
 
gsap.from("#blog_page", {
  scale:0.8,
   opacity:0,
})  
 
gsap.from("#about_page", {
  scale:2,
   opacity:0,
})  
 
gsap.from(".about_img", {
    x:-500,
   opacity:0,
   delay:0.5,
   duration:0.5,
})  
 
gsap.from(".about_content", {
    x:500,
   opacity:0,
   delay:0.5,
   duration:0.5,
})  
 
 
gsap.from("#contact_page", {
   scale:0.8,
   opacity:0,
   delay:0.5,
   duration:0.5,
})  
gsap.from(".contact .contact_us", {
   x:-500,
   opacity:0,
   delay:0.5,
   duration:0.5,
})  
gsap.from(".contact .map", {
   x:500,
   opacity:0,
   delay:0.5,
   duration:0.5,
})  
 
gsap.from(".form", {
    y:200,
    opacity:0,
    scrollTrigger:{
     trigger:".form",
     scoller:"body",
     start:"top 80%",
     end:"top 50%",
    //  markers:true,
     scrub:3,
    }
})  
gsap.from("#hero h4, #hero h2, #hero h1, #hero h6, #hero button", {
  x:-500,
  opacity:0,
  stagger:0.5,
})  
 
 
   

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

sm_img[0].onclick= function(){
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







