

// function  loading(){
// var tl = gsap.timeline()

// tl.to(".blk1",{
//     top:"-100%",
//     delay:0.5,
//     duration:0.7,
//     ease:"expo.out"
// })

// tl.from(".blk2",{
//     top:"100%",
//     delay:4.5,
//     duration:1.2,
//     ease:"expo.out"
// },"anim")

// tl.to(".loader",{
//     opacity:0,
// })
// tl.to(".loader",{
//     display:"none",
// })
// }
// loading()


gsap.from(".name-hld  p",{
    x:-1000,
    delay:0.2,
    duration:1.5,
    stagger:0.5,
})

function showsidebar(){
    const  sidebar  =  document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

function hidesidebar(){
    const  sidebar  =  document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}

// ------------------------------------
// step01
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    smoothMobile:true,
});



// step02

scroll.on("scroll", ScrollTrigger.update);


// step03

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0) // if GSAP sets scroll position
      : scroll.scroll.instance.scroll.y; // if GSAP reads scroll position
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// step04
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();


// ------------------------------------------------

// Anchor fix for Locomotive
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      scroll.scrollTo(target);
    }
  });
});



gsap.registerPlugin(SplitText);

function txtanime(){


let split = new SplitText(".page2 .intro-head h1",{
    type:"chars, words, lines",
    
});

gsap.from(split.chars,  {
    // yPercent:"random([-100, 100])",
    rotation:"random(-360,  360)",
    y:-500,
 
    duration:0.5,
    autoAlpha:0,
    delay:0.2,

    stagger:{
        amount:0.5,
        from:"random",
        repeat:0,
        yoyo:true,
    }
});

}


gsap.to(" .intro-head h1",{
    visibility:"visible",
     scrollTrigger:{
        trigger:".page2 .intro-head ",
        scroller:".main",
        start:"top 20%",
        end:"top 5%",
        
        // scrub:true,
        onEnter:()=> txtanime(),
       
    }
})



function Parasplit(){

let parasplit = new SplitText(".skill-container .para1 .dis1 p",{
    type:"chars, words, lines",
    
});

gsap.from(parasplit.chars,  {
    // yPercent:"random([-100, 100])",
    rotation:"random(-360,  360)",
    y:-600,
    duration:2,
    autoAlpha:0,
    delay:0.1,

    stagger:{
        amount:0.5,
        from:"random",
        repeat:0,
        yoyo:true,
    }
});

}

function Parasplit2(){

let parasplit2 = new SplitText(".skill-container .para2 .dis2 p",{
    type:"chars, words, lines",
    
});

gsap.from(parasplit2.chars,  {
    // yPercent:"random([-100, 100])",
    rotation:"random(-360,  360)",
    y:-600,
    duration:2,
    autoAlpha:0,
    delay:0.1,

    stagger:{
        amount:0.5,
        from:"random",
        repeat:0,
        yoyo:true,
    }
});

}

function Parasplit3(){

let parasplit3 = new SplitText(".skill-container .para3 .dis3 p",{
    type:"chars, words, lines",
    
});

gsap.from(parasplit3.chars,  {
    // yPercent:"random([-100, 100])",
    rotation:"random(-360,  360)",
    y:-600,
    duration:2,
    autoAlpha:0,
    delay:0.1,

    stagger:{
        amount:0.5,
        from:"random",
        repeat:0,
        yoyo:true,
    }
});

}

function Parasplit4(){

let parasplit4 = new SplitText(".skill-container .para4 .dis4 p",{
    type:"chars, words, lines",
    
});

gsap.from(parasplit4.chars,  {
    // yPercent:"random([-100, 100])",
    rotation:"random(-360,  360)",
    y:-600,
    duration:2,
    autoAlpha:0,
    delay:0.1,

    stagger:{
        amount:0.5,
        from:"random",
        repeat:0,
        yoyo:true,
    }
});

}

function Parasplit5(){

let parasplit5 = new SplitText(".skill-container .para5 .dis5 p",{
    type:"chars, words, lines",
    
});

gsap.from(parasplit5.chars,  {
    // yPercent:"random([-100, 100])",
    rotation:"random(-360,  360)",
    y:-600,
    duration:2,
    autoAlpha:0,
    delay:0.1,

    stagger:{
        amount:0.5,
        from:"random",
        repeat:0,
        yoyo:true,
    }
});

}


