  
function  loading(){
var tl = gsap.timeline()

tl.to(".blk1",{
    top:"-100%",
    delay:0.5,
    duration:0.7,
    ease:"expo.out"
})

tl.from(".blk2",{
    top:"100%",
    delay:20,
    duration:1.2,
    ease:"expo.out"
},"anim")

tl.to(".loader",{
    opacity:0,
})
tl.to(".loader",{
    display:"none",
})
}
loading()



// After loader finishes
setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".fallback").style.display = "flex";
}, 20000); // adjust timing to match your loader animation