const divcont = document.querySelector('#hide');
let isclicked = true;  

let showOrhide = function(){
    if(isclicked){
        divcont.style.display = 'block';
        divcont.style.color =  '#ffe4c4d5';
         
        gsap.from(" #hide",{
          
            duration:1,
            delay:0,
            opacity:0,
            stagger:1,
            onEnter:()=>  Parasplit()

        
            
        })
        isclicked = false;
       
    }
    else{
        divcont.style.display = 'none';
        isclicked = true;
    }
    
};

const divcont2 = document.querySelector('#hide2');
let isclicked2 = true;  

let showOrhide2 = function(){
    if(isclicked2){
        divcont2.style.display = 'block';
        divcont2.style.color =  '#ffe4c4d5';
         
        gsap.from(" #hide2",{
          
            duration:1,
            delay:0,
            opacity:0,
            stagger:1,
            onEnter:()=>  Parasplit2()

        
            
        })
        isclicked2 = false;
       
    }
    else{
        divcont2.style.display = 'none';
        isclicked2 = true;
    }
    
};

const divcont3 = document.querySelector('#hide3');
let isclicked3 = true;  

let showOrhide3 = function(){
    if(isclicked3){
        divcont3.style.display = 'block';
        divcont3.style.color =  '#ffe4c4d5';
         
        gsap.from(" #hide3",{
          
            duration:1,
            delay:0,
            opacity:0,
            stagger:1,
            onEnter:()=>  Parasplit3()

        
            
        })
        isclicked3 = false;
       
    }
    else{
        divcont3.style.display = 'none';
        isclicked3 = true;
    }
    
};

const divcont4 = document.querySelector('#hide4');
let isclicked4 = true;  

let showOrhide4 = function(){
    if(isclicked4){
        divcont4.style.display = 'block';
        divcont4.style.color =  '#ffe4c4d5';
         
        gsap.from(" #hide4",{
          
            duration:1,
            delay:0,
            opacity:0,
            stagger:1,
            onEnter:()=>  Parasplit4()

        
            
        })
        isclicked4 = false;
       
    }
    else{
        divcont4.style.display = 'none';
        isclicked4 = true;
    }
    
};

const divcont5 = document.querySelector('#hide5');
let isclicked5 = true;  

let showOrhide5 = function(){
    if(isclicked5){
        divcont5.style.display = 'block';
        divcont5.style.color =  '#ffe4c4d5';
         
        gsap.from(" #hide5",{
          
            duration:1,
            delay:0,
            opacity:0,
            stagger:1,
            onEnter:()=>  Parasplit5()

        
            
        })
        isclicked5 = false;
       
    }
    else{
        divcont5.style.display = 'none';
        isclicked5 = true;
    }
    
};





gsap.from(".skill-container   .btn1  ",{

      x:500,
      duration:1,
      autoAlpha:0,  
      scrollTrigger:{
        trigger:".skill-container .btn1",
        scroller:".main",
        start:"top 20%",
        end:"top 5%",
       
     }
})

gsap.from(".skill-container   .btn2  ",{

      x:-500,
      duration:1,
      autoAlpha:0,  
      scrollTrigger:{
        trigger:".skill-container .btn2",
        scroller:".main",
        start:"top 20%",
        end:"top 5%",
        
     }
})

gsap.from(".skill-container   .btn3  ",{

      x:500,
      duration:1,
      autoAlpha:0,  
      scrollTrigger:{
        trigger:".skill-container .btn3",
        scroller:".main",
        start:"top 20%",
        end:"top 5%",
    
     }
})

gsap.from(".skill-container   .btn4  ",{

      x:-500,
      duration:1,
      autoAlpha:0,  
      scrollTrigger:{
        trigger:".skill-container .btn4",
        scroller:".main",
        start:"top 20%",
        end:"top 5%",
      
     }
})

gsap.from(".skill-container   .btn5  ",{

      x:500,
      duration:1,
      autoAlpha:0,  
      scrollTrigger:{
        trigger:".skill-container .btn5",
        scroller:".main",
        start:"top 20%",
        end:"top 5%",
   
     }
})